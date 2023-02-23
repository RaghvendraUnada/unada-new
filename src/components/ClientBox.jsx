import React from "react";
import { Box } from "@mui/material";
const ClientBox = ({ image, name = "client" }) => {
  return (
    <Box
      sx={{
        marginX: "12px",
        borderRadius: "8px",
        backgroundColor: "#0d0d0d",
        // paddingX: "120px",
        // paddingY: "12px",
        width: "300px",
        height: "auto",
        minHeight: "90px",
        maxHeight: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          height: "auto",
          maxHeight: "70px",
          width: "auto",
        }}
        src={image}
        alt="android"
      />
    </Box>
  );
};

export default ClientBox;
