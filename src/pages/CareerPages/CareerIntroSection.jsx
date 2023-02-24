import React, { useState } from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import SwiperSliderCara from "../../Components/SwiperSlider/SwiperSliderCara";
import IntroImg1 from "../../assets/Images/Career/IntroImg1.svg";
// import IntroImg2 from "../../assets/Images/Career/IntroImg2.svg";
// import IntroImg3 from "../../assets/Images/Career/IntroImg3.svg";
import Slider from "react-slick";

const ImgArr = [
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
  IntroImg1,
];
function CareerIntroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = ImgArr.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 2 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 2 ? 0 : s + 1));
  };
  return (
    <Grid
      container
      sx={{
        height: "100%",
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
        <Box sx={{ width: "100%" }}>
          <Slider {...settings}>
            {ImgArr.map((slide, sid) => (
              <Box
                key={`slide-${sid}`}
                sx={{
                  flex: "none",
                  boxSize: "100%",
                  padding: "1.5rem",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "33%",
                }}
              >
                <Box
                  sx={{
                    backgroundSize: "cover",
                    width: "100%",
                    height: {
                      xs: "250px",
                      lg: "450px",
                    },
                  }}
                  component="img"
                  alt="hello"
                  src={slide}
                />
                <Typography sx={SwiperText}>Studio 25 Tiktok</Typography>
              </Box>
            ))}
          </Slider>
        </Box>
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

const SwiperText = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 400,
  // fontSize: "16.5839px",
  fontSize: {
    xl: "16.5839px",
    lg: "16.5839px",
    md: "16.5839px",
    sm: "12px",
    xs: "12px",
  },
  lineHeight: " 11px",
  color: "#FAFAFA",
  marginLeft: {
    sm: "0",
    md: "20rem",
  },
  marginRight: "auto",
  marginTop: "2rem",
  marginBottom: "4rem",
};
