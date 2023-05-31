import React from "react";
import AlertMessage from "../../AlertMessage/AlertMessage";

export default {
  title: "Nucleoid/AlertMessage",
  component: AlertMessage,
  argTypes: {
    message: {
      control: "text",
      description: "The message to be shown in the alert",
      defaultValue: "This is an alert message",
    },
  },
};

export const Default = {
  args: {
    message: "This is an alert message",
  },
};
