import React from "react";
import BlockchainIntroImg from "../../assets/Images/Blockchain/BlockchainIntoImg.webp";
import BlackTIntroComp from "../../Components/BlackTIntroComp";
const BlockchainIntro = () => {
  return (
    <BlackTIntroComp
      introImg={BlockchainIntroImg}
      Text1={"Bridge the gap between"}
      ColorText={"web 2.0 & 3.0"}
      MetaText={
        "Unada is at the forefront of the blockchain revolution, leveraging this groundbreaking technology to build a more secure, transparent, and decentralized future. With a team of experts in blockchain development, cryptography, and distributed systems, we're designing innovative solutions that enable businesses and individuals to exchange value, information, and assets in ways that were once impossible. Whether you're looking to streamline supply chain management, optimize financial transactions, or secure sensitive data, our blockchain technology is the key to unlocking new levels of efficiency, privacy, and trust."
      }
    />
  );
};

export default BlockchainIntro;
