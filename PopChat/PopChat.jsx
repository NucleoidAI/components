import "regenerator-runtime";
import "./chat.css";

import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Draggable from "react-draggable";
import MessageSfx from "./messageSFX.mp3";
import MicIcon from "@mui/icons-material/Mic";
import MicNoneIcon from "@mui/icons-material/MicNone";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import styles from "./styles";
import { useEvent } from "@nucleoidjs/synapses";
import useSound from "use-sound";
import { useTheme } from "@mui/material/styles";

import { Box, Container, Fab, IconButton, TextField } from "@mui/material";
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

const PopChat = ({
  title,
  open,
  closeButton,
  handleClose,
  handleNewUserMessage,
  history = [],
  color,
}) => {
  const [typing] = useEvent("TYPED", { loading: false });
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([...history]);
  const [mute, setMute] = React.useState(false);
  const [play] = useSound(MessageSfx);
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  const messagesEndRef = React.useRef(null);
  const [listen, setListen] = React.useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const theme = useTheme();
  const defaultColors = {
    topBar: "#323a40",
    bottomBar: "#323a40",
    topBarButton: "#e0e0e0",
    bottomBarButton: "#e0e0e0",
    userBubble: "#dcdce0",
    botBubble: "#dcdce0",
    message: "#060F12",
    textField: "white",
    indicator: "#060F12",
  };
  const themeColors = {
    topBar: theme.palette.chat.topBar,
    bottomBar: theme.palette.chat.bottomBar,
    topBarButton: theme.palette.chat.topBarButton,
    bottomBarButton: theme.palette.chat.bottomBarButton,
    userBubble: theme.palette.chat.userBubble,
    botBubble: theme.palette.chat.botBubble,
    textField: theme.palette.chat.textField,
    message: theme.palette.chat.message,
    indicator: theme.palette.chat.indicator,
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
  }, [messages, open, typing]);

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
      <Draggable>
        <Box sx={styles.boxHeader}>
          {/* header */}
          <Box
            className="handle"
            sx={{
              backgroundColor: colorPalette.topBar,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 1,
              width: "100%",
              cursor: "move",
              boxShadow: 20,
            }}
            style={{
              borderRadius: "7px 7px 0px 0px",
            }}
          >
            <Box sx={{ marginRight: "auto", color: colorPalette.topBarButton }}>
              {title}
            </Box>
            <IconButton onClick={changeMute}>
              {mute ? (
                <VolumeOffIcon sx={{ color: colorPalette.topBarButton }} />
              ) : (
                <VolumeUpIcon sx={{ color: colorPalette.topBarButton }} />
              )}
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: colorPalette.topBarButton }} />
            </IconButton>
          </Box>
          {/* content */}
          <Box sx={styles.content} style={{}}>
            {messages.map((item, index) => (
              <Container
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: item.user ? "end" : "start",
                  padding: "1px",
                  marginY: 0.5,
                }}
              >
                <div
                  style={{
                    backgroundColor: item.user
                      ? colorPalette.userBubble
                      : colorPalette.botBubble,
                    alignSelf: item.user ? "end" : "start",
                    color: colorPalette.message,
                    borderRadius: item.user
                      ? "15px 15px 0px 15px"
                      : "15px 15px 15px 0px",
                    minWidth: "60px",
                    minHeight: "50px",
                    width: "fit-content",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: 9,
                      fontSize: "16.5px",
                      alignSelf: "center",
                    }}
                  >
                    {item.message}
                  </div>
                </div>
              </Container>
            ))}
            {typing.loading && (
              <div
                style={{
                  backgroundColor: colorPalette.botBubble,
                  width: "fit-content",
                  alignSelf: "start",
                  borderRadius: "15px 15px 15px 0px",
                  marginLeft: "25px",
                  minWidth: "20px",
                }}
              >
                <div style={{ padding: 5 }}>
                  <Container
                    sx={{
                      display: "flex",
                      alignContent: "end",
                      marginY: "10px",
                      justifyContent: "start",
                    }}
                  >
                    <div ref={messagesEndRef}>
                      <div
                        className="dots"
                        style={{
                          "--_g": `no-repeat radial-gradient(circle closest-side,  ${colorPalette.indicator} 90%,#0000)`,
                        }}
                      ></div>
                    </div>
                  </Container>
                </div>
              </div>
            )}
          </Box>
          {/*footer */}
          <Box
            sx={{
              width: "100%",
              p: 1,
              boxShadow: 20,
              backgroundColor: colorPalette.bottomBar,
              borderRadius: "0px 0px 7px 7px",
            }}
          >
            {browserSupportsSpeechRecognition && (
              <IconButton onClick={listenUser}>
                {listen ? (
                  <MicIcon sx={{ color: colorPalette.bottomBarButton }} />
                ) : (
                  <MicNoneIcon sx={{ color: colorPalette.bottomBarButton }} />
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
                  color: colorPalette.textField,
                },
              }}
            />
            <IconButton onClick={newUserMessage}>
              <SendIcon sx={{ color: colorPalette.bottomBarButton }} />
            </IconButton>
          </Box>
          {/*button */}
          <Box
            sx={{ width: "100%", p: 1, display: "flex", justifyContent: "end" }}
          >
            <Fab className="handle" onClick={chatButtonClick}>
              <ChatIcon />
            </Fab>
          </Box>
        </Box>
      </Draggable>
    );
  } else {
    return null;
  }
};

export default PopChat;
