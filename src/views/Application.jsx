import { React, useEffect } from "react";
import { Stack } from "@mui/material";
import ApplicationHero from "../pages/Application/ApplicationHero";
import Vision from "../pages/Application/Vision";
import TechStack from "../pages/Application/TechStack";
import PreProject from "../components/PreProject";
import android from "../assets/Images/Application/andriodNew.svg";
import java from "../assets/Images/Application/java.svg";
import kotlin from "../assets/Images/Application/kotlin.svg";
import react from "../assets/Images/Application/react.svg";
import flutter from "../assets/Images/Application/flutter.svg";
import swift from "../assets/Images/Application/swift.svg";
const data = ["Media & Entertainment", "Retail"];
const data1 = ["Fintech", "Warehousing & Logistics", "Healthcare"];
const Tech = [android, java, kotlin, react, flutter, swift];
import { motion } from "framer-motion";
import "../pages/Services/whiteservice.module.css";
import { SendEvent } from "../utils/SendEvent";

const Application = () => {
  useEffect(() => {
    SendEvent("Application Page");
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

    // >
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack>
        <ApplicationHero />
        <Vision />
        <TechStack
          text1={"Technology"}
          textone={data1}
          text={data}
          Tech={Tech}
        />
        <PreProject />
      </Stack>
    </motion.div>
  );
};
const AnimationSettings = {
  transition: { duration: 0.4 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export default Application;
