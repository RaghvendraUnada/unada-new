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
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  const currentLocation = useLocation();
  const [location, setLocation] = useState();
  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <motion.div
      className="bg-white"
      initial={typeof window === "undefined" ? "visible" : "hidden"}
      animate="visible"
      {...AnimationSettings}
    >
      <div style={{ background: "white" }}>
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
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ position: "relative" }}
            >
              <Footer />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </motion.div>
  );
};
const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};

export default Home;
