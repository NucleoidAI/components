import { create } from "@storybook/theming/create";

export default create({
  palette: {
    type: "light",
    primary: {
      main: "#060F12",
    },
    secondary: {
      main: "#C7C7C7",
    },
    background: {
      default: "#F7F7F7",
      paper: "#EDEDED",
    },
    text: {
      secondary: "#45CCB4",
    },
    custom: {
      error: "#CC0000",
      loading: "#D4AF37",
    },
  },
});
