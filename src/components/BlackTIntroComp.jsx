import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
const BlackTIntroComp = (props) => {
  return (
    <Grid
      container
      sx={{
        marginTop: "10rem",
        marginBottom: "10rem",
        width: "80%",
        background: "black",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid
        item
        xl={6}
        lg={6}
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: {
            xl: "inline-block",
            lg: "inline-block",
            md: "inline-block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Box>
          <img
            src={props.introImg}
            alt="Intro"
            style={{ height: "auto", width: "100%" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={12}
        sm={12}
        xs={12}
        sx={{
          marginTop: {
            xl: "0rem",
            lg: "0rem",
            md: "3rem",
            sm: "3rem",
            xs: "3rem",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "100%",
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            // marginTop: "2rem",
            marginLeft: {
              xl: "5rem",
              lg: "5rem",
              md: "0rem",
              sm: "0rem",
              xs: "0rem",
            },
            textAlign: {
              xl: "initial",
              lg: "initial",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Fade top duration={1000}>
            <Typography sx={IntroMainText}>{props.Text1}</Typography>
            <Typography sx={IntroColorText}>{props.ColorText}</Typography>
          </Fade>
          <Typography sx={IntroParaText}>{props.MetaText}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlackTIntroComp;
const IntroMainText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4rem",
    lg: "4rem",
    md: "4rem",
    sm: "4rem",
    xs: "3rem",
  },
  lineHeight: {
    xl: "62px",
    lg: "62px",
    md: "55px",
    sm: "45px",
    xs: "35px",
  },
  letterSpacing: "-0.6",
  color: "#FFFFFF",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "red",
    background: "white",
  },
};
const IntroColorText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4rem",
    lg: "4rem",
    md: "4rem",
    sm: "4rem",
    xs: "3rem",
  },
  lineHeight: {
    xl: "62px",
    lg: "62px",
    md: "55px",
    sm: "45px",
    xs: "35px",
  },
  letterSpacing: "-0.6",
  color: "#FFFFFF",
  background: "linear-gradient(90.12deg, #2340FF 0.2%, #0ABFBC 79.48%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "red",
    background: "white",
  },
};
const IntroParaText = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "1.8rem",
    lg: "1.8rem",
    md: "1.8rem",
    sm: "1.5rem",
    xs: "1.5rem",
  },
  lineHeight: {
    xl: "32px",
    lg: "32px",
    md: "28px",
    sm: "28px",
    xs: "22px",
  },
  color: "#A3A3A3",
  marginTop: "2rem",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "red",
    background: "white",
  },
};
