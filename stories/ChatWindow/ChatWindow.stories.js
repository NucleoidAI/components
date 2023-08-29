import theme from "../../.storybook/yourTheme";

import ChatWindow, { handleAddResponseMessage } from "../../ChatWindow";
import React, { useState } from "react"; // eslint-disable-line

export default {
  title: "Nucleoid/ChatWindow",
  component: ChatWindow,
  theme: theme,
};

export const Default = {
  args: {
    title: "NucBot",
    open: true,
    history: [{ message: "Welcome to NucBot!", user: false }],
    color: "default",
    closeButton: true,
    handleClose: () => {},
    handleNewUserMessage: (msg) => {
      handleAddResponseMessage(`You said: ${msg}`);
    },
    theme: theme,
  },
};
export const AppTheme = {
  args: {
    title: "Chat",
    open: false,
    history: [{ message: "Welcome to NucBot!", user: false }],
    color: "appTheme",
    closeButton: true,
    handleClose: () => {},
    handleNewUserMessage: (msg) => {
      handleAddResponseMessage(`You said: ${msg}`);
    },
  },
};
