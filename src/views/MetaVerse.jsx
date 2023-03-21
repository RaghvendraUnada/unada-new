import React, { useEffect } from "react";
// import ClientMarquee from "../Components/Maarquee/ClientMarquee";
import { Stack } from "@mui/material";
// import ClientMarqueeLeftToRight from "../Components/Maarquee/ClientMarqueeLeftToRight";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import MetaVerseHero from "../pages/MetaVerse/MetaVerseHero";
import MetaVerseIntro from "../pages/MetaVerse/MetaVerseIntro";
import MetaverseMarquee from "../pages/MetaVerse/MetaverseMarquee";
import Slider3dNew from "../Components/Slider3dNew";
import { motion } from "framer-motion";
// import "../pages/Services/selectionwhite.module.css";
// import selection from "../pages/Home/home.module.css";
import selection from "../pages/MetaVerse/metaverse.module.css";
import { SendEvent } from "../utils/SendEvent";

const MetaVerse = () => {
  useEffect(() => {
    SendEvent("Metaverse Page");
  }, []);
  return (
    // <motion.div
    //   initial={{ width: "100%", opacity: 0 }}
    //   animate={{
    //     width: "100%",
    //     opacity: 1,
    //     transition: { duration: 1, ease: "easeInOut" },
    //   }}
    //   exit={{
    //     x: window.innerWidth,
    //     opacity: 0,
    //     transition: { duration: 1, ease: "easeInOut" },
    //   }}
    //   transition={{
    //     ease: "easeInOut",
    //     duration: "1s",
    //   }}
    //   // initial={{ opacity: 1 }}
    //   // animate={{ opacity: 2 }}
    //   // exit={{ opicity: 1 }}
    // >
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack
        sx={{
          background: "black",
        }}
        className={selection.invert2}
      >
        <MetaVerseHero />
        <MetaVerseIntro />
        {/* <ClientMarquee />
      <ClientMarqueeLeftToRight /> */}
        <MetaverseMarquee />
        <MetaVersePreviousProjects />
        {/* <Slider3dNew /> */}
      </Stack>
    </motion.div>
  );
};

export default MetaVerse;
const AnimationSettings = {
  transition: { duration: 0.6 },
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },
  exit: { opacity: 0.2 },
};
