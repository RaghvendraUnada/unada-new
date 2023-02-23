import React from "react";

import ArVrHeroImg5 from "../../assets/Images/ArVr/ArVrHeroImg5.svg";
import BlackTHeroComp from "../../Components/BlackTHeroComp";

const ArVrHero = () => {
  return (
    <BlackTHeroComp
      text1={"LET YOUR"}
      ColorText={"AR/VR"}
      text2={"DO THE WORK"}
      metaText1={"YOUR NIFTIES HAVE THE"}
      metaColorText={"POWER TO PAY YOU"}
      HeroImg={ArVrHeroImg5}
    />
  );
};

export default ArVrHero;
