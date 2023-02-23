import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
// import UnadaLife from "../../assets/Images/Career/unadalife.svg";
// import UnadaSLife1 from "../../assets/Images/Career/unadaslife1.svg";
// import UnadaSLife2 from "../../assets/Images/Career/unadaslife2.svg";
import UnadaSLife3 from "../../assets/Images/Career/unadalife3.svg";

function UnadalifeSection() {
  return (
    <Grid
      container
      sx={{
        marginTop: "-1rem",
      }}
    >
      <Grid item sx={{ width: "inherit" }}>
        <Box sx={{ position: "relative" }}>
          <img
            alt="Unada Life"
            src={UnadaSLife3}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <Typography
            sx={text}
            // style={{
            //   color: "#171717",
            // }}
          >
            Unada’s life
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UnadalifeSection;

const text = {
  fontSize: {
    xl: "20rem",
    lg: "19rem",
    md: "10rem",
    sm: "8rem",
    xs: "5.1rem",
  },
  position: "absolute",
  fontFamily: "LGTrial",
  top: {
    xl: "76.5%",
    lg: "73.5%",
    md: "85%",
    sm: "82.5%",
    xs: "84.5%",
  },
  left: {
    xl: "15%",
    lg: "15%",
    md: "15%",
    sm: "15%",
    xs: "15%",
  },

  fontWeight: 600,
  textAlign: "center",
  color: "#171717",
};
