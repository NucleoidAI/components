import CopyClipboard from "../../CopyClipboard/CopyClipboard";
import React from "react"; // eslint-disable-line

export default {
  title: "Nucleoid/CopyClipboard",
  component: CopyClipboard,
};

export const Default = {
  args: {
    clipboardText: "This text will get copied to your clipboard.",
  },
};
