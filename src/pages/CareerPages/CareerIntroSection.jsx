import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import SwiperSliderCara from "../../Components/SwiperSlider/SwiperSliderCara";
import IntroImg1 from "../../assets/Images/Career/IntroImg1.svg";
// import IntroImg2 from "../../assets/Images/Career/IntroImg2.svg";
// import IntroImg3 from "../../assets/Images/Career/IntroImg3.svg";
const ImgArr = [
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
];
function CareerIntroSection() {
  return (
    <Grid
      container
      sx={{
        height: "100%",
        // minHeight: { lg: "100vh", md: "100vh", sm: "50vh", xs: "50vh" },
        marginTop: "-6rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          textAlign: "center",
          padding: "6rem",
          // marginTop: "5rem",
        }}
      >
        <Typography sx={IntroMainText}>
          We believe in building the future, one line of code at a time. We are
          looking for people who are voraciously curious and who are willing to
          confront challenges. At Unada, no two days are the same. We have gone
          beyond and replaced conventions and rules set by companies to foster
          growth, development, collaboration and innovation at our workplace.
        </Typography>
        <Typography sx={{ ...IntroMainText, marginTop: "0rem" }}>
          Be it spending time on a Saturday morning while playing cricket
          thinking about how Metaverse could transform the IPL. Or spending
          endless hours fine tuning your neuromorphic design themes to improve
          user interface while listening to Ed Sheeran. Or working with a team
          of like minded people building technology that could transform
          programmatic ad platforms. If this sounds like you, we would love to
          hear from you!
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "100%",
        }}
      >
        <SwiperSliderCara data={ImgArr} />
      </Grid>
    </Grid>
  );
}

export default CareerIntroSection;

const IntroMainText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  display: "flex",
  alignitems: "center",
  fontSize: {
    xl: "2.2rem",
    lg: "2rem",
    md: "2rem",
    sm: "1rem",
    xs: "1rem",
  },
  color: "#484848",
  marginTop: "14rem",
};
