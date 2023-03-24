import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import HomeIntro from "../pages/Home/HeroIntro";
import OurTeam from "../pages/Home/OurTeam";
import InvestedCompanies from "../pages/Home/InvestedCompanies";
import DevelopmentStack from "../pages/Home/DevelopmentStack";
import OurClients from "../pages/Home/OurClients";
import ChatSection from "../pages/CareerPages/ChatSection";
import { motion } from "framer-motion";
import MainHeroPage from "./MainHeroPage";
import LazyLoad from "react-lazy-load";
import VideoBox from "./VideoBox";
import { useLocation } from "react-router-dom";
const Home = () => {
  const currentLocation = useLocation();
  const [location, setLocation] = useState();
  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <div style={{ background: "white" }}>
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
        </Paper>
      </motion.div>
    </div>
  );
};
const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default Home;
