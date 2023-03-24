import React from "react";
import Card from "../../Components/Caraousol/Card";
import { Grid, Paper, Typography } from "@mui/material";
import Carousel from "../../Components/Caraousol/Carousel";
import cara1 from "../../assets/Images/MetaVerse/CaraImg1.svg";
import cara2 from "../../assets/Images/MetaVerse/CaraImg2.svg";
import cara3 from "../../assets/Images/MetaVerse/CaraImg3.svg";
import cara4 from "../../assets/Images/MetaVerse/CaraImg4.svg";
import cara5 from "../../assets/Images/MetaVerse/CaraImg5.svg";
import { Box } from "@mui/system";
import Slider3dNew from "../../Components/Slider3dNew";
import SpringSlider from "../../Components/SpringSlider/SpringSlider";
import PreProjectCara from "../../components/PreProjectCara";
import Fade from "react-reveal/Fade";
const MetaVersePreviousProjects = () => {
  let cards = [
    {
      key: 1,
      content: <Card imagen={cara1} />,
    },
    {
      key: 2,
      content: <Card imagen={cara2} />,
    },
    {
      key: 3,
      content: <Card imagen={cara3} />,
    },
    {
      key: 4,
      content: <Card imagen={cara4} />,
    },
    {
      key: 5,
      content: <Card imagen={cara5} />,
    },
    {
      key: 6,
      content: <Card imagen={cara1} />,
    },
    {
      key: 7,
      content: <Card imagen={cara2} />,
    },
    {
      key: 8,
      content: <Card imagen={cara3} />,
    },
    {
      key: 9,
      content: <Card imagen={cara4} />,
    },
    {
      key: 10,
      content: <Card imagen={cara5} />,
    },
  ];
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        minHeight: {
          xl: "92vh",
          lg: "92vh",
          md: "70vh",
          sm: "60vh",
          xs: "50vh",
        },
        width: "100%",
        maxWidth: "100vw",
        overflowx: "hidden",
        bgcolor: "#000",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "12rem",
          height: "100%",
          minHeight: "auto",
          my: "50px",
        }}
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Fade top duration={1000}>
              <Typography sx={prevProjectText}>Previous &nbsp; </Typography>{" "}
              <Typography
                sx={{
                  ...prevProjectText,
                  background:
                    "linear-gradient(to left, #D325E6 0%, 32.67543911933899%, #6E24B9 65.35087823867798%, 82.67543911933899%, #240D5D 100%)",
                  backgroundSize: " 100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  fontWeight: 600,
                  textFillColor: "transparent",
                }}
              >
                Projects
              </Typography>
            </Fade>
          </Box>
          <Typography sx={prevProjectMetaText}>
            Purpose for Profit rewards contributors with short-term liquidity
            and bonuses
          </Typography>
          <PreProjectCara />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MetaVersePreviousProjects;
const prevProjectText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: {
    xl: "50px",
    lg: "50px",
    md: "40px",
    sm: "35px",
    xs: "30px",
  },
  lineHeight: "61px",
  textAlign: "center",
  color: "#FFFFFF",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};

const prevProjectMetaText = {
  fontFamily: "Inter",
  width: {
    xl: "35%",
    lg: "35%",
    md: "80%",
    sm: "80%",
    xs: "95%",
  },
  marginLeft: "auto",
  marginRight: "auto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "14px",
    xs: "8px",
  },
  lineHeight: "160%",
  textAlign: "center",
  color: " #F5F5F5",
  mt: 1,
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
