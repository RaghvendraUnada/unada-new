import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import culture1 from "../../assets/Images/Career/Culturesqueez/1.webp";
import culture2 from "../../assets/Images/Career/Culturesqueez/2.webp";
import culture3 from "../../assets/Images/Career/Culturesqueez/3.webp";
import culture4 from "../../assets/Images/Career/Culturesqueez/4.webp";
import culture5 from "../../assets/Images/Career/Culturesqueez/5.webp";
import culture6 from "../../assets/Images/Career/Culturesqueez/6.webp";
import culture7 from "../../assets/Images/Career/Culturesqueez/7.webp";
import culture8 from "../../assets/Images/Career/Culturesqueez/8.webp";
import culture9 from "../../assets/Images/Career/Culturesqueez/9.webp";
import culture10 from "../../assets/Images/Career/Culturesqueez/10.webp";
import culture11 from "../../assets/Images/Career/Culturesqueez/11.webp";
import culture12 from "../../assets/Images/Career/Culturesqueez/12.webp";
import culture13 from "../../assets/Images/Career/Culturesqueez/13.webp";
import culture14 from "../../assets/Images/Career/Culturesqueez/14.webp";
import culture15 from "../../assets/Images/Career/Culturesqueez/15.webp";
import culture16 from "../../assets/Images/Career/Culturesqueez/16.webp";
import culture17 from "../../assets/Images/Career/Culturesqueez/17.webp";
import culture18 from "../../assets/Images/Career/Culturesqueez/18.webp";
import culture19 from "../../assets/Images/Career/Culturesqueez/19.webp";
import culture20 from "../../assets/Images/Career/Culturesqueez/20.webp";
import culture21 from "../../assets/Images/Career/Culturesqueez/21.webp";
import culture22 from "../../assets/Images/Career/Culturesqueez/22.webp";
import culture23 from "../../assets/Images/Career/Culturesqueez/23.webp";
import culture24 from "../../assets/Images/Career/Culturesqueez/24.webp";
// import culture25 from "../../assets/Images/Career/Culturesqueez/newsqueez.jpg";

import HorizontalScrollingList from "../../Components/Maarquee/HorizontalScrollingList";
import Marquee from "react-fast-marquee";
import { keyframes } from "styled-components";
import styled from "styled-components";
import reshapeTitle from "../../assets/images/new/reshape.png";
import selection from "../../pages/Home/home.module.css";
// import "./OurTeam.module.css";
import Fade from "react-reveal/Fade";
const OurCultureSection = () => {
  const images = [
    culture1,
    culture2,
    culture3,
    culture4,
    culture5,
    culture6,
    culture7,
    culture8,
    culture9,
    culture10,
    culture11,
    culture12,
    culture13,
    culture14,
    culture15,
    culture16,
    culture17,
    culture18,
    culture19,
    culture20,
    culture21,
    culture22,
    culture23,
    culture24,
    // culture25,
    // culture25,
    // culture25,
    // culture25,
    // culture25,
    // culture25,
    // culture25,
  ];
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        height: "100%",
        minHeight: "100%",
        textAlign: "center",
      }}
    >
      <Box>
        <Fade top duration={1500}>
          <Typography sx={headtext} className={selection.zero}>
            Our Culture
          </Typography>
        </Fade>
        {/* <Box
          sx={{
            width: {
              xl: "30%",
              lg: "30%",
              md: "30%",
              sm: "40%",
              xs: "40%",
            },
            mx: "auto",
          }}
        >
        </Box> */}
        <Typography sx={maintext} className={selection.invert}>
          #ReshapeTheFuture
        </Typography>
        <Typography sx={para} className={selection.zero}>
          A stream of ideas, a coruscating workplace and the hub of the next
          generation of technologies - these are the philosophies of Unada.
          Experience a “team-first” culture with an extremely collaborative open
          environment that values everyone and build an undeniable legacy at an
          innovation-driven, mission-led company that would transform the
          future.
        </Typography>
      </Box>

      <Box
        sx={{
          paddingTop: "7rem",
          display: "flex",
          flexDirection: "raw",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: {
              xl: "500px",
              lg: "500px",
              md: "500px",
              sm: "400px",
              xs: "200px",
            },
          }}
        >
          <Marquee
            gradient={false}
            speed={20}
            direction={"left"}
            style={{ height: "100%" }}
          >
            {images.map((client, idx) => {
              return (
                <Grid
                  container
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    key={idx}
                    src={client}
                    style={{
                      height: "90%",
                      width: "99.5%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Grid>
              );
            })}
          </Marquee>
        </Box>{" "}
      </Box>
    </Grid>
  );
};
{
  /* <img
  alt="Our Culture"
  src={Ourculture}
  style={{ width: "100%", height: "auto" }}
/> */
}
export default OurCultureSection;
const headtext = {
  display: "flex",
  justifyContent: "center",
  textalign: "center",
  fontfamily: "LGTrial",
  fontweight: 900,
  fontSize: { xl: "7rem", lg: "7rem", md: "5rem", sm: "5rem", xs: "5rem" },
  color: "#000000",
  marginTop: "5rem",
};

const maintext = {
  fontSize: "30px",
  fontFamily: "LGTrial",
  fontweight: "bold",
  // display: "flex",
  // justifyContent: "center",
  textalign: "center",
  // background: "rgb(2,0,36)",
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(47,128,237,1) 44%, rgba(45,158,224,1) 100%)",
  backgroundSize: "100%",
  backgroundRepeat: "repeat-x",
  backgroundClip: "text",
  textFillColor: "transparent",
};
const para = {
  fontSize: {
    xl: "2.4rem",
    lg: "2.4rem",
    md: "2.4rem",
    sm: "1.4rem",
    xs: "1.4rem",
  },
  fontFamily: "LGTrial",
  color: "#484848",
  textAlign: "center",
  padding: "2rem 5rem 0rem 5rem",
};

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
  font-size: 30px;
  font-weight: 500;
  // overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
`;
