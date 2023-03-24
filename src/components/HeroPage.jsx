import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
const HeroPage = ({
  mainText1,
  subText1,
  imgUrl,
  imgHeight,
  imgWidth,
  imgHeightMobile,
  imgWidthMobile,
}) => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);
  const [color, setColor] = useState();
  const handleClick = () => {
    setActive(!active);
  };
  const location = useLocation();

  function handleClicks() {
    navigate("/contact#section");
    setColor("red");
  }

  function handleClicksMobile() {
    navigate("/contact#miniSection");
  }

  return (
    <Paper elevation={0} sx={{ height: "auto", minHeight: "100vh" }}>
      <Grid
        container
        sx={{
          height: "100%",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            xs: "none",
            sm: "none",
          },
          background: "#fff",
          width: "100vw",
          overflow: "hidden",
          p: 0,
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          position: "relative",
        }}
      >
        <Grid
          item
          xl={5.5}
          lg={5.5}
          md={5.5}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "auto",
              maxHeight: "500px",
              maxWidth: "500px",
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
            <Fade top duration={1000}>
              <Typography sx={mainText}>{mainText1}</Typography>
            </Fade>
            <Box mt={2}>
              <Typography sx={subText}>{subText1}</Typography>
            </Box>
            <Box
              mt={3}
              sx={{
                marginRight: {
                  xl: "auto",
                  lg: "auto",
                  md: "auto",
                  sm: "center",
                  xs: "center",
                },

                padding: {
                  xl: "1rem",
                  lg: "1rem",
                  md: "3rem",
                  sm: "1rem",
                },
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              <Box sx={ButtonStyle1} onClick={handleClicks}>
                <Button
                  sx={{
                    color: "#fff",
                    bgColor: "blue",
                    borderRadius: "9rem",
                    fontSize: "1.7rem",
                    padding: "1.1rem 4.6rem",
                    fontWeight: 500,
                    fontFamily: "LGLight",
                    textTransform: "capitalize",
                  }}
                >
                  Get started
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xl={5}
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            height: "100%",
            minHeight: {
              xl: "100vh",
              lg: "100vh",
              md: "100vh",
              sm: "15vh",
              xs: "10vh",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              minHeight: imgHeight,
              maxWidth: imgWidth,
              width: "100%",
              background: `url(${imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Paper>
        </Grid>
        <Grid item xl={1.5} lg={1.5} md={1.5} sm={12} xs={12}>
          <Paper
            elevation={0}
            sx={paperStyle}
            onClick={() => {
              navigate("/whiteService");
            }}
          >
            <Box
              sx={{
                top: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "45%",
                  xs: "45%",
                },
                left: {
                  xl: "47%",
                  lg: "47%",
                  md: "47%",
                  sm: "50%",
                  xs: "50%",
                },
                position: "absolute",
                transform: {
                  xl: "translate(-50%,70%)",
                  lg: "translate(-50%,70%)",
                  md: "translate(-50%,70%)",
                  sm: "translate(-50%,-50%)",
                  xs: "translate(-50%,-50%)",
                },
              }}
            >
              <Typography sx={MetaTextStyle}>Back</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* for mobile */}
      <Grid
        container
        sx={{
          height: "100%",
          minHeight: {
            xl: "100vh",
            lg: "100vh",
            md: "100vh",
            sm: "100vh",
            xs: "100vh",
          },
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
          },
          background: "#fff",
          width: "100vw",
          overflow: "hidden",
          p: 0,
          position: "relative",
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
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "auto",
              maxHeight: "500px",
              maxWidth: "500px",
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
            <Fade top duration={1000}>
              <Typography sx={mainText}>{mainText1}</Typography>
            </Fade>
            <Box mt={2}>
              <Typography sx={subText}>{subText1}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            height: "100%",
            maxHeight: {
              xl: "100vh",
              lg: "100vh",
              md: "100vh",
              sm: "50vh",
              xs: "50vh",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              minHeight: imgHeightMobile,
              maxWidth: imgWidthMobile,
              width: "100%",
              background: `url(${imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Paper>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            mb={0}
            sx={{
              marginRight: {
                sm: "center",
                xs: "center",
              },
              textAlign: {
                xl: "left",
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Button
              onClick={handleClicksMobile}
              variant="contained"
              sx={{
                borderRadius: "9rem",
                background: "#0D6EFD",
                fontSize: "1.8rem",
                padding: "0.8rem 2rem",
                fontWeight: 500,
                fontFamily: "LGLight",
                textTransform: "capitalize",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroPage;
const paperStyle = {
  width: "auto",
  borderRadius: "0px",
  height: {
    xl: "100vh",
    lg: "100vh",
    md: "100vh",
    sm: "15vh",
    xs: "10vh",
  },
  borderLeft: "1px solid rgba(163, 163, 163, 0.3)",
  background: "#fff",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.03)",
  },
};

const MetaTextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "10rem",
    lg: "9.5rem",
    md: "9rem",
    sm: "8rem",
    xs: "5rem",
  },

  letterSpacing: "0.01px",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.2)",
  opacity: 0.5,
  transform: {
    xl: "rotate(-90deg)",
    lg: "rotate(-90deg)",
    md: "rotate(-90deg)",
    sm: "rotate(0deg)",
    xs: "rotate(0deg)",
  },
};

const ButtonStyle1 = {
  textAlign: "center",
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "15px",
    lg: "15px",
    md: "12px",
    sm: "8px",
    xs: "8px",
  },
  width: "100%",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  borderRadius: "30px",
  border: "0px black solid",
  background: "rgba(13, 110, 253, 1)",
};

const mainText = {
  fontSize: {
    xl: "5rem",
    lg: "4.5rem",
    md: "3.8rem",
    sm: "3.7rem",
    xs: "3rem",
  },
  color: "#212121",
  letterSpacing: "-0.1rem",
  fontWeight: 500,
  fontFamily: "LGMedium",
  lineHeight: {
    xl: "6rem",
    lg: "5rem",
    md: "4.5rem",
    sm: "4rem",
    xs: "3.5rem",
  },
  marginTop: { sm: "4rem", xs: "4rem" },
  width: { xl: "100%", lg: "100%", md: "90%", sm: "88%", xs: "90%" },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
};

const subText = {
  width: { xl: "100%", lg: "100%", md: "90%", sm: "85%", xs: "85%" },
  fontSize: {
    xl: "1.5rem",
    lg: "1.4rem",
    md: "1.2rem",
    sm: "1.2rem",
    xs: "1.2rem",
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
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
};
