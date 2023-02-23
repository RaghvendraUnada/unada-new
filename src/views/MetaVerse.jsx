import React from "react";
// import ClientMarquee from "../Components/Maarquee/ClientMarquee";
import { Stack } from "@mui/material";
// import ClientMarqueeLeftToRight from "../Components/Maarquee/ClientMarqueeLeftToRight";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import MetaVerseHero from "../pages/MetaVerse/MetaVerseHero";
import MetaVerseIntro from "../pages/MetaVerse/MetaVerseIntro";
import MetaverseMarquee from "../pages/MetaVerse/MetaverseMarquee";
import Slider3dNew from "../Components/Slider3dNew";
import { motion } from "framer-motion";
const MetaVerse = () => {
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
    >
      <Stack
        sx={{
          background: "black",
        }}
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
