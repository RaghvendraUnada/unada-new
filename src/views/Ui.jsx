import React, { useEffect } from "react";
import { Stack, Box } from "@mui/material";
import Uiux from "../pages/UIUX/Uiux";
import HorizontalScrollingList from "../components/Maarquee/HorizontalScrollingList";
import ICLWhite from "../assets/Images/clients/icl-white.svg";
import ClientMarquee from "../components/Maarquee/ClientMarquee";
import PreProject from "../components/PreProject";
import adobe from "../assets/Images/UIUX/adobe.svg";
import ai from "../assets/Images/UIUX/ai.svg";
import figmanew from "../assets/Images/UIUX/figmanew.svg";
import pronew from "../assets/Images/UIUX/pronew.svg";
import ui from "../assets/Images/UIUX/ui.svg";
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
    // <motion.div
    //   initial={{ width: "100%", opacity: 0 }}
    //   animate={{
    //     width: "100%",
    //     opacity: 1,
    //     transition: { duration: 1, ease: "easeInOut" },
    //   }}
    //   exit={{
    //     x: -window.innerWidth,
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
      <Stack>
        <Uiux />
        <TechStack
          text1={"Technology"}
          textone={data1}
          text={data}
          Tech={Tech}
        />
        {/* <ClientMarquee /> */}
        <PreProject />
      </Stack>
    </motion.div>
  );
};

export default Ui;
const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
