import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import MetaVerseIntroImg from "../../assets/Images/MetaVerse/MetaVerseIntroImg.svg";
import BlackTIntroComp from "../../Components/BlackTIntroComp";
const MetaVerseIntro = () => {
  return (
    <>
      <BlackTIntroComp
        introImg={MetaVerseIntroImg}
        Text1={"Escape the limits of reality,"}
        ColorText={"with a world beyond boundaries."}
        MetaText={
          "At Unada, we are dedicated to building the ultimate metaverse experience. Our team is composed of experts in virtual reality, augmented reality, and game development, who are committed to creating immersive and interactive environments for our users.We have been at the forefront of the metaverse movement, constantly pushing the boundaries of what is possible in this exciting new world. Our focus is on creating a seamless blend of the physical and virtual worlds, allowing our users to fully experience the potential of the metaverse."
        }
      />
    </>
  );
};

export default MetaVerseIntro;
