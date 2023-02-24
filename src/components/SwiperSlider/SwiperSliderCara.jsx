import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IntoImg1 from "../../assets/Images/Career/IntroImg1.svg";
import IntoImg2 from "../../assets/Images/Career/IntroImg2.svg";
import IntoImg3 from "../../assets/Images/Career/IntroImg3.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import "./SwiperCss.css";
// import required modules
import { Scrollbar } from "swiper";
import { Box, TextField, Typography } from "@mui/material";

export default function SwiperSliderCara(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = props?.data.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 2 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 2 ? 0 : s + 1));
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              height: {
                xs: "400px",
                lg: "700px",
              },
              width: "100%",
              transition: "all .5s",
              marginLeft: `-${currentSlide * 50}%`,
            }}
          >
            {props.data.map((slide, sid) => (
              <Box
                key={`slide-${sid}`}
                sx={{
                  flex: "none",
                  boxSize: "100%",
                  padding: "1.5rem",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "33%",
                  // marginRight: "3rem",
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
                  // sx={imge}
                  src={slide}
                />
                <Typography sx={SwiperText}>Studio 25 Tiktok</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
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
