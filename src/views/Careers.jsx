import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import UnadalifeSection from "../pages/CareerPages/UnadalifeSection";
import PositionsDev from "../pages/CareerPages/PositionsDev";
import CareerIntroSection from "../pages/CareerPages/CareerIntroSection";
import CareerHeroSection from "../pages/CareerPages/CareerHeroSectionNew";
import RevolutionSetion from "../pages/CareerPages/RevolutionSetion";
import InternshipSection from "../pages/CareerPages/InternshipSection";
import ChatSection from "../pages/CareerPages/ChatSection";
import OurCultureSection from "../pages/CareerPages/OurCultureSection";
import StoriesAtUnadaSection from "../pages/CareerPages/StoriesAtUnadaSection";
import { motion } from "framer-motion";
import { SendEvent } from "../utils/SendEvent";
const Careers = () => {
  useEffect(() => {
    SendEvent("Careers Page");
  }, []);
  return (
    <>
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Stack
          sx={{
            background: "#000",
          }}
        >
          <CareerHeroSection />
          <UnadalifeSection />
          <CareerIntroSection />
          <OurCultureSection />
          <RevolutionSetion />
          <PositionsDev />
          <InternshipSection />
          <StoriesAtUnadaSection />
          <ChatSection />
        </Stack>
      </motion.div>
    </>
  );
};
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.1 },
};

export default Careers;
