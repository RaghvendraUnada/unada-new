import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: "#000",
      }}
    >
      <Grid
        container
        sx={{
          paddingLeft: {
            xl: "20px",
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "10px",
          },
          paddingRight: {
            xl: "20px",
            lg: "20px",
            md: "20px",
            sm: "10px",
          },
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "45px",
          maxHeight: "45px",
          display: "flex",
          position: "absolute",
          bottom: "-0.65%",
          alignItems: "center",
          background: "black",
          textAlign: "center",
        }}
      >
        <Grid item xl={2} lg={2} md={2} sm={2.4} xs={2} sx={fooText}>
          Privacy policy
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={2.4} xs={2.6} sx={{ ...fooText }}>
          Terms of service
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={3}
          sm={3.4}
          xs={5}
          sx={{
            ...fooText,
            textAlign: "center",
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: "1.2rem",
                lg: "1.2rem",
                md: "1.2rem",
                sm: "0.9rem",
                xs: "0.9rem",
              },
            }}
          >
            Copyright © 2023 Unada Labs Pvt Ltd.
          </Typography>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={3.8}
          xs={2.4}
          sx={{
            fontFamily: "LGRegular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {
              xl: "1.2rem",
              lg: "1.2rem",
              md: "1.2rem",
              sm: "1rem",
              xs: "0.9rem",
            },
            textAlign: {
              xl: "right",
              lg: "right",
              md: "right",
              sm: "center",
              xs: "center",
            },
            color: "white",
            cursor: "pointer",
          }}
        >
          Made with ❤️!!
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;

const fooText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.4)",
  fontSize: {
    xl: "1.2rem",
    lg: "1.2rem",
    md: "1.2rem",
    sm: "1.2rem",
    xs: "1.0rem",
  },
  opacity: 0.6,
  textAlign: "left",
  cursor: "pointer",
};
