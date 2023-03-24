import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import MetaVerseHero from "../pages/MetaVerse/MetaVerseHero";
import MetaVerseIntro from "../pages/MetaVerse/MetaVerseIntro";
import MetaverseMarquee from "../pages/MetaVerse/MetaverseMarquee";
import Slider3dNew from "../Components/Slider3dNew";
import { motion } from "framer-motion";
import selection from "../pages/MetaVerse/metaverse.module.css";
import { SendEvent } from "../utils/SendEvent";

const MetaVerse = () => {
  useEffect(() => {
    SendEvent("Metaverse Page");
  }, []);
  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack
        sx={{
          background: "black",
        }}
        className={selection.invert2}
      >
        <MetaVerseHero />
        <MetaVerseIntro />
        <MetaverseMarquee />
        <MetaVersePreviousProjects />
      </Stack>
    </motion.div>
  );
};

export default MetaVerse;
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.1 },
};
