import React from "react";
import { Stack } from "@mui/material";

// import CareerHeroSection from "../pages/CareerPages/CareerHeroSection";
import UnadalifeSection from "../pages/CareerPages/UnadalifeSection";
import PositionsDev from "../pages/CareerPages/PositionsDev";
import CareerIntroSection from "../pages/CareerPages/CareerIntroSection";
import CareerHeroSection from "../pages/CareerPages/CareerHeroSectionNew";
import OurTeams from "../pages/CareerPages/OurTeams";
import RevolutionSetion from "../pages/CareerPages/RevolutionSetion";
import InternshipSection from "../pages/CareerPages/InternshipSection";
import ChatSection from "../pages/CareerPages/ChatSection";
import OurCultureSection from "../pages/CareerPages/OurCultureSection";
import StoriesAtUnadaSection from "../pages/CareerPages/StoriesAtUnadaSection";
import { motion } from "framer-motion";
const Careers = () => {
  return (
    <>
      <motion.div
        initial={{ width: "100%", opacity: 0 }}
        animate={{
          width: "100%",
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        exit={{
          x: window.innerWidth,
          opacity: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        transition={{
          ease: "easeInOut",
          duration: "1s",
        }}
      >
        <Stack
          sx={{
            // maxWidth: "2000px",
            // marginLeft: "auto",
            // marginRight: "auto",
            background: "#000",
          }}
        >
          <CareerHeroSection />
          <UnadalifeSection />
          <CareerIntroSection />
          <OurCultureSection />
          {/* <PositionsDev /> */}
          {/* <OurTeams /> */}
          <RevolutionSetion />
          <PositionsDev />
          <InternshipSection />
          <StoriesAtUnadaSection />
          <ChatSection />
          {/* <Footer /> */}
        </Stack>
      </motion.div>
    </>
  );
};

export default Careers;
