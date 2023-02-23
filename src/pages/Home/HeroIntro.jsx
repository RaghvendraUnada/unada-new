import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HeroIntro = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0px",
        bgcolor: "#000000",
        height: "100vh",
        minHeight: { xl: "100%", lg: "100%", md: "100%", xs: "100%" },
        maxHeight: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          maxWidth: "1100px",
          bgcolor: "transparent",
          textAlign: {
            xl: "initial",
            lg: "initial",
            md: "initial",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Typography sx={TextStyle}>
          We build and use <br/>
          <span style={{ color: "#70ADFF" }}>
            technologies to disrupt industries
          </span>
         &nbsp;and drive progress. Our mission is  <br/>to reshape the future.
        </Typography>
      </Box>
    </Paper>
  );
};

export default HeroIntro;

const TextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: {
    xl: "81.7385px",
    lg: "75px",
    md: "45px",
    sm: "45px",
    xs: "25.2753px",
  },
  lineHeight: { xl: "97px", lg: "75px", md: "45px", sm: "45px", xs: "35px" },
  /* or 118% */
  letterSpacing: "2.97231px",
  color: "#D9D9D9",
};
