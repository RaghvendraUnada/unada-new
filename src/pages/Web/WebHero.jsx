import React from "react";
import { Grid, Box, Paper, Stack } from "@mui/material";
import HeroPage from "../../components/HeroPage";
import Intro from "../../components/Intro";
import webHero1 from "../../assets/Images/Application/webnewShadow.webp";
import introWeb from "../../assets/Images/Web/introWeb.webp";
const data = [
  "Fashion & Cosmetics",
  "Media & OTT",
  "Real Estate",
  "E-Commerce",
];
const data1 = ["Manufacturing", "Warehousing", "Online Publishing", "Fintech"];
const WebHero = () => {
  return (
    <Paper elevation={0} sx={{}}>
      <Grid container>
        <HeroPage
          mainText1={"Building the future of Web, one site at a time."}
          subText1={
            "We focus on developing custom web solutions that help businesses stand out in a crowded market with a focus on user experience."
          }
          imgUrl={webHero1}
          imgHeight={"500px"}
          imgWidth={"550px"}
        />
      </Grid>
      <Grid container>
        <Intro
          imgUrl={introWeb}
          mainTextIntro={
            "Custom web development that tells your story and drives results."
          }
          subTextIntro={
            "As a leading web development company, our focus lies on providing the best web development solutions as per our clients requirements and vision. We work with a myriad of web based technologies and are language agnostic when it comes to delivering the desired results to our clients. From E-Commerce websites to building web technologies for specific business use cases, we do it all."
          }
        />
      </Grid>
    </Paper>
  );
};

export default WebHero;
