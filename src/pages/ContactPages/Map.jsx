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
              src="https://maps.google.com/maps?q=Iscon Emporio, Satellite, Ahmedabad, Gujarat&t=&z=10&ie=UTF8&iwloc=&output=embed"
              id="gmap_canvas"
              frameborder="0"
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
