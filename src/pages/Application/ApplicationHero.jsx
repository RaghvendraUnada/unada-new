import React from "react";
import ChatAppImg from "../../assets/Images/Application/appSun.webp";
import HeroPage from "../../components/HeroPage";

const ApplicationHero = () => {
  return (
    <React.Fragment>
      <HeroPage
        imgUrl={ChatAppImg}
        mainText1={"Innovative App Solutions for a connected world."}
        subText1={
          "Our team of experienced, tech-savvy professionals create user-friendly, modern mobile apps for businesses seeking to stay competitive in today's digital age."
        }
        imgHeight={"650px"}
        imgWidth={"500px"}
        imgHeightMobile={"375px"}
        imgWidthMobile={"520px"}
      />
    </React.Fragment>
  );
};

export default ApplicationHero;
