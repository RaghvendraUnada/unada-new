import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import WebHero from "../pages/Web/WebHero";
import PreProjectWeb from "../components/PreProjectWeb";
import aws from "../assets/Images/Web/aws.svg";
import css from "../assets/Images/Web/css.svg";
import html from "../assets/Images/Web/html.svg";
import react from "../assets/Images/Application/react.svg";
import { motion } from "framer-motion";
import mongodb from "../assets/Images/web/mongodb.svg";
import javascript from "../assets/Images/Web/javascript.svg";
import mysql from "../assets/Images/Web/mysql.svg";
import nodejs from "../assets/Images/Web/nodejs.svg";
import "../pages/Services/whiteservice.module.css";

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
        <PreProjectWeb />
      </Stack>
    </motion.div>
  );
};

export default Web;
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.3 },
};
