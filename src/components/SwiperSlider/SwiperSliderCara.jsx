import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";

import "swiper/css";
import "swiper/css/scrollbar";
import "./SwiperCss.css";
import { Box, Typography } from "@mui/material";
import selection from "../../pages/Home/home.module.css";

export default function SwiperSliderCara(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = props?.data.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 2 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 2 ? 0 : s + 1));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      <Box
        paddingLeft="0"
        paddingRight="0"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ position: "absolute", width: "100%" }}>
          <Box
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: {
                sm: "-4%",
                lg: "50%",
              },
              bottom: {
                xs: "6rem",
                sm: "6rem",
              },
              width: "auto",
              marginTop: "-22px",
              padding: "16px",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              transition: "0.6s ease",
              borderRadius: "0 3px 3px 0",
              userSelect: "none",
              zIndex: 10,
              left: 0,
              "&:hover": {
                opacity: 0.8,
                background: "black",
              },
            }}
            onClick={prevSlide}
          >
            &#10094;
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: {
                sm: "-4%",
                lg: "50%",
              },
              bottom: {
                xs: "6rem",
                sm: "6rem",
              },
              width: "auto",
              zIndex: 10,
              marginTop: "-22px",
              padding: "16px",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              transition: "0.6s ease",
              borderRadius: "0 3px 3px 0",
              userSelect: "none",
              right: 0,
              "&:hover": {
                opacity: 0.8,
                background: "black",
              },
            }}
            onClick={nextSlide}
          >
            &#10095;
          </Box>
        </Box>
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
              <Typography sx={SwiperText} className={selection.invert2}>
                Studio 25 Tiktok
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </React.Fragment>
  );
}
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
  lineHeight: " 11px",
  color: "#FAFAFA",
  marginRight: "auto",
  marginTop: "2rem",
  marginBottom: "4rem",
};
