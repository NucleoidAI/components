import React from "react";
import TabPanel from "./TabPanel";

export default {
  title: "Nucleoid/TabPanel",
  component: TabPanel,
};

export const Default = {
  args: {
    value: 0,
    index: 0,
    children: "This is tab 1",
  },
};

export const SecondTab = {
  args: {
    value: 1,
    index: 1,
    children: "This is tab 2",
  },
};
