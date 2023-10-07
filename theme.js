import { createTheme } from "@mui/material";

let theme = createTheme({
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
      popUpBg: "#C0C0C0",
      sidebarBG: "#1C2028",
      error: "#CC0000",
      loading: "#D4AF37",
    },
    chat: {
      topBar: "#060F12",
      bottomBar: "white",
      topBarButton: "white",
      bottomBarButton: "#525252",
      userBubble: "#818589",
      botBubble: "#525252",
      textField: "#525252",
      message: "white",
    },

    props: {
      MuiButton: {
        variant: "contained",
      },
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#fff",
            width: 6,
            height: 6,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "#959595",
            minHeight: 24,
            border: "3px",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#c9c9c9",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#c9c9c9",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#c9c9c9",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
            {
              outline: "none",
            },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#323a40",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          background: "#c9c9c9",
          color: "#959595",
        },
      },
    },
  },
};

theme = {
  ...theme,
  custom: {
    schema: {
      width: 75,
    },
  },
};

theme = {
  ...theme,
  spacing: (factor) => 8 * factor, // Bootstrap strategy
};

export default theme;
