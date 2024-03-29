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
    <React.Fragment>
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
    </React.Fragment>
  );
};
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};

export default Blockchain;
