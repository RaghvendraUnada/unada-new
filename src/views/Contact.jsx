import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ContactHeroSection from "../pages/ContactPages/ContactHeroSection";
import Jobs from "../pages/ContactPages/Jobs";
import Map from "../pages/ContactPages/Map";
import { motion } from "framer-motion";
import ContactUsSection from "../pages/ContactPages/ContactUsSection";
import { SendEvent } from "../utils/SendEvent";
import Footer from "../components/Footer";
const Contact = () => {
  useEffect(() => {
    SendEvent("Careers Page");
  }, []);
  return (
    <React.Fragment>
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
          <Footer />
        </Stack>
      </motion.div>
    </React.Fragment>
  );
};
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};

export default Contact;
