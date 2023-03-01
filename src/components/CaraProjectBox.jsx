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
          xl: "500px",
          lg: "500px",
          md: "450px",
          sm: "400px",
          xs: "300px",
        },
        height: "auto",
      }}
    >
      <a href={hrefLink} target="_blank">
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
