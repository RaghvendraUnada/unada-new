import React from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import contactHero from "../../assets/Images/Contact/contactHero.svg";
import { keyframes } from "styled-components";
import styled from "styled-components";
import contactTitle from "../../assets/images/new/contact.png";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
 `;

const ContactHeroSection = () => {
  return (
    <Grid container sx={{ height: "auto" }}>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        xs={12}
        sm={12}
        sx={{
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Box
          sx={{
            height: "auto",
            padding: "8rem",
          }}
        >
          {/* <Stack sx={{ marginTop: {} }}>
            <Typography sx={contactText}>Contact</Typography>
          </Stack>
          <Stack> */}
          {/* <AnimatedGradientText>Get in Touch !</AnimatedGradientText> */}
          {/* <Box
              className="bg-gradient-text"
              sx={{
                fontSize: {
                  lg: "8rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "5rem",
                  lineHeight: "150px",
                },
                textAlign: "start",
                marginTop: "1rem",
                // margin: "2rem auto",
              }}
            >
              Get in Touch !
            </Box> */}
          {/* <Box
              className="content"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                padding: {
                  xl: "2rem",
                  lg: "2rem",
                  md: "2rem",
                  sm: "2rem",
                  xs: "2rem",
                },
                width: "95%",
                // marginLeft: "auto",
                marginRight: "auto",
                marginY: "5rem",
              }}
            >
              <h2>Get in Touch !</h2>
              <h2>Get in Touch !</h2>
            </Box> */}
          {/* <Typography sx={contactText2}>Get in Touch !</Typography> */}
          {/* </Stack> */}
          <img src={contactTitle} alt="contact" width="70%" draggable="false" />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} xs={12} sm={12}>
        <Box sx={{ width: "100%", height: "100%" }}>
          <img
            src={contactHero}
            alt="contactHero"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              border: "0px",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactHeroSection;

const contactText = {
  fontSize: { xl: "8rem", lg: "7rem", md: "4rem", sm: "4rem", xs: "3.3rem" },
  color: "white",
  letterSpacing: "0.1rem",
  fontWeight: 500,
  fontFamily: "LGTrial",
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
  lineHeight: { xl: "5rem", lg: "5rem", md: "4rem", sm: "4rem", xs: "4rem" },
};

// const contactText2 = {
//   fontSize: { xl: "8rem", lg: "7rem", md: "4rem", sm: "4rem", xs: "3rem" },
//   letterSpacing: "0.1rem",
//   fontWeight: 500,
//   fontFamily: "LGRegular",
//   //   color: "blue",
//   background: "linear-gradient(90deg, #90BFFF 0%, #2F80ED 50%, #2D9EE0 100%)",

//   //   background:
//   //     "linear-gradient(to left, rgba(144, 191, 255, 1) 0%, 32.67543911933899%, rgba(47, 128, 237, 1) 65.35087823867798%, 82.67543911933899%, rgba(45, 158, 224, 1) 100%);",
//   backgroundSize: " 100%",
//   backgroundRepeat: "repeat",
//   backgroundClip: "text",
//   textFillColor: "transparent",
//   textAlign: {
//     xl: "left",
//     lg: "left",
//     md: "left",
//     sm: "center",
//     xs: "center",
//   },
// };

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
  letter-spacing: 0.1rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  font-weight: 500;
  text-align: left;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  font-size: 85px;

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 5rem;
  }
  @media (max-width: 992px) {
    font-size: 5rem;
    width: 100%;
  }
  @media (max-width: 895px) {
    font-size: 4.5rem;
    margin: auto;
    margin-top: 1rem;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 4.5rem;
    width: 100%;
  }
  @media (max-width: 320px) {
    font-size: 3.4rem;
    width: 100%;
  }
`;
