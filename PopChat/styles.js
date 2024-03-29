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
    position: "fixed",
    flexDirection: "column",
    alignItems: "center",
    height: "650px",
    width: "500px",
    zIndex: 99999,
    right: "75px",
    bottom: "10px",
  },
  header: {
    backgroundColor: "primary.main",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    p: 1,
    width: "100%",
    cursor: "move",
    boxShadow: 20,
  },
  content: {
    height: "100%",
    width: "100%",
    p: 1,
    overflowY: "auto",
    overflowX: "hidden",
    float: "left",
    clear: "both",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    userSelect: "text",
    boxShadow: 20,
  },
};

export default styles;
