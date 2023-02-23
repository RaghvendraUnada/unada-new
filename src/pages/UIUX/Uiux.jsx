import React from "react";
import HeroPage from "../../components/HeroPage";
import StackList from "../../components/StackList";
import Intro from "../../components/Intro";
import Ux from "../../assets/Images/UIUX/uinewone.png";
import uiintro from "../../assets/Images/UIUX/uiintro.svg";
import { Grid, Typography, Box, Paper, Stack } from "@mui/material";
import swift from "../../assets/Images/Application/swift.svg";
import TechStack from "../Application/TechStack";
const data = ["Social Media Agencies", "Healthcare", "Fashion"];
const data1 = [
  "Branding",
  "Gaming",
  "Fintech",
  "E-Commerce",
  // "Online Publishing",
  // "Warehousing",
];
const Uiux = () => {
  return (
    <Paper elevation={0}>
      <Grid container>
        <HeroPage
          mainText1={"Designing for humans, creating for impact."}
          subText1={
            "We believe that great design goes beyond aesthetics. We strive to create seamless and intuitive digital experiences that enhance the lives of users and help businesses."
          }
          imgUrl={Ux}
          imgHeight={"500px"}
          imgWidth={"500px"}
        />
      </Grid>
      <Grid container>
        <Intro
          imgUrl={uiintro}
          mainTextIntro={"Transforming ideas into intuitive interfaces."}
          subTextIntro={
            "By applying consumer psychology and behavioral science into our design process along with minimalistic brand driven UI elements, we strive on crafting seamless, and enjoyable products that people, companies and brands would love to use. Unada is at the forefront of creating change and making a mark through design."
          }
        />
      </Grid>
      {/* <Grid container> */}
      {/* <TechStack textone={data1} text={data} text1={"Design"} /> */}
      {/* </Grid> */}
    </Paper>
  );
};

export default Uiux;
