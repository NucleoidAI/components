import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

import { Box, Fab, Tooltip, Typography } from "@mui/material";

const CopyClipboard = (props) => {
  const [copied, setCopied] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ArrowForwardIosIcon />
      <Typography fontFamily={"Trebuchet MS"} variant={"h6"}>
        {props.clipboardText}
      </Typography>
      <Tooltip
        title={copied ? "Copied" : ""}
        leaveDelay={1000}
        onClose={() => setCopied(false)}
      >
        <Fab
          onClick={() => {
            navigator.clipboard.writeText(props.clipboardText);
            setCopied(true);
          }}
          size="small"
        >
          <ContentCopyIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default CopyClipboard;
