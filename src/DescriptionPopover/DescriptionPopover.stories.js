import DescriptionPopover from "./DescriptionPopover";

export default {
  title: "Nucleoid/DescriptionPopover",
  component: DescriptionPopover,
};

export const Default = {
  args: {
    anchorEl: document.createElement("div"),
    open: true,
    setAnchorEl: () => {},
    anchorPos: { vertical: "top", horizontal: "center" },
    value: "This is a sample description",
  },
};
