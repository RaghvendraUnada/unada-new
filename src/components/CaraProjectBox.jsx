import React from "react";
import { Box, Paper } from "@mui/material";
const CaraProjectBox = ({ image, name, hrefLink }) => {
  return (
    // <Box
    //   sx={{
    //     marginX: "12px",
    //     borderRadius: "8px",
    //     width: "400px",
    //     height: "100%",
    //     minHeight: "100vh",
    //     maxHeight: "120px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <Paper elevation={0} sx={{ background: "#000" }}>
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
    // </Box>
  );
};

export default CaraProjectBox;
