import React from "react";
import ParamView from "./ParamView";

export default {
  title: "Nucleoid/ParamView",
  component: ParamView,
  argTypes: {},
};

export const Default = {
  args: {
    params: [
      { name: "param1", type: "string" },
      { name: "param2", type: "number" },
      { name: "param3", type: "string" },
    ],
  },
};
