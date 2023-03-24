import { Grid, Box } from "@mui/material";
import React from "react";
import BlackBlockMarquee from "../../Components/Maarquee/BlackBlockMarquee";
import BlackBlockMarqueeRev from "../../Components/Maarquee/BlackBlockMarqueeRev";
const BlockchainMarquee = () => {
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
        <BlackBlockMarquee />

        <Box sx={{ marginTop: "2rem" }}>
          <BlackBlockMarqueeRev />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default BlockchainMarquee;
