import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
const Map = () => {
  return (
    <Paper elevation={0} sx={{ borderRadius: "0px", background: "#000" }}>
      <Grid container>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ background: "#000" }}
        >
          <Box sx={{ background: "#000" }}>
            <iframe
              src="https://www.google.com/maps/place/Unada+Labs+Pvt+Ltd/@23.0268336,71.9641296,10z/data=!4m10!1m2!2m1!1sunada!3m6!1s0x395e858b56c3d6d9:0x8d6913b386518d79!8m2!3d23.0268336!4d72.5244323!15sCgV1bmFkYZIBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11spxlkc5z"
              id="gmap_canvas"
              frameborder="0"
              X-Frame-Options="SAMEORIGIN"
              scrolling="no"
              width="100%"
              height="690px"
              style={{
                border: "1px solid black",
              }}
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Map;
