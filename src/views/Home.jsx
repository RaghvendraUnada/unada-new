import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import HomeHerosection from "../pages/Home/HomeHerosection";
import HomeIntro from "../pages/Home/HeroIntro";
import OurTeam from "../pages/Home/OurTeam";
import InvestedCompanies from "../pages/Home/InvestedCompanies";
import { Stack } from "@mui/system";
import DevelopmentStack from "../pages/Home/DevelopmentStack";
import OurClients from "../pages/Home/OurClients";
import ChatSection from "../pages/CareerPages/ChatSection";
import { motion } from "framer-motion";
import MainHeroPage from "./MainHeroPage";
import OpenButtonWhite from "../assets/Images/Header/MenuIconWhite.svg";
import LazyLoad from "react-lazy-load";
import VideoBox from "./VideoBox";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
const Home = () => {
  const currentLocation = useLocation();
  const [location, setLocation] = useState();
  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <div style={{ background: "white" }}>
      {/* <motion.div
        initial={{ width: "100%", opacity: 0 }}
        animate={{
          width: "100%",
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        exit={{
          x: window.innerWidth,
          opacity: 0,
          color: "red",
          transition: { duration: 1, ease: "easeInOut" },
        }}
        transition={{
          ease: "easeInOut",
          duration: "1s",
        }}
        // initial={{ opacity: 1 }}
        // animate={{ opacity: 2 }}
        // exit={{ opicity: 1 }}
      > */}
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <MainHeroPage />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <HomeIntro />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <OurTeam />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <InvestedCompanies />
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ position: "relative" }}
            >
              <DevelopmentStack />
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ position: "relative" }}
            >
              <OurClients />
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ position: "relative" }}
            >
              <ChatSection />
            </Grid>
          </Grid>
          {/* <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box sx={BoxOneStyle}></Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box sx={BoxTwoStyle}></Box>
        </Grid>
      </Grid> */}
        </Paper>
      </motion.div>
    </div>
  );
};
const AnimationSettings = {
  transition: { duration: 0.6 },
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },
  exit: { opacity: 0.2 },
};

export default Home;
