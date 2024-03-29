import React, { useState } from "react";
import HeroPage from "../../components/HeroPage";
import Intro from "../../components/Intro";
import Ux from "../../assets/Images/UIUX/uxpng.svg";
import uiintro from "../../assets/Images/UIUX/uiintro.svg";
import { Grid, Paper } from "@mui/material";

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
          imgHeight={"650px"}
          imgWidth={"650px"}
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
    </Paper>
  );
};

export default Uiux;
