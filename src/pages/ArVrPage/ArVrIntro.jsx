import React from "react";
// import ArVrIntroImg from "../../assets/Images/ArVr/ArVrIntroImg.svg";
import ArVrIntroImg from "../../assets/Images/ArVr/arvrpng.png";
import BlackTIntroComp from "../../Components/BlackTIntroComp";
const ArVrIntro = () => {
  return (
    <BlackTIntroComp
      introImg={ArVrIntroImg}
      Text1={"Create complex "}
      ColorText={"workflows instantly"}
      MetaText={
        "Our team of experienced professionals has expertise in developing AR and VR applications for a variety of sectors, including entertainment, retail, education, and healthcare. We offer custom solutions that are tailored to the specific needs of our clients, helping them to enhance their products and services through the use of AR and VR technology."
      }
    />
  );
};

export default ArVrIntro;
