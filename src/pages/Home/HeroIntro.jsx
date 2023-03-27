import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import selection from "./home.module.css";

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
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0px",
        bgcolor: "#000000",
        height: { xl: "100vh", lg: "100vh", md: "70vh", xs: "70vh" },
        minHeight: { xl: "100%", lg: "100%", md: "80%", xs: "80%" },
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
        <Typography sx={TextStyle} ref={ref} className={selection.invert2}>
          We build and use <br className={selection.invert2} />
          <span style={{ color: "#70ADFF" }} className={selection.invert2}>
            technologies to disrupt industries
          </span>
          &nbsp;and drive progress. Our mission is{" "}
          <br className={selection.invert2} />
          to reshape the future.
        </Typography>
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
  letterSpacing: "2.97231px",
  color: "#D9D9D9",
};
