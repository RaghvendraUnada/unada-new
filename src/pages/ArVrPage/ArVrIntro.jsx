import React from "react";
import ArVrIntroImg from "../../assets/Images/ArVr/arvrpng.png";
import BlackTIntroComp from "../../Components/BlackTIntroComp";

const ArVrIntro = () => {
  return (
    <BlackTIntroComp
      introImg={ArVrIntroImg}
      Text1={"Escape the limits of reality,"}
      ColorText={"with a world beyond boundaries."}
      MetaText={
        "Our company is dedicated to pushing the boundaries of what's possible with AR/VR technology. With a team of passionate developers, designers, and creators, we're crafting immersive experiences that transport users to new worlds and unlock new possibilities. Whether you're exploring an ancient civilization, training for a high-stakes job, or simply enjoying a virtual adventure, our AR/VR solutions are designed to deliver truly unforgettable experiences. We're committed to creating a future where AR/VR is woven seamlessly into our daily lives, enriching the way we learn, work, play, and connect with each other. Join us on a journey of innovation and discovery, and let's build a better future together with AR/VR."
      }
    />
  );
};

export default ArVrIntro;
