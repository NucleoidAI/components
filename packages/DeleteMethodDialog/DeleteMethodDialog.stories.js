import React from "react";
import { action } from "@storybook/addon-actions";
import DeleteMethodDialog from "./DeleteMethodDialog";

export default {
  title: "Nucleoid/DeleteMethodDialog",
  component: DeleteMethodDialog,
  argTypes: {
    setOpen: {
      action: "setOpen",
    },
    deleteMethod: {
      action: "deleteMethod",
    },
  },
};

export const Default = {
  args: {
    setOpen: () => console.log("Dialog closed"),
    deleteMethod: () => console.log("Method deleted"),
  },
};
