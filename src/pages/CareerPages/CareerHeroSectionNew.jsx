import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import VerticalText from "../../components/Maarquee/VerticalText";
import { keyframes } from "styled-components";
import styled from "styled-components";
import careerTitle from "../../assets/images/new/career_title.png";
// import "./CareerHeroSectionNew.css";
// import CareersText from "../../components/CareersText";
import Fade from "react-reveal/Fade";
import selection from "../../pages/Home/home.module.css";
const CareerHeroSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "101vh",
        // minHeight: "100vh",
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
          // paddingTop: "5rem",
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
          {/* <Stack sx={{ marginTop: {} }}>
            <Typography sx={careertext}>Join a team</Typography>
            <div className="content">
              <h2>
                <Typography sx={touch}>
                  Be part of a team who makes an impact.
                </Typography>
              </h2>
              <h2>
                <Typography sx={touch}>
                  Be part of a team who makes an impact.
                </Typography>
              </h2>
            </div>
          </Stack> */}
          <Box sx={{ width: "90%", mx: "auto" }}>
            <Stack sx={{ marginTop: {} }}>
              <Fade top duration={1800}>
                <Typography
                  // className="animate-charcter"
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
              </Fade>
              <Fade top duration={1800}>
                <Typography
                  // className="animate-charcter"
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
              </Fade>
              {/* <img src={careerTitle} alt="title" width="80%" className="center-block" draggable="false" /> */}
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default CareerHeroSection;

const careertext = {
  fontSize: { xl: "9rem", lg: "9rem", md: "4rem", sm: "4rem", xs: "4rem" },
  color: "black",
  lineHeight: { xl: "9rem", lg: "8rem", md: "5rem", sm: "4rem", xs: "4rem" },
  letterSpacing: "0.1rem",
  fontWeight: 500,
  fontFamily: "LGTrial",
};
const scrolltext = {
  fontSize: { xl: "5rem", lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
  fontFamily: "LGRegular",
  letterSpacing: "0.1rem",
};

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const touch = {
  width: { xl: "60%", lg: "60%", md: "60%", sm: "100%", xs: "100%" },
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: { xl: "9rem", lg: "9rem", md: "4rem", sm: "4rem", xs: "4rem" },
  letterSpacing: "0.1rem",
  lineHeight: {
    xl: "9.5rem",
    lg: "8rem",
    md: "5rem",
    sm: "6rem",
    xs: "6rem",
  },
  fontWeight: 500,
  fontFamily: "LGRegular",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
  backgroundSize: " 120%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  // animation: `${hue} 10s infinite linear`,
};

// linear-gradient(to right, rgb(201, 75, 234) 0%, 11.8421055377%, rgb(112, 62, 195) 23.6842110753%, 34.2105261981%, rgb(59, 33, 140) 44.736841321%, 55.0438597798%, rgb(26, 16, 66) 65.3508782387%, 72.1491247416%, rgb(54, 9, 52) 78.9473712444%, 89.4736856222%, rgb(170, 2, 87) 100%);

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
