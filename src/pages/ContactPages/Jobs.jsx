import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import styles from "./Contact.module.css";
import { useState } from "react";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
const Jobs = () => {
  const [icon1, setIcon1] = useState("White");
  const navigate = useNavigate();
  function handleClicks() {
    navigate("/careers#section");
  }
  return (
    <Paper
      onClick={handleClicks}
      elevation={0}
      onMouseOut={() => setIcon1("white")}
      onMouseOver={() => setIcon1("black")}
      className={styles.BigArrow}
      sx={{
        bgcolor: "#000",
        height: "40vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 5,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          padding: {
            xl: "2.5rem",
            lg: "2.5rem",
            md: "2.0rem",
            sm: "0.5rem",
            xs: "0.5rem",
          },
        }}
      >
        <Fade top duration={1000}>
          <Typography sx={text}>Unada Jobs</Typography>
        </Fade>
        <Typography sx={text1}>View our open position.</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: {
            xl: "2.5rem",
            lg: "2.5rem",
            md: "2.0rem",
            sm: "1.8rem",
            xs: "1.6rem",
          },
          marginTop: {
            xl: "2.2rem",
            lg: "2.1rem",
            md: "1.6rem",
            sm: "0.5rem",
            xs: "-0.5rem",
          },
        }}
      >
        <Box
          className={styles.BigArrowImg}
          onMouseOut={() => setIcon1("white")}
          onMouseOver={() => setIcon1("black")}
          sx={{
            "&:hover": {
              color: "black",
            },
          }}
        >
          <EastSharpIcon fontSize="large" sx={{ color: icon1 }} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Jobs;

const text = {
  fontSize: {
    xl: "3.6rem",
    lg: "3.6rem",
    md: "3.1rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  lineHeight: {
    xl: "3rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  fontWeight: 400,
  fontFamily: "LGRegular",
  color: "#fff",
};

const text1 = {
  fontSize: {
    xl: "2.2rem",
    lg: "2.1rem",
    md: "1.6rem",
    sm: "1.2rem",
    xs: "1.1rem",
  },
  lineHeight: {
    xl: "3rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  marginTop: "1.5rem",
  fontWeight: 400,
  fontFamily: "LGThin",
  color: "#fff",
};
