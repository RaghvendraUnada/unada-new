import React from "react";

import BlockchainHeroImg from "../../assets/Images/Blockchain/BlockchainHeroImg.svg";
import BlackTHeroComp from "../../Components/BlackTHeroComp";

const BlockchainHero = () => {
  return (
    <BlackTHeroComp
      text1={"SECURE AND"}
      ColorText={"Decentralized"}
      text2={"SOLUTIONS"}
      metaText1={"LEADING THE WAY IN"}
      metaColorText={"BLOCKCHAIN INNOVATION."}
      HeroImg={BlockchainHeroImg}
    />
  );
};

export default BlockchainHero;
