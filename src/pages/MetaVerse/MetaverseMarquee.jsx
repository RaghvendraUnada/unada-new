import { Grid, Box } from "@mui/material";
import React from "react";
import BlackTMarquee from "../../Components/Maarquee/BlackTMarquee";
import BlackTMarqueeRev from "../../Components/Maarquee/BlackTMarqueeRev";
const MetaverseMarquee = () => {
  return (
    <>
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
        <BlackTMarquee />
        <Box sx={{ marginTop: "2rem" }}>
          <BlackTMarqueeRev />
        </Box>
      </Grid>
    </>
  );
};

export default MetaverseMarquee;
