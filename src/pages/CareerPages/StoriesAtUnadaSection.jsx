import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SwiperSliderCara from "../../Components/SwiperSlider/SwiperSliderCara";
import UnadaStoryImg from "../../assets/Images/Career/IntroImg1.svg";
import { keyframes } from "styled-components";
import styled from "styled-components";
import storiesTitle from "../../assets/images/new/stories.png";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import Fade from "react-reveal/Fade";
import selection from "./selection.module.css";
// import culture23 from "../../assets/Images/Career/realCulture/culture23.jpg";
// import culture21 from "../../assets/Images/Career/realCulture/culture21.jpg";
// import culture24 from "../../assets/Images/Career/realCulture/culture24.jpg";
// import culture11 from "../../assets/Images/Career/realCulture/culture11.jpg";
// import culture12 from "../../assets/Images/Career/realCulture/culture12.jpg";
// import culture13 from "../../assets/Images/Career/realCulture/culture13.jpg";
// import culture14 from "../../assets/Images/Career/realCulture/culture14.jpg";
// import culture15 from "../../assets/Images/Career/realCulture/culture15.jpg";
// import culture16 from "../../assets/Images/Career/realCulture/culture16.jpg";
import culture23 from "../../assets/Images/Career/imginwebp/14.webp";
import culture21 from "../../assets/Images/Career/imginwebp/15.webp";
import culture24 from "../../assets/Images/Career/imginwebp/16.webp";
import culture11 from "../../assets/Images/Career/imginwebp/17.webp";
import culture12 from "../../assets/Images/Career/imginwebp/18.webp";
import culture13 from "../../assets/Images/Career/imginwebp/19.webp";
import culture14 from "../../assets/Images/Career/imginwebp/20.webp";
import culture15 from "../../assets/Images/Career/imginwebp/21.webp";
import culture16 from "../../assets/Images/Career/imginwebp/22.webp";
const ImgArr = [
  // UnadaStoryImg,
  // UnadaStoryImg,
  // UnadaStoryImg,
  // UnadaStoryImg,
  // UnadaStoryImg,
  // UnadaStoryImg,
  { src: culture21, text: "Our Design Team" },
  { src: culture23, text: "Our Dev Team" },
  { src: culture24, text: "Our 3D Team" },
  { src: culture11, text: "Our just Team" },
  { src: culture12, text: "Our Design Team" },
  { src: culture13, text: "Our Design Team" },
  { src: culture14, text: "Our Design Team" },
  { src: culture15, text: "Our Design Team" },
  { src: culture16, text: "Our Design Team" },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <GrNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const StoriesAtUnadaSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid
      container
      sx={{
        background: "black",
        padding: "8rem 2rem 0rem 2rem",
      }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: {
              xl: "95%",
              lg: "95%",
              md: "90%",
              sm: "90%",
              xs: "90%",
            },
            mx: "auto",
          }}
        >
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Fade top duration={1800}>
              <Typography
                sx={{
                  ...textStyle1,
                  color: "#fff",
                  fontSize: {
                    xl: "64px",
                    lg: "64px",
                    md: "52px",
                    sm: "42px",
                    xs: "30px",
                  },
                }}
                className={selection.invert2}
              >
                {" "}
                Stories at
              </Typography>
              <Typography
                sx={{
                  ...textStyle1,
                  background:
                    "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
                  backgroundSize: " 100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                className={selection.invert2}
              >
                Unada
              </Typography>
            </Fade>
          </Box>
          <Typography sx={{ ...MetaText, mt: 2 }} className={selection.invert2}>
            Stories at Unada provide an authentic, unfiltered glimpse into our
            workplace where memories are made, innovations are fostered and
            foremost everyone feels included, valued, respected and are able to
            bring their authentic selves to work.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          width: "100%",
          mx: "auto",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "98%",
              lg: "98%",
              md: "95%",
              sm: "95%",
              xs: "95%",
            },
            mx: "auto",
            py: {
              xl: "2rem",
              lg: "2rem",
              md: "1rem",
              sm: "0.5rem",
              xs: "0rem",
            },
          }}
        >
          <Slider {...settings}>
            {ImgArr?.map((slide, sid) => (
              // <Box
              //   key={`slide-${sid}`}
              //   sx={{
              //     flex: "none",
              //     boxSize: "100%",
              //     padding: "1.5rem",
              //     flexDirection: "column",
              //     gap: "1rem",
              //     width: "33%",
              //     height: "auto",
              //   }}
              // >
              //   <Box
              //     sx={{
              //       backgroundSize: "cover",
              //       width: "100%",
              //       mx: "auto",
              //       height: "auto",
              //       maxHeight: "400px",
              //     }}
              //     component="img"
              //     alt="hello"
              //     src={slide}
              //   />
              //   <Typography sx={SwiperText}>Studio 25 Tiktok</Typography>
              // </Box>
              <Box
                key={`slide-${sid}`}
                sx={{
                  flex: "none",
                  boxSize: "100%",
                  padding: "1.5rem",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "33%",
                  // background: "red",
                }}
              >
                <Box
                  sx={{
                    backgroundSize: "cover",
                    width: "100%",
                    maxHeight: "400px",
                    mx: "auto",
                    height: "auto",
                    minHeight: "345px",
                  }}
                  component="img"
                  alt="hello"
                  src={slide.src}
                />
                <Typography sx={SwiperText}>
                  {/* Studio 25 Tiktok */}
                  {slide.text}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StoriesAtUnadaSection;
const HeadText = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "50px",
    lg: "50px",
    md: "45px",
    sm: "40px",
    xs: "30px",
  },
  lineHeight: "50px",
  letterSpacing: 1,
  marginLeft: "4rem",
  color: "#FFFFFF",
};
const MetaText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "24px",
    lg: "24px",
    md: "16px",
    sm: "14px",
    xs: "10px",
  },
  lineHeight: {
    xl: "36px",
    lg: "36px",
    md: "26px",
    sm: "20px",
    xs: "13px",
  },
  color: "#484848",
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
  letter-spacing: -0.1rem;
  // background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  font-size: 50px;
  font-weight: 500;
  margin-top: 0rem;
  margin-left: 1rem;
  // overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    font-size: 50px;
    lineheight: 36px;
  }
  @media (max-width: 992px) {
    font-size: 50px;
    lineheight: 36px;
  }
  @media (max-width: 768px) {
    font-size: 45px;
    lineheight: 26px;
  }
  @media (max-width: 576px) {
    font-size: 40px;
    lineheight: 20px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
    lineheight: 13px;
    margin-top: 1rem;
  }
`;
const colorText = {
  ...HeadText,
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  marginLeft: "0rem",
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
  textAlign: "center",
  marginTop: "2rem",
  marginBottom: "4rem",
};
const textStyle1 = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "64px",
    lg: "64px",
    md: "50px",
    sm: "42px",
    xs: "35px",
  },
  lineHeight: {
    xl: "76px",
    lg: "76px",
    md: "58px",
    sm: "50px",
    xs: "40px",
  },
  letterSpacing: 1,
};
