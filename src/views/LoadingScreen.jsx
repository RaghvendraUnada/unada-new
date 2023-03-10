import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Loadinggif from "../assets/LoderGif.gif";

const LoadingScreen = () => {
  return (
    <Grid
      sx={{
        bgcolor: "white",
        height: "100%",
        minHeight: "100vh",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={Loadinggif}
        sx={{
          height: "auto",
          width: "auto",
          minWidth: "50%",
        }}
      />
    </Grid>
  );
};

export default LoadingScreen;
