import React from "react";
import styles from "./styles";

import { Box, Typography } from "@mui/material";

function Logo({ title = "", sx, large }) {
  return (
    <Box sx={{ ...sx }}>
      <Box sx={styles.root}>
        <Box>
          <Typography
            display={"inline"}
            fontSize={large ? "35px" : "22px"}
            color={"#209958"}
            sx={{ pr: 0.5 }}
          >
            Nucleoid
          </Typography>

          <Typography
            display={"inline"}
            fontSize={large ? "20px" : "14x"}
            color={"#dfdfdf"}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Logo;
