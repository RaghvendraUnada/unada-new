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
          // background: "red",
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
};
const prevProjectColorText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "14px",
    xs: "14px",
  },
  lineHeight: "160%",
  textAlign: "center",
  color: "rgba(255, 255, 255, 0.3)",
  background:
    "linear-gradient(to right, #D325E6 0%, 32.67543911933899%, #6E24B9 65.35087823867798%, 82.67543911933899%, #240D5D 100%)",
  // background:
  //   "linear-gradient(to left, rgba(201, 75, 234, 1) 0%, 11.84210553765297%, rgba(112, 62, 195, 1) 23.68421107530594%, 34.21052619814873%, rgba(59, 33, 140, 1) 44.736841320991516%, 55.04385977983475%, rgba(26, 16, 66, 1) 65.35087823867798%, 72.14912474155426%, rgba(54, 9, 52, 1) 78.94737124443054%, 89.47368562221527%, rgba(170, 2, 87, 1) 100%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
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
};
