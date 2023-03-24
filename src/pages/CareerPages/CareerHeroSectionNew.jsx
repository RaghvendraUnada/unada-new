import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";
import { keyframes } from "styled-components";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import selection from "../../pages/Home/home.module.css";

const CareerHeroSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "101vh",
        minHeight: {
          xl: "750px",
          lg: "700px",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
      }}
    >
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        xs={12}
        sm={12}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            padding: {
              xl: "2rem",
              lg: "2rem",
              md: "2rem",
              sm: "2rem",
              xs: "2rem",
            },
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box sx={{ width: "90%", mx: "auto" }}>
            <Fade top duration={1000}>
              <Stack sx={{ marginTop: {} }}>
                <Typography
                  sx={{
                    ...textStyle1,
                    background: "black",
                    backgroundSize: " 100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",

                    textFillColor: "transparent",
                  }}
                  className={selection.invert}
                >
                  Join a team
                </Typography>
                <Typography
                  className={selection.invert}
                  sx={{
                    ...textStyle1,
                    background:
                      "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
                    backgroundSize: " 100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Be a part of team who makes an impact.
                </Typography>
              </Stack>
            </Fade>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default CareerHeroSection;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const AnimatedGradientText = styled.h1`
  background-image: -webkit-linear-gradient(
    2deg,
    rgba(201, 75, 234, 1) 0%,
    rgba(112, 62, 195, 1),
    rgba(59, 33, 140, 1),
    rgba(26, 16, 66, 1),
    rgba(54, 9, 52, 1),
    rgba(170, 2, 87, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  font-size: 85px;
  font-weight: 500;
  // overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  width: 1266px;
  margin: auto;
  @media (max-width: 1200px) {
    width: 60%;
    font-size: 9rem;
  }
  @media (max-width: 992px) {
    font-size: 9rem;
    width: 60%;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    width: 60%;
  }
  @media (max-width: 576px) {
    font-size: 4rem;
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
    font-size: 4rem;
  }
`;
const textStyle1 = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "85px",
    lg: "85px",
    md: "65px",
    sm: "50px",
    xs: "35px",
  },
  lineHeight: {
    xl: "95px",
    lg: "95px",
    md: "65px",
    sm: "55px",
    xs: "45px",
  },
  letterSpacing: 1,
};
