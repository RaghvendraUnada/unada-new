import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ServicesPage from "../pages/Services/ServicesPage";
import { motion } from "framer-motion";

const Service = () => {
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
