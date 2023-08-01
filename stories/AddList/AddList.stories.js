import AddList from "../../AddList/AddList";
import React from "react"; // eslint-disable-line
import { action } from "@storybook/addon-actions";

export default {
  title: "Nucleoid/AddList",
  component: AddList,
};

export const Default = {
  args: {
    list: ["Item 1", "Item 2", "Item 3"],
    clickEvent: action("clicked"),
  },
};
export const EmptyList = {
  args: {
    list: [],
    clickEvent: action("clicked"),
  },
};
export const WithDivider = {
  args: {
    list: ["Item 1", "Item 2", "|", "Item 3", "|", "Item 4"],
    clickEvent: action("clicked"),
  },
};
