import { Grid, Box } from "@mui/material";
import React from "react";
import BlackMetaMarquee from "../../Components/Maarquee/BlackMetaMarquee";
import BlackMetaMarqueeRev from "../../Components/Maarquee/BlackMetaMarqueeRev";
const MetaverseMarquee = () => {
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
        <BlackMetaMarquee />

        <Box sx={{ marginTop: "2rem" }}>
          <BlackMetaMarqueeRev />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default MetaverseMarquee;
