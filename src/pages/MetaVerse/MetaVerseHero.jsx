import React from "react";
import BlackTHeroComp from "../../Components/BlackTHeroComp";
import MetaVerseHeroImg from "../../assets/Images/MetaVerse/MetaverseHeroImg.webp";
import "./metaverse.module.css";
const MetaVerseHero = () => {
  return (
    <React.Fragment>
      <BlackTHeroComp
        text1={"BUILDING"}
        ColorText={"IMMERSIVE"}
        text2={"EXPERIENCES and Spaces"}
        metaText1={"BRIDGING THE GAP"}
        metaColorText={"BETWEEN VIRTUAL AND REAL"}
        HeroImg={MetaVerseHeroImg}
      />
    </React.Fragment>
  );
};

export default MetaVerseHero;
