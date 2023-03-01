import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import Ourculture from "../../assets/Images/Career/ourculture.svg";
import Ourculture2 from "../../assets/Images/Career/ourculture2.svg";
import Ourculture3 from "../../assets/Images/Career/ourculture3.svg";
import Ourculture4 from "../../assets/Images/Career/ourculture4.svg";
import Ourculture5 from "../../assets/Images/Career/ourculture5.svg";
import HorizontalScrollingList from "../../Components/Maarquee/HorizontalScrollingList";
import Marquee from "react-fast-marquee";
import { keyframes } from "styled-components";
import styled from "styled-components";
import reshapeTitle from "../../assets/images/new/reshape.png";
// import "./OurTeam.module.css";

const OurCultureSection = () => {
  const images = [
    Ourculture,
    Ourculture2,
    Ourculture3,
    Ourculture,
    Ourculture2,
    Ourculture3,
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
        <Typography sx={headtext}>Our Culture</Typography>
        <Typography sx={maintext}>#ReshapeTheFuture</Typography>
        <Typography sx={para}>
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
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Box sx={{ width: "100%", height: "500px" }}>
          <Marquee
            gradient={false}
            speed={100}
            direction={"left"}
            style={{ height: "100%" }}
          >
            {images.map((client, idx) => {
              return (
                <Grid container style={{ width: "100%", height: "100%" }}>
                  <img
                    key={idx}
                    src={client}
                    style={{ height: "100%", width: "150%" }}
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
  fontweight: 500,
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
  fontFamily: "LGLight",
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
