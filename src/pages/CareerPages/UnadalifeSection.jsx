import React from "react";
import { Typography, Box, Paper, Grid, Stack, Skeleton } from "@mui/material";
// import UnadaLife from "../../assets/Images/Career/unadalife.svg";
// import UnadaSLife1 from "../../assets/Images/Career/unadaslife1.svg";
// import UnadaSLife2 from "../../assets/Images/Career/unadaslife2.svg";
// import UnadaSLife3 from "../../assets/Images/Career/unadalife3.svg";
import unadasLifeImg from "../../assets/Images/cutOutImg/1.webp";
// import culture5 from "../../assets/Images/Career/realCulture/"
// import Skeleton from '@mui/material/Skeleton'
import selection from "../../pages/Home/home.module.css";

function UnadalifeSection() {
  return (
    <Grid
      container
      sx={{
        marginTop: "-1rem",
      }}
    >
      <Grid item sx={{ width: "inherit" }}>
        <Box
          sx={{
            position: "relative",
            minHeight: {
              xl: "750px",
              lg: "700px",
              md: "50vh",
              sm: "auto",
              xs: "auto",
            },
          }}
        >
          <img
            alt="Unada Life"
            src={unadasLifeImg}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              // bgcolor: "red",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: {
                xl: "75%",
                lg: "80%",
                md: "84%",
                sm: "84%",
                xs: "80%",
              },
              width: "100%",
              // bgcolor: "red",
            }}
          >
            <Typography sx={text} className={selection.invert}>
              Unada’s life
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UnadalifeSection;

const text = {
  fontSize: {
    xl: "20rem",
    lg: "19rem",
    md: "10rem",
    sm: "7em",
    xs: "5.8rem",
  },
  // position: "absolute",
  fontFamily: "LGTrial",
  // top: {
  //   xl: "75%",
  //   lg: "73.5%",
  //   md: "85%",
  //   sm: "82.5%",
  //   xs: "83%",
  // },
  // left: {
  //   xl: "15%",
  //   lg: "15%",
  //   md: "23%",
  //   sm: "20%",
  //   xs: "15%",
  // },

  fontWeight: 600,
  textAlign: "center",
  // color: "#171717",
  background: "linear-gradient(182.5deg, #000000 35%, #272727 70%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};
