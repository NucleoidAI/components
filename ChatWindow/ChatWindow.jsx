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
import useSound from "use-sound";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* header */}
          <Box
            className="handle"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 1,
              width: "100%",
              cursor: "move",
            }}
          >
              {title}
            </Box>
            <IconButton onClick={changeMute} sx={{}}>
              {mute ? (
              ) : (
              )}
            </IconButton>
            <IconButton onClick={handleClose}>
            </IconButton>
          </Box>
          {/* content */}
          <Box
            sx={{
              height: "100%",
              width: "100%",
              p: 1,
              overflowY: "auto",
              float: "left",
              clear: "both",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              userSelect: "text",
            }}
          >
            {messages.map((item, index) => (
              <div
                key={index}
                ref={messagesEndRef}
                style={{
                  margin: 5,
                  borderRadius: 5,
                  width: "fit-content",
                  alignSelf: item.user ? "end" : "start",
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
              autoComplete="off"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  newUserMessage();
                }
              }}
              placeholder={"Type a message..."}
              size="small"
            />
            <IconButton onClick={newUserMessage}>
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
                backgroundColor: colorPalette.title,
                ":hover": {
                  color: colorPalette.bar,
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
