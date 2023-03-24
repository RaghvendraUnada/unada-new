import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import SwiperSliderCara from "../../Components/SwiperSlider/SwiperSliderCara";
import IntroImg1 from "../../assets/Images/Career/IntroImg1.svg";
import Slider from "react-slick";
import "./CareerIntroSection.css";
import selection from "../../pages/Home/home.module.css";

import Unada1 from "../../assets/Images/unadalife/ul1.webp";
import Unada2 from "../../assets/Images/unadalife/ul2.webp";
import Unada3 from "../../assets/Images/unadalife/ul3.webp";
import Unada4 from "../../assets/Images/unadalife/ul4.webp";
import Unada5 from "../../assets/Images/unadalife/ul5.webp";
import Unada6 from "../../assets/Images/unadalife/ul6.webp";
import Unada7 from "../../assets/Images/unadalife/ul7.webp";
import Unada8 from "../../assets/Images/unadalife/ul8.webp";
const ImgArr = [
  { src: Unada1 },
  { src: Unada2 },
  { src: Unada3 },
  { src: Unada4 },
  { src: Unada5 },
  { src: Unada6 },
  { src: Unada7 },
  { src: Unada8 },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-prev slick-arrow"}
      style={{
        ...style,
        display: "block",
        width: 20,
        height: 20,
        margin: "auto",
        border: "none",
        borderRadius: "none",
      }}
      onClick={onClick}
    />
  );
}

function CareerIntroSection() {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = ImgArr.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 2 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 2 ? 0 : s + 1));
  };

  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "normal",
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

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
          padding: {
            xl: "6rem",
            lg: "6rem",
            md: "6rem",
            sm: "5rem",
            xs: "4rem",
          },
        }}
      >
        {isInView ? (
          <motion.div
            variants={variants}
            animate={cursorVariant}
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: "50%",
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 10000,
              mixBlendMode: "difference",
            }}
          />
        ) : null}
        <Typography sx={IntroMainText} className={selection.invert2}>
          We believe in building the future, one line of code at a time. We are
          looking for people who are voraciously curious and who are willing to
          confront challenges. At Unada, no two days are the same. We have gone
          beyond and replaced conventions and rules set by companies to foster
          growth, development, collaboration and innovation at our workplace.
        </Typography>
        <Typography
          sx={{ ...IntroMainText, marginTop: "0rem" }}
          className={selection.invert2}
        >
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
          width: "98%",
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
          }}
        >
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
                    maxHeight: "400px",
                    mx: "auto",
                    height: "auto",
                    minHeight: "340px",
                  }}
                  component="img"
                  alt="hello"
                  src={slide.src}
                />
                <Typography sx={SwiperText}>{slide.text}</Typography>
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
    xs: "1.5rem",
  },
  color: "#484848",
  marginTop: {
    xl: "12rem",
    lg: "12rem",
    md: "10rem",
    sm: "6rem",
    xs: "6rem",
  },
};

const SwiperText = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "16.5839px",
    lg: "16.5839px",
    md: "16.5839px",
    sm: "12px",
    xs: "12px",
  },
  textAlign: "center",
  lineHeight: " 11px",
  color: "#FAFAFA",
  marginRight: "auto",
  marginTop: "2rem",
  marginBottom: "4rem",
};
