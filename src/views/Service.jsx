import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ServicesPage from "../pages/Services/ServicesPage";
import { motion } from "framer-motion";
import { SendEvent } from "../utils/SendEvent";
const Service = () => {
  useEffect(() => {
    SendEvent("Service Page ");
  }, []);
  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Stack
        sx={{
          background: "black",
        }}
      >
        <ServicesPage />
      </Stack>
    </motion.div>
  );
};

export default Service;
const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
