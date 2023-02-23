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
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d20415.09813113849!2d72.55024570908539!3d23.02389710589735!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e84e4cdb7817d%3A0x4199c379f3d79aaa!2sunispace!3m2!1d23.0224694!2d72.55570349999999!5e0!3m2!1sen!2sin!4v1663666019398!5m2!1sen!2sin"
              width="100%"
              height="690px"
              style={{
                border: "1px solid black",
              }}
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            >
              <a href="https://www.google.com/maps/dir/23.0197481,72.5546438/unispace/@23.0214022,72.5491162,15.75z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e84e4cdb7817d:0x4199c379f3d79aaa!2m2!1d72.5557035!2d23.0224694%22%3E">
                measure area map
              </a>
            </iframe>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Map;
