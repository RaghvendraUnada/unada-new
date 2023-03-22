import React, { useEffect } from "react";
import { Stack } from "@mui/material";

import ContactHeroSection from "../pages/ContactPages/ContactHeroSection";
import ChatUs from "../pages/ContactPages/ChatUs";
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
      {/* <motion.div
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
        // initial={{ opacity: 1 }}
        // animate={{ opacity: 2 }}
        // exit={{ opicity: 1 }}
      > */}
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Stack
          sx={{
            // maxWidth: "2000px",
            // marginLeft: "auto",
            // marginRight: "auto",
            background: "black",
          }}
        >
          <ContactHeroSection />
          <ContactUsSection />
          {/* <ChatUs showArrow={true} /> */}
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
