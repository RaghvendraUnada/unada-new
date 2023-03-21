import React from "react";
import { Paper, Grid, Box } from "@mui/material";
import WhiteBgImg from "../../assets/Images/Home/White.png";
import BlackBgImg from "../../assets/Images/Home/Black.png";

const HomeHerosection = () => {
  return (
    <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box sx={BoxOneStyle}></Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box sx={BoxTwoStyle}></Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeHerosection;

const BoxOneStyle = {
  background: `url(${WhiteBgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  minHeight: {
    xl: "800px",
    lg: "100vh",
    md: "100vh",
    sm: "400px",
    xs: "400px",
  },
};

const BoxTwoStyle = {
  background: `url(${BlackBgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  minHeight: {
    xl: "800px",
    lg: "100vh",
    md: "100vh",
    sm: "400px",
    xs: "400px",
  },
};
