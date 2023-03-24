import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import MetaVersePreviousProjects from "../pages/MetaVerse/MetaVersePreviousProjects";
import BlockchainHero from "../pages/BlockchainPage/BlockchainHero";
import BlockchainIntro from "../pages/BlockchainPage/BlockchainIntro";
import BlockchainMarquee from "../pages/BlockchainPage/BlockchainMarquee";
import { motion } from "framer-motion";
import "../pages/MetaVerse/metaverse.module.css";
import { SendEvent } from "../utils/SendEvent";

const Blockchain = () => {
  useEffect(() => {
    SendEvent("BlockChain Page");
  });
  return (
    <>
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Stack
          sx={{
            background: "black",
          }}
        >
          <BlockchainHero />
          <BlockchainIntro />
          <BlockchainMarquee />
          <MetaVersePreviousProjects />
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

export default Blockchain;
