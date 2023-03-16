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
    <motion.div
      initial={{ width: "100%", opacity: 0 }}
      animate={{
        width: "100%",
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      transition={{
        ease: "easeInOut",
        duration: "1s",
      }}
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 2 }}
      // exit={{ opicity: 1 }}
    >
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
