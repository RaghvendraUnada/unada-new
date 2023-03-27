import React from "react";
import { Box } from "@mui/material";
const ClientBox = ({ image, name = "client" }) => {
  return (
    <Box
      sx={{
        marginX: "12px",
        borderRadius: "8px",
        backgroundColor: "#0d0d0d",
        width: {
          xl: "300px",
          lg: "300px",
          md: "300px",
          sm: "250px",
          xs: "175px",
        },
        height: "auto",
        minHeight: {
          xl: "90px",
          lg: "90px",
          md: "90px",
          sm: "80px",
          xs: "70px",
        },
        maxHeight: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <img
        style={{
          height: "auto",
          maxHeight: "70px",
          width: "auto",
        }}
        src={image}
        alt="android"
      /> */}
      <Box
        component={"img"}
        src={image}
        sx={{
          height: "auto",
          maxHeight: {
            xl: "70px",
            lg: "70px",
            md: "70px",
            sm: "60px",
            xs: "50px",
          },
          width: "auto",
        }}
      />
    </Box>
  );
};

export default ClientBox;
