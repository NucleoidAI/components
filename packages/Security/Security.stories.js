import React from "react";
import { action } from "@storybook/addon-actions";
import Security from "./Security";

export default {
  title: "Nucleoid/Security",
  component: Security,
};

export const Default = {
  args: {
    onClick: () => console.log("button is clicked"),
  },
};
