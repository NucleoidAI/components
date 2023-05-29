import React, { useState, useRef } from "react";
import NonExpandableFunctionTreeItem from "./NonExpandableFunctionTreeItem";

export default {
  title: "Nucleoid/NonExpandableFunctionTreeItem",
  component: NonExpandableFunctionTreeItem,
};

export const Default = {
  args: {
    classes: ["Class1", "Class2", "Class3"],
    className: "Class Name",
    label: "Nucleoid",
    nodeId: 1,
    onClick: () => console.log("Clicked."),
  },
};
