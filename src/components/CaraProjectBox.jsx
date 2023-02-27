import React from "react";
import { Box, Paper } from "@mui/material";
const CaraProjectBox = ({ image, name, hrefLink }) => {
  return (
    <Paper elevation={0} sx={{ background: "#000", ml: 2 }}>
      <a href={hrefLink}>
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
