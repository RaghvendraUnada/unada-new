import React from "react";
import { Box, Typography } from "@mui/material";
const CareersText = ({ TextVertical, name = "client" }) => {
  return (
    <Box>
      <Typography sx={scrolltext}>{TextVertical}</Typography>
    </Box>
  );
};

export default CareersText;

const scrolltext = {
  display: "flex",
  flexWrap: "wrap",
  fontSize: { xl: "2rem", lg: "2rem", md: "3rem", sm: "3rem", xs: "3rem" },
  fontFamily: "LGRegular",
  transform: "rotate(90deg)",
};
