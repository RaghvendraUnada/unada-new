import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroIntro from "./HeroIntro.module.scss";
import Fade from "react-reveal/Fade";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroIntro = () => {
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
      backgroundColor: "green",
      mixBlendMode: "normal",
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log("isInView", isInView);

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
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0px",
        bgcolor: "#000000",
        height: "100vh",
        minHeight: { xl: "100%", lg: "100%", md: "100%", xs: "100%" },
        maxHeight: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          maxWidth: "1100px",
          bgcolor: "transparent",
          textAlign: {
            xl: "initial",
            lg: "initial",
            md: "initial",
            sm: "center",
            xs: "center",
          },
        }}
      >
        {/* {isInView ? (
          <motion.div
            className={heroIntro.cursorchange}
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
        ) : null} */}
        {/* <Fade top duration={1500}> */}
        <Typography sx={TextStyle} ref={ref}>
          We build and use <br />
          <span style={{ color: "#70ADFF" }}>
            technologies to disrupt industries
          </span>
          &nbsp;and drive progress. Our mission is <br />
          to reshape the future.
        </Typography>
        {/* </Fade> */}
        {/* </motion.p> */}
      </Box>
    </Paper>
  );
};

export default HeroIntro;

const TextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: {
    xl: "81.7385px",
    lg: "75px",
    md: "45px",
    sm: "45px",
    xs: "25.2753px",
  },
  lineHeight: { xl: "97px", lg: "75px", md: "45px", sm: "45px", xs: "35px" },
  /* or 118% */
  letterSpacing: "2.97231px",
  color: "#D9D9D9",
};
