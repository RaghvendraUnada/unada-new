import React from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import vision from "../../assets/Images/Application/vision.svg";
const Vision = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
          height: "100%",
          // minHeight: "100vh",
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          borderRadius: "0px",
        }}
      >
        <Grid
          container
          sx={{
            background: "#fff",
            width: "90%",
            //   height: "100%",
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
              marginTop: "2rem",
              textAlign: { lg: "left", xl: "left", xs: "center", sm: "center" },
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
              src={vision}
              alt="vision"
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
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
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
                },
              }}
            >
              <Typography sx={mainText}>
                Bring your Digital Vision to Life.
              </Typography>
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
                <Typography sx={subText}>
                  We help you conceptualize, curate and develop responsive
                  native and hybrid mobile apps for Android and iOS by
                  leveraging technologies such as Android, Java, React Native
                  and Flutter and more. Work with us to create engaging mobile
                  applications that would redefine customer experiences. From
                  ideation & wireframing to end-to-end development, we would
                  handhold you through this entire journey to get to your dream
                  app.
                </Typography>
              </Box>
              {/* <Box
            mt={4}
            sx={{
              alignItems: "start",
              marginRight: {
                xl: "auto",
                lg: "auto",
                md: "auto",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "9rem",
                background: "#0D6EFD",
                fontSize: "1.8rem",
                padding: "0.8rem 2rem",
                fontWeight: 500,
                // lineHeight: "2.9rem",
                fontFamily: "LGLight",
              }}
            >
              Get Started
            </Button>
          </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* mobile */}
      <Paper
        elevation={0}
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
          },
          height: "100%",
          // minHeight: "100vh",
          // borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          borderRadius: "0px",
        }}
      >
        <Grid
          container
          sx={{
            background: "#fff",
            width: "90%",
            //   height: "100%",
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
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding: {
                //   xl: "1rem",
                //   lg: "1rem",
                //   md: "3rem",
                // },
              }}
            >
              <Typography sx={mainText}>
                Bring your Digital Vision to Life.
              </Typography>
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
                <Typography sx={subText}>
                  We help you conceptualize, curate and develop responsive
                  native and hybrid mobile apps for Android and iOS by
                  leveraging technologies such as Android, Java, React Native
                  and Flutter and more. Work with us to create engaging mobile
                  applications that would redefine customer experiences. From
                  ideation & wireframing to end-to-end development, we would
                  handhold you through this entire journey to get to your dream
                  app.
                </Typography>
              </Box>
              {/* <Box
            mt={4}
            sx={{
              alignItems: "start",
              marginRight: {
                xl: "auto",
                lg: "auto",
                md: "auto",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "9rem",
                background: "#0D6EFD",
                fontSize: "1.8rem",
                padding: "0.8rem 2rem",
                fontWeight: 500,
                // lineHeight: "2.9rem",
                fontFamily: "LGLight",
              }}
            >
              Get Started
            </Button>
          </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Vision;

const mainText = {
  fontSize: { xl: "4rem", lg: "4rem", md: "3rem", sm: "3rem", xs: "2.85rem" },
  color: "#212121",
  letterSpacing: "-0.1rem",
  fontWeight: 400,
  fontFamily: "LGMedium",
  lineHeight: {
    xl: "5rem",
    lg: "4rem",
    md: "4rem",
    sm: "3.8rem",
    xs: "3.8rem",
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
  mt: 6.5,
  width: { xl: "80%", lg: "80%", md: "80%", sm: "90%", xs: "90%" },
  fontSize: {
    xl: "1.8rem",
    lg: "1.8rem",
    md: "1.2rem",
    sm: "1.3rem",
    xs: "1.3rem",
  },
  color: "#3E3E59",
  fontWeight: 400,
  fontFamily: "LGRegular",
  lineHeight: {
    xl: "3.5rem",
    lg: "3.5rem",
    md: "2.9rem",
    sm: "2.1rem",
    xs: "2.0rem",
  },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: { lg: "left", xl: "left", md: "left", xs: "center", sm: "center" },
};
