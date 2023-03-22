import React from "react";
import BlockchainIntroImg from "../../assets/Images/Blockchain/BlockchainIntoImg.svg";
import BlackTIntroComp from "../../Components/BlackTIntroComp";
const BlockchainIntro = () => {
  return (
    <BlackTIntroComp
      introImg={BlockchainIntroImg}
      Text1={"Bridge the gap between"}
      ColorText={"web 2.0 & 3.0"}
      MetaText={
        "We specialize in providing blockchain-based solutions to a wide range of industries. We offer custom solutions that are tailored to the specific needs of our clients, helping them to enhance their products and services through the use of blockchain technology. Our team can provide guidance on the most suitable blockchain solutions for a particular industry or use case, as well as support with the implementation and deployment of these solutions."
      }
    />
  );
};

export default BlockchainIntro;
