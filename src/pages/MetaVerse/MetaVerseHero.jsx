import React from "react";
import BlackTHeroComp from "../../Components/BlackTHeroComp";
import MetaVerseHeroImg from "../../assets/Images/MetaVerse/MetaverseHeroImg.svg";
import "./metaverse.module.css";
const MetaVerseHero = () => {
  return (
    <>
      <BlackTHeroComp
        text1={"BUILDING"}
        ColorText={"IMMERSIVE"}
        text2={"EXPERIENCES and Spaces"}
        metaText1={"BRIDGING THE GAP"}
        metaColorText={"BETWEEN VIRTUAL AND REAL"}
        HeroImg={MetaVerseHeroImg}
      />
    </>
  );
};

export default MetaVerseHero;
