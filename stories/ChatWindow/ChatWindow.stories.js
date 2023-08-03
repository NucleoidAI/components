import ChatWindow, { handleAddResponseMessage } from "../../ChatWindow";
import React, { useState } from "react"; // eslint-disable-line

export default {
  title: "Nucleoid/ChatWindow",
  component: ChatWindow,
};

export const Default = {
  args: {
    open: true,
    history: [{ message: "Welcome to NucBot!", user: false }],
    handleClose: () => {},
    handleNewUserMessage: (msg) => {
      handleAddResponseMessage(`You said: ${msg}`);
    },
  },
};
