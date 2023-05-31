import React from "react";
import CopyClipboard from "../../CopyClipboard/CopyClipboard";

export default {
  title: "Nucleoid/CopyClipboard",
  component: CopyClipboard,
};

export const Default = {
  args: {
    clipboardText: "This text will get copied to your clipboard.",
  },
};
