import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
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
        {/* <motion.p
          viewport={{ once: false }}
          exit={{ y: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          initial="top"
          whileInView="visible"
          variants={{
            top: { y: -100 },
            exit: { y: 0 },

            visible: { y: 0, opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Typography sx={TextStyle}>
          We build and use <br />
          <span style={{ color: "#70ADFF" }}>
            technologies to disrupt industries
          </span>
          &nbsp;and drive progress. Our mission is <br />
          to reshape the future.
        </Typography>
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
