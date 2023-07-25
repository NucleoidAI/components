import Page from "../../Page/Page";
import React from "react"; // eslint-disable-line

export default {
  title: "Nucleoid/Page",
  component: Page,
};

export const Default = {
  args: {
    title: "Default Page",
    children: "This is the default page content.",
  },
};
