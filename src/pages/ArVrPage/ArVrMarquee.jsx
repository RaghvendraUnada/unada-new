import { Grid, Box } from "@mui/material";
import React from "react";
import BlackArVrMarquee from "../../Components/Maarquee/BlackArVrMarquee";
import BlackArVrMarqueeRev from "../../Components/Maarquee/BlackArVrMarqueeRev";

const ArVrMarquee = () => {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          background: "#000",
          paddingTop: "9.5rem",
          paddingBottom: "9.5rem",
          borderTop: "0.5px solid rgba(163, 163, 163, 0.3)",
          borderBottom: "0.5px solid rgba(163, 163, 163, 0.3)",
          overflow: "hidden",
        }}
      >
        <BlackArVrMarquee />
        <Box sx={{ marginTop: "2rem" }}>
          <BlackArVrMarqueeRev />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default ArVrMarquee;
