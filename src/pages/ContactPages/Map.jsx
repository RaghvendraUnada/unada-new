import React from "react";
import { Box, Paper, Grid } from "@mui/material";
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
              scrolling="no"
              width="100%"
              height="690px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Unada Labs Pvt Ltd, Jodhpur Char Rasta, Satellite, Ahmedabad, Gujarat, India&t=&z=10&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Map;
