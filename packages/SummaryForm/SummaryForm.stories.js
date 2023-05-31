import React from "react";
import SummaryForm from "./SummaryForm";

export default {
  title: "Nucleoid/SummaryForm",
  component: SummaryForm,
};

export const Default = {
  args: {
    summaryText: "",
    descriptionText: "",
    summaryTextChangeHandler: () => console.log("summary text changed."),
    descriptionTextChangeHandler: () =>
      console.log("description text changed."),
    ref: {
      current: {},
    },
  },
};

export const Secondary = {
  args: {
    summaryText: "This is summary text.",
    descriptionText: "This is desription text.",
    summaryTextChangeHandler: () => console.log("summary text changed."),
    descriptionTextChangeHandler: () =>
      console.log("description text changed."),
    ref: {
      current: {},
    },
  },
};
