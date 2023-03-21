import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import WebHero from "../pages/Web/WebHero";
import PreProject from "../components/PreProject";
import aws from "../assets/Images/Web/aws.svg";
import css from "../assets/Images/Web/css.svg";
import html from "../assets/Images/Web/html.svg";
import react from "../assets/Images/Application/react.svg";
import flutter from "../assets/Images/Application/flutter.svg";
import swift from "../assets/Images/Application/swift.svg";
import { motion } from "framer-motion";
import mongodb from "../assets/Images/web/mongodb.svg";
import javascript from "../assets/Images/Web/javascript.svg";
import mysql from "../assets/Images/Web/mysql.svg";
import nodejs from "../assets/Images/Web/nodejs.svg";
import "../pages/Services/whiteservice.module.css";

// import
const data1 = ["Manufacturing", "Warehousing", "Online Publishing", "Fintech"];
const data = [
  "Fashion & Cosmetics",
  "Media & OTT",
  "Real Estate",
  "E-Commerce",
];
const Tech = [aws, css, html, react, mongodb, javascript, nodejs, mysql];
import TechStack from "../pages/Application/TechStack";
import { SendEvent } from "../utils/SendEvent";
const Web = () => {
  useEffect(() => {
    SendEvent("Web Page");
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
        <WebHero />
        <TechStack
          hey={"hey"}
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

export default Web;
const AnimationSettings = {
  transition: { duration: 0.6 },
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },
  exit: { opacity: 0.2 },
};
