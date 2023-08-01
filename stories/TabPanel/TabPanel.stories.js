import React from "react"; // eslint-disable-line
import TabPanel from "../../TabPanel/TabPanel";

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
