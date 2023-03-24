import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ArVrHero from "../pages/ArVrPage/ArVrHero";
import ArVrIntro from "../pages/ArVrPage/ArVrIntro";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import ArVrMarquee from "../pages/ArVrPage/ArVrMarquee";
import { motion } from "framer-motion";
import "../pages/Services/selectionwhite.module.css";
import { SendEvent } from "../utils/SendEvent";

const ArVr = () => {
  useEffect(() => {
    SendEvent("Arvr Page");
  }, []);
  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack
        sx={{
          background: "black",
        }}
      >
        <ArVrHero />
        <ArVrIntro />
        <ArVrMarquee />
        <MetaVersePreviousProjects />
      </Stack>
    </motion.div>
  );
};
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};

export default ArVr;
