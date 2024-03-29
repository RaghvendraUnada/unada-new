import React, { useEffect } from "react";
import { Stack, Box } from "@mui/material";
import Uiux from "../pages/UIUX/Uiux";
import PreProjectUi from "../components/PreProjectUi";
import adobe from "../assets/Images/UIUX/adobe.svg";
import ai from "../assets/Images/UIUX/ai.svg";
import figmanew from "../assets/Images/UIUX/figmanew.svg";
import pronew from "../assets/Images/UIUX/pronew.svg";
import ps from "../assets/Images/UIUX/ps.svg";
import TechStack from "../pages/Application/TechStack";
import "../pages/Services/whiteservice.module.css";

const data1 = ["Branding", "Gaming", "Fintech", "E-Commerce"];
const data = ["Social Media Agencies", "Healthcare", "Fashion"];
const Tech = [adobe, ai, figmanew, pronew, ps];
import { motion } from "framer-motion";
import { SendEvent } from "../utils/SendEvent";

const Ui = () => {
  useEffect(() => {
    SendEvent("UI Page");
  }, []);
  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack>
        <Uiux />
        <TechStack
          text1={"Technology"}
          textone={data1}
          text={data}
          Tech={Tech}
        />
        <PreProjectUi />
      </Stack>
    </motion.div>
  );
};

export default Ui;

const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};
