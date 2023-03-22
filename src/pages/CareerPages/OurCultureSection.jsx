import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import cul1 from "../../assets/Images/ourculture/cul1.webp";
import cul2 from "../../assets/Images/ourculture/cul2.webp";
import cul3 from "../../assets/Images/ourculture/cul3.webp";
import cul4 from "../../assets/Images/ourculture/cul4.webp";
import cul5 from "../../assets/Images/ourculture/cul5.webp";
import cul6 from "../../assets/Images/ourculture/cul6.webp";
import cul7 from "../../assets/Images/ourculture/cul7.webp";
import cul8 from "../../assets/Images/ourculture/cul8.webp";
import cul9 from "../../assets/Images/ourculture/cul9.webp";
import cul10 from "../../assets/Images/ourculture/cul10.webp";
import cul11 from "../../assets/Images/ourculture/cul11.webp";
import cul12 from "../../assets/Images/ourculture/cul12.webp";
import cul13 from "../../assets/Images/ourculture/cul13.webp";
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
    cul1,
    cul2,
    cul3,
    cul4,
    cul5,
    cul6,
    cul7,
    cul8,
    cul9,
    cul10,
    cul11,
    cul12,
    cul13,
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
        <Fade top duration={1000}>
          <Typography sx={headtext} className={selection.zero}>
            Our Culture
          </Typography>
        </Fade>
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
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
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
            speed={100}
            direction={"left"}
            infinite={true}
            style={{ height: "100%" }}
          >
            {images.map((client, idx) => {
              return (
                <Grid
                  container
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                  key={idx}
                >
                  <Box
                    component={"img"}
                    src={client}
                    sx={{
                      height: "100%",
                      width: "99.5%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Grid>
              );
            })}
          </Marquee>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: "7rem",
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
          },
          flexDirection: "raw",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Splide
          options={{
            type: "loop",
            gap: "1px",
            drag: false,
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {images.map((client, idx) => {
            return (
              <SplideSlide>
                <Box
                  component={"img"}
                  src={client}
                  sx={{
                    height: "100%",
                    width: "99.5%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </Grid>
  );
};

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
  fontSize: {
    xl: "30px",
    lg: "30px",
    md: "25px",
    sm: "20px",
    xs: "20px",
  },
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

// <Grid
//   container
//   sx={{
//     width: "100%",
//     height: "100%",
//   }}
//   key={idx}
// >
//   <Box
//     component={"img"}
//     src={client}
//     style={{
//       height: "100%",
//       width: "99.5%",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }}
//   />
// </Grid>
