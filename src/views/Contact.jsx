import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ContactHeroSection from "../pages/ContactPages/ContactHeroSection";
import Jobs from "../pages/ContactPages/Jobs";
import Map from "../pages/ContactPages/Map";
import { motion } from "framer-motion";
import ContactUsSection from "../pages/ContactPages/ContactUsSection";
import { SendEvent } from "../utils/SendEvent";
const Contact = () => {
  useEffect(() => {
    SendEvent("Careers Page");
  }, []);
  return (
    <>
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Stack
          sx={{
            background: "black",
          }}
        >
          <ContactHeroSection />
          <ContactUsSection />
          <Jobs />
          <Map />
        </Stack>
      </motion.div>
    </>
  );
};
const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default Contact;
