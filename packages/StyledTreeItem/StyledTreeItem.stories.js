import React from "react";
import StyledTreeItem from "./StyledTreeItem";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

export default {
  title: "Nucleoid/StyledTreeItem",
  component: StyledTreeItem,
};

export const Default = {
  args: {
    labelText: "Example Item1",
    labelIcon: BookOutlinedIcon,
    labelInfo: "This is an example item",
    nodeId: "1",
  },
};
