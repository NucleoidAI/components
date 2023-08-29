import "regenerator-runtime";

import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import MessageSfx from "./messageSFX.mp3";
import MicIcon from "@mui/icons-material/Mic";
import MicNoneIcon from "@mui/icons-material/MicNone";
import React from "react";
import { Rnd } from "react-rnd";
import SendIcon from "@mui/icons-material/Send";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import styles from "./styles";
import useSound from "use-sound";
import { useTheme } from "@mui/material/styles";

import { Box, Fab, IconButton, TextField } from "@mui/material";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const sub = { item: null };
const response = (res) => {
  sub.item = res;
};

export const handleAddResponseMessage = (ret) => {
  sub.item(ret);
};

const ChatWindow = ({
  title,
  open,
  closeButton,
  handleClose,
  handleNewUserMessage,
  history = [],
  color,
}) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([...history]);
  const rndRef = React.useRef();
  const [defaultPosition, setDefaultPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [mute, setMute] = React.useState(false);
  const [play] = useSound(MessageSfx);
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  const messagesEndRef = React.useRef(null);
  const [listen, setListen] = React.useState(false);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const theme = useTheme();
  const defaultColors = {
    bar: "#323a40",
    title: "#e0e0e0",
    chatBubble: "#",
    background: "#e0e0e0",
    reciverTextColor: "#",
    sourceColor: "#",
    buttonColor: "#e0e0e0",
  };
  const themeColors = {
    bar: theme.palette.primary.main,
    title: theme.palette.background.default,
    background: theme.palette.background.paper,
    reciverColor: theme.palette.text.secondary,
    sourceColor: theme.palette.secondary.main,
    buttonColor: theme.palette.secondary.main,
  };
  const [colorPalette, setColorPalette] = React.useState();

  React.useEffect(() => {
    switch (color) {
      case "default": {
        setColorPalette(defaultColors);
        break;
      }
      case "appTheme": {
        setColorPalette(themeColors);
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  React.useEffect(() => {
    response((ret) => {
      setMessages([...messages, { message: ret, user: false }]);
    });
    !mute && play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  React.useEffect(() => {
    const posX = window.innerWidth - 530;
    const posY = window.innerHeight - 660;
    setDefaultPosition({ x: posX, y: posY });
  }, [open]);

  React.useEffect(() => {
    listen
      ? SpeechRecognition.startListening({
          continuous: true,
          language: "en-US",
        })
      : SpeechRecognition.stopListening();
  }, [listen]);

  const newUserMessage = () => {
    handleNewUserMessage(message, transcript);
    setMessages([...messages, { message: message || transcript, user: true }]);
    setMessage("");
    resetTranscript();
  };

  const changeMute = () => {
    setMute(!mute);
  };

  const chatButtonClick = () => {
    return closeButton ? handleClose() : false;
  };

  const listenUser = () => {
    setListen(!listen);
  };

  if (open) {
    return (
      <Rnd
        ref={rndRef}
        position={{ x: defaultPosition.x, y: defaultPosition.y }}
        onDragStop={(e, d) => setDefaultPosition({ x: d.x, y: d.y })}
        default={{
          x: defaultPosition.x,
          y: defaultPosition.y,
          height: 650,
          width: 450,
        }}
        minHeight={650}
        minWidth={450}
        bounds={"window"}
        dragHandleClassName={"handle"}
        style={{
          zIndex: 999999999,
        }}
        resizeHandleStyles={{
          bottom: { bottom: 65 },
        }}
      >
        <Box sx={styles.boxHeader}>
          {/* header */}
          <Box
            className="handle"
            sx={styles.header}
            style={{ backgroundColor: colorPalette.bar }}
          >
            <Box sx={{ marginRight: "auto", color: colorPalette.title }}>
              {title}
            </Box>
            <IconButton onClick={changeMute}>
              {mute ? (
                <VolumeOffIcon sx={{ color: colorPalette.buttonColor }} />
              ) : (
                <VolumeUpIcon sx={{ color: colorPalette.buttonColor }} />
              )}
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: colorPalette.buttonColor }} />
            </IconButton>
          </Box>
          {/* content */}
          <Box
            sx={styles.content}
            style={{ border: `solid 0.5px ${colorPalette.bar}` }}
          >
            {messages.map((item, index) => (
              <div
                key={index}
                ref={messagesEndRef}
                style={{
                  backgroundColor: item.user
                    ? colorPalette.reciverColor
                    : colorPalette.sourceColor,
                  margin: 5,
                  borderRadius: 5,
                  width: "fit-content",
                  alignSelf: item.user ? "end" : "start",
                  color: "black",
                }}
              >
                <div style={{ padding: 12 }}>{item.message}</div>
              </div>
            ))}
          </Box>
          {/*footer */}
          <Box
            sx={{
              width: "100%",
              p: 1,
              border: `solid 0.5px ${colorPalette.bar}`,
              bgcolor: colorPalette.bar,
            }}
          >
            {browserSupportsSpeechRecognition && (
              <IconButton onClick={listenUser}>
                {listen ? (
                  <MicIcon sx={{ color: colorPalette.buttonColor }} />
                ) : (
                  <MicNoneIcon sx={{ color: colorPalette.buttonColor }} />
                )}
              </IconButton>
            )}
            <TextField
              color="secondary"
              autoComplete="off"
              autoFocus
              value={message || transcript}
              onChange={(e) => {
                if (e.target.value === "") {
                  resetTranscript();
                }
                setMessage(e.target.value || e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  newUserMessage();
                }
              }}
              placeholder={"Type a message..."}
              size="small"
              sx={{
                width: "80%",
                marginX: "3px",
                input: {
                  color: colorPalette.title,
                },
              }}
            />
            <IconButton onClick={newUserMessage}>
              <SendIcon sx={{ color: colorPalette.buttonColor }} />
            </IconButton>
          </Box>
          {/*button */}
          <Box
            sx={{ width: "100%", p: 1, display: "flex", justifyContent: "end" }}
          >
            <Fab
              className="handle"
              onClick={chatButtonClick}
              sx={{
                color: colorPalette.bar,
                backgroundColor: colorPalette.title,
                ":hover": {
                  color: colorPalette.bar,
                  backgroundColor: colorPalette.title,
                },
              }}
            >
              <ChatIcon />
            </Fab>
          </Box>
        </Box>
      </Rnd>
    );
  } else {
    return null;
  }
};

export default ChatWindow;
