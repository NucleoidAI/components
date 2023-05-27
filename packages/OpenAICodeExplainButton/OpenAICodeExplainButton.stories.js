import React from "react";
import { action } from "@storybook/addon-actions";
import OpenAICodeExplainButton from "./OpenAICodeExplainButton";

export default {
  title: "Nucleoid/OpenAICodeExplainButton",
  component: OpenAICodeExplainButton,
  argTypes: {
    clickEvent: { action: "clicked" },
    progress: { action: "clicked" },
  },
};

export const Default = {
  args: {
    clickEvent: () => console.log("button is clicked"),
    progress: false,
  },
  parameters: {
    action: "clicked",
  },
};
