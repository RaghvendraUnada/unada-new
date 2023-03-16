import React from "react";
import { Typography, Box, Paper, Grid } from "@mui/material";
import Fade from "react-reveal/Fade";
const Intro = ({ imgUrl, mainTextIntro, subTextIntro }) => {
  return (
    <Paper elevation={0}>
      <Grid
        container
        sx={{
          background: "#fff",
          width: "100%",
          height: "100%",
          minHeight: {
            xl: "100vh",
            lg: "100vh",
            md: "100vh",
            sm: "0vh",
            xs: "0vh",
          },
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            xs: "flex",
            sm: "none",
          },
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: { lg: "0rem", xl: "0rem", xs: "1rem", sm: "1rem" },
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            // marginTop: "2rem",
            textAlign: { lg: "left", xl: "left", xs: "center", sm: "center" },
            // marginTop: {
            //   xl: "10rem",
            //   lg: "10rem",
            //   md: "9rem",
            //   sm: "4rem",
            //   xs: "4rem",
            // },
            // marginTop: "inherit",
            // background: "red",

            justifyContent: "center",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              xs: "none",
              sm: "none",
            },
          }}
        >
          <img
            src={imgUrl}
            alt="img"
            style={{ height: "auto", width: "90%" }}
          />
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xl: "1rem",
                lg: "1rem",
                md: "3rem",
                sm: "0rem",
                xs: "0rem",
              },
            }}
          >
            <Fade top duration={1000}>
              <Typography sx={mainText}>{mainTextIntro}</Typography>
            </Fade>
            <Box
              mt={2}
              sx={{
                marginBottom: {
                  lg: "0rem",
                  xl: "0rem",
                  md: "1rem",
                  sm: "2rem",
                  xs: "2rem",
                },
              }}
            >
              <Typography sx={subText}>{subTextIntro}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "#fff",
          width: "100%",
          height: "100%",
          // minHeight: {
          //   xl: "100vh",
          //   lg: "100vh",
          //   md: "100vh",
          //   sm: "0vh",
          //   xs: "0vh",
          // },
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            xs: "none",
            sm: "flex",
          },
          // borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: { lg: "0rem", xl: "0rem", xs: "0rem", sm: "rem" },
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xl: "1rem",
                lg: "1rem",
                md: "3rem",
                sm: "0rem",
                xs: "0rem",
              },
            }}
          >
            <Fade top duration={1000}>
              <Typography sx={mainText}>{mainTextIntro}</Typography>
            </Fade>
            <Box
              mt={2}
              // sx={{
              //   marginBottom: {
              //     lg: "0rem",
              //     xl: "0rem",
              //     md: "1rem",
              //     sm: "2rem",
              //     xs: "2rem",
              //   },
              // }}
            >
              <Typography sx={subText}>{subTextIntro}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Intro;

const mainText = {
  fontSize: { xl: "4.3rem", lg: "4.3rem", md: "3rem", sm: "3rem", xs: "3rem" },
  color: "#212121",
  letterSpacing: "-0.1rem",
  fontWeight: 400,
  fontFamily: "LGMedium",
  lineHeight: {
    xl: "5rem",
    lg: "4rem",
    md: "4rem",
    sm: "3.5rem",
    xs: "3.5rem",
  },
  // marginTop: { sm: "4rem", xs: "4rem" },
  width: { xl: "80%", lg: "80%", md: "80%", sm: "85%", xs: "85%" },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: {
    lg: "left",
    xl: "left",
    md: "left",
    xs: "center",
    sm: "center",
  },
};
const subText = {
  width: { xl: "80%", lg: "80%", md: "80%", sm: "90%", xs: "90%" },
  fontSize: {
    xl: "1.7rem",
    lg: "1.7rem",
    md: "1.2rem",
    sm: "1.3rem",
    xs: "1.3rem",
  },
  color: "#3E3E59",
  fontWeight: 400,
  fontFamily: "LGRegular",
  lineHeight: {
    xl: "2.6rem",
    lg: "2.6rem",
    md: "2.4rem",
    sm: "2.1rem",
    xs: "2.0rem",
  },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: { lg: "left", xl: "left", md: "left", xs: "center", sm: "center" },
};
