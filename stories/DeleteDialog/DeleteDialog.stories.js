import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import React from "react"; // eslint-disable-line
import { action } from "@storybook/addon-actions"; // eslint-disable-line
export default {
  title: "Nucleoid/DeleteDialog",
  component: DeleteDialog,
  argTypes: {
    setOpen: {
      action: "setOpen",
    },
    deleteMethod: {
      action: "deleteMethod",
    },
  },
};

export const Method = {
  args: {
    setOpen: () => console.log("Dialog closed"),
    deleteFunction: () => console.log("Method deleted."),
    type: "method",
    ref: {
      current: {},
    },
  },
};
export const Resource = {
  args: {
    setOpen: () => console.log("Dialog closed"),
    deleteFunction: () => console.log("Resource deleted."),
    type: "resource",
    ref: {
      current: {
        deleteList: ["Resource 1", "Resource 2", "Resource 3"],
      },
    },
  },
};
