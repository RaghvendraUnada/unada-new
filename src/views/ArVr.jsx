import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ArVrHero from "../pages/ArVrPage/ArVrHero";
import ArVrIntro from "../pages/ArVrPage/ArVrIntro";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import MetaverseMarquee from "../pages/MetaVerse/MetaverseMarquee";
import { motion } from "framer-motion";
import "../pages/Services/selectionwhite.module.css";
import { SendEvent } from "../utils/SendEvent";

const ArVr = () => {
  useEffect(() => {
    SendEvent("Arvr Page");
  }, []);
  return (
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
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 2 }}
      // exit={{ opicity: 1 }}
    >
      <Stack
        sx={{
          // maxWidth: "2000px",
          // marginLeft: "auto",
          // marginRight: "auto",
          background: "black",
        }}
      >
        <ArVrHero />
        <ArVrIntro />
        <MetaverseMarquee />
        <MetaVersePreviousProjects />
        {/* <Footer /> */}
      </Stack>
    </motion.div>
  );
};

export default ArVr;
