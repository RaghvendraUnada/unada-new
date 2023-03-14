import React from "react";
import { Stack } from "@mui/material";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import BlockchainHero from "../pages/BlockchainPage/BlockchainHero";
import BlockchainIntro from "../pages/BlockchainPage/BlockchainIntro";
import MetaverseMarquee from "../pages/MetaVerse/MetaverseMarquee";
import { motion } from "framer-motion";
import "../pages/MetaVerse/metaverse.module.css";

const Blockchain = () => {
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
          <BlockchainHero />
          <BlockchainIntro />
          <MetaverseMarquee />
          <MetaVersePreviousProjects />
        </Stack>
      </motion.div>
    </>
  );
};

export default Blockchain;
