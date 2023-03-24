import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import unadasLifeImg from "../../assets/Images/unadalife/unadalife.webp";
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
  fontFamily: "LGTrial",
  fontWeight: 600,
  textAlign: "center",
  background: "linear-gradient(182.5deg, #000000 35%, #272727 70%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};
