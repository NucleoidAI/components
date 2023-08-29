const styles = {
  defaultColors: {
    bar: "#323a40",
    title: "#e0e0e0",
    chatBubble: "#",
    background: "#e0e0e0",
    reciverColor: "#0f9d47",
    sourceColor: "#949494",
    buttonColor: "#e0e0e0",
  },
  boxHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    p: 1,
    width: "100%",
    cursor: "move",
  },
  content: {
    height: "100%",
    width: "100%",
    p: 1,
    overflowY: "auto",
    float: "left",
    clear: "both",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    userSelect: "text",
  },
};

export default styles;
