import theme from "../../theme";

import PopChat, { handleAddResponseMessage } from "../../PopChat";
import React, { useEffect, useState } from "react"; // eslint-disable-line

export default {
  title: "Nucleoid/PopChat",
  component: PopChat,
};
export const Default = {
  args: {
    title: "NucBot",
    open: true,
    history: [{ message: "Welcome to NucBot!", user: false }],
    appTheme: theme,
    colorType: "default",
    closeButton: true,
    handleClose: () => {},
    handleNewUserMessage: (msg) => {
      handleAddResponseMessage(`You said: ${msg}`);
    },
  },
};
export const AppTheme = {
  args: {
    title: "Chat",
    open: true,
    history: [{ message: "Welcome to NucBot!", user: false }],
    appTheme: theme,
    colorType: "appTheme",
    closeButton: true,
    handleClose: () => {},
    handleNewUserMessage: (msg) => {
      handleAddResponseMessage(`You said: ${msg}`);
    },
  },
};
