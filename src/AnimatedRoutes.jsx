import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Careers from "./views/Careers";
import Contact from "./views/Contact";
import MetaVerse from "./views/MetaVerse";
import Application from "./views/Application";
import Service from "./views/Service";
import Web from "./views/Web";
import Ui from "./views/Ui";
import WhiteServicesPage from "./pages/Services/WhiteServicesPage";
import ArVr from "./views/ArVr";
import Blockchain from "./views/Blockchain";
import Home from "./views/Home";
import { AnimatePresence } from "framer-motion";
import MainHeroPage from "./views/MainHeroPage";
import Example from "./Components/SpringSlider/SpringSlider";
import Marquee from "./views/OurTeamMarquee";
const AnimatedRoutes = ({ setColorState }) => {
  const Location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (
        Location.pathname === "/metaVerse" ||
        Location.pathname === "/home" ||
        Location.pathname === "/ArVr" ||
        Location.pathname === "/blockchain" ||
        Location.pathname === "/contact"
      ) {
        setColorState(true);
      } else {
        setColorState(false);
      }
    }, 500);
  }, [Location.pathname]);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={Location} key={Location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/whiteService" element={<WhiteServicesPage />} />
        <Route path="/metaVerse" element={<MetaVerse />} />
        <Route path="/application" element={<Application />} />
        <Route path="/web" element={<Web />} />
        <Route path="/ArVr" element={<ArVr />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/ui" element={<Ui />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
