import React from "react";
import { Box, Paper } from "@mui/material";
const CaraProjectBox = ({ image, name, hrefLink }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: "#000",
        ml: 2,
        width: {
          xl: "550px",
          lg: "550px",
          md: "450px",
          sm: "400px",
          xs: "300px",
        },
        height: "auto",
      }}
    >
      <a href={hrefLink} target="_blank" alt="img">
        <img
          style={{
            height: "auto",
            width: "100%",
          }}
          src={image}
          alt="android"
        />
      </a>
    </Paper>
  );
};

export default CaraProjectBox;
