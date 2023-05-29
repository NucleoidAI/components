// DeleteResourceDialog.stories.js
import React, { useState, useRef } from "react";
import DeleteResourceDialog from "./DeleteResourceDialog";

export default {
  title: "Components/DeleteResourceDialog",
  component: DeleteResourceDialog,
  argTypes: {
    setOpen: {
      action: "setOpen",
    },
    deleteResource: {
      action: "deleteResource",
    },
  },
};

export const Default = {
  args: {
    setOpen: () => console.log("Dialog closed"),
    deleteResource: () => console.log("Resource deleted"),
    ref: {
      current: {
        deleteList: ["Resource 1", "Resource 2", "Resource 3"],
      },
    },
  },
};
