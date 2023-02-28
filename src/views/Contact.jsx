import React from "react";
import { Stack } from "@mui/material";

import ContactHeroSection from "../pages/ContactPages/ContactHeroSection";
import ChatUs from "../pages/ContactPages/ChatUs";
import Jobs from "../pages/ContactPages/Jobs";
import Map from "../pages/ContactPages/Map";
import { motion } from "framer-motion";
import ContactUsSection from "../pages/ContactPages/ContactUsSection";
const Contact = () => {
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

export default Contact;
