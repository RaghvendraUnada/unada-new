import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

import CaraProject from "../components/Maarquee/CaraProject";
const PreProject = () => {
  const scollToRef = useRef();
  useEffect(() => {
    return scollToRef?.current?.scroll(100, 0);
  });

  return (
    <Box sx={{ background: "#000", mt: 4 }}>
      <Box>
        <CaraProject />
      </Box>
    </Box>
  );
};

export default PreProject;

const mainText = {
  width: "100%",
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4.8rem",
    lg: "4.8rem",
    md: "4.2rem",
    sm: "3.2rem",
    xs: "3.2rem",
  },

  letterSpacing: 0.42,

  color: "red",
  paddingBottom: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "2rem",
    xs: "0rem",
  },
  marginTop: "6rem",
};

const imge = {
  height: { xl: "80%", lg: "80%", md: "70%", sm: "60%", xs: "60%" },
  width: { xl: "80%", lg: "80%", md: "70%", sm: "60%", xs: "60%" },
};
