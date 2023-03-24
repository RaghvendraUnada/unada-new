import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
const BlackTHeroComp = (props) => {
  const Navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        background: "#000",
        height: "100%",
        width: "100%",
        minHeight: {
          xl: "750px",
          lg: "700px",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
        // maxHeight: {
        //   xl: "800px",
        //   lg: "800px",
        //   md: "100vh",
        //   sm: "100vh",
        //   xs: "100vh",
        // },
        maxWidth: "2000px",
        mx: "auto",
        borderBottom: {
          xl: "1px solid rgba(163, 163, 163, 0.3)",
          lg: "1px solid rgba(163, 163, 163, 0.3)",
          md: "1px solid rgba(163, 163, 163, 0.3)",
          sm: "none",
          xs: "none",
        },
      }}
    >
      <Grid
        item
        xl={1.5}
        lg={1.5}
        md={1.5}
        sm={0}
        xs={0}
        sx={{
          display: {
            xl: "initial",
            lg: "initial",
            md: "initial",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Paper
          elevation={0}
          sx={paperStyle}
          onClick={() => {
            Navigate("/service");
          }}
        >
          <Box
            sx={{
              top: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "50%",
                xs: "50%",
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

      <Grid
        item
        xl={10.5}
        lg={10.5}
        md={10.5}
        sm={12}
        xs={12}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: "transparent",
            position: "absolute",
            width: "100%",
            maxWidth: "800px",
            top: {
              xl: "50%",
              lg: "50%",
              md: "20%",
              sm: "30%",
              xs: "33%",
            },
            left: { xl: "2%", lg: "2%", md: "1%", sm: "0%", xs: "0%" },
            textAlign: {
              xl: "initial",
              lg: "initial",
              md: "initial",
              sm: "center",
              xs: "center",
            },
            transform: "translate(0%,-50%)",
          }}
        >
          <Fade top duration={1000}>
            <Typography sx={heroTextStyle}>
              {props.text1}
              <Typography
                sx={{
                  ...heroTextStyle,
                  marginLeft: "0rem",
                  marginTop: "0rem",
                  background:
                    "linear-gradient(to left, rgba(201, 75, 234, 1) 0%, 11.84210553765297%, rgba(112, 62, 195, 1) 23.68421107530594%, 34.21052619814873%, rgba(59, 33, 140, 1) 44.736841320991516%, 55.04385977983475%, rgba(26, 16, 66, 1) 65.35087823867798%, 72.14912474155426%, rgba(54, 9, 52, 1) 78.94737124443054%, 89.47368562221527%, rgba(170, 2, 87, 1) 100%)",
                  backgroundSize: "99.5%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                {props.ColorText}
              </Typography>
              {props.text2}
            </Typography>
          </Fade>
          <Box
            sx={{
              // display: "flex",
              width: "100%",
              // mt: 2,
              justifyContent: {
                xl: "initial",
                lg: "initial",
                md: "initial",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography sx={heroMetaTextStyle}>{props.metaText1}</Typography>
            <Typography
              sx={{
                ...heroMetaTextStyle,
                ml: 1,
                background:
                  "linear-gradient(to left, rgba(211, 37, 230, 1) 0%, 32.67543911933899%, rgba(110, 36, 185, 1) 65.35087823867798%, 82.67543911933899%, rgba(36, 13, 93, 1) 100%);",
                backgroundSize: " 100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {props.metaColorText}
            </Typography>
          </Box>
        </Box>
        <ImageBox img={props.HeroImg} />
      </Grid>
    </Grid>
  );
};

export default BlackTHeroComp;

const ImageBox = (props) => {
  return <Box sx={{ ...BoxStyle, backgroundImage: `url(${props.img})` }}></Box>;
};

const BoxStyle = {
  height: "100%",
  minHeight: "100%",
  maxHeight: "100%",
  backgroundPosition: "bottom",
  backgroundSize: {
    xl: "cover",
    lg: "cover",
    md: "contain",
    sm: "contain",
    xs: "contain",
  },
  backgroundRepeat: "no-repeat",
  width: "auto",
  maxWidth: "720px",
  ml: "auto",
  mr: "0px",
  // float: "right",
};

const paperStyle = {
  width: "auto",
  borderRadius: "0px",
  height: {
    xl: "100%",
    lg: "100%",
    md: "100%",
    sm: "40%",
    xs: "40%",
  },
  borderRight: "1px solid rgba(163, 163, 163, 0.3)",
  borderBottom: {
    xl: "0px",
    lg: "0px",
    md: "0px",
    sm: "0px",
    xs: "0px",
  },
  background: "black",
  position: "relative",
  opacity: 0.5,
  "&:hover": {
    background: "#0f0f0f",
    cursor: "pointer",
    opacity: 1,
  },
  // display: {
  //   xl: "block",
  //   lg: "block",
  //   md: "block",
  //   sm: "none",
  //   xs: "none",
  // },
  //   bord,
};
const heroTextStyle = {
  fontFamily: "LGBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: {
    xl: "6.5rem",
    lg: "6.5rem",
    md: "5rem",
    sm: "5rem",
    xs: "3.5rem",
  },
  lineHeight: {
    xl: "65px",
    lg: "65px",
    md: "55px",
    sm: "50px",
    xs: "35px",
  },

  //   marginTop: {
  //     xl: "8rem",
  //     lg: "8rem",
  //     md: "8rem",
  //     sm: "0rem",
  //     xs: "0rem",
  //   },

  textTransform: "uppercase",
  color: "#fff",
  zIndex: 10,
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
const MetaTextStyle = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: {
    xl: "10rem",
    lg: "10rem",
    md: "9rem",
    sm: "8rem",
    xs: "5rem",
  },

  // position: "absolute",
  // lineHeight: "100px",
  letterSpacing: "0.01px",
  // top: {
  //   xl: "65%",
  //   lg: "65%",
  //   md: "65%",
  //   sm: "-3%",
  //   xs: "-10%",
  // },
  // left: {
  //   xl: "8%",
  //   lg: "8%",
  //   md: "-10%",
  //   sm: "35%",
  //   xs: "32%",
  // },
  // bottom: {
  //   xl: "25%",
  //   lg: "25%",
  //   md: "25%",
  //   sm: "5%",
  //   xs: "-10%",
  // },
  // left: {
  //   xl: "10%",
  //   lg: "10%",
  //   md: "-5%",
  //   sm: "40%",
  //   xs: "30%",
  // },
  // top: "65%",
  // left: "10%",

  textAlign: "center",
  color: "rgba(255, 255, 255, 0.2)",

  opacity: 1,
  transform: {
    xl: "rotate(-90deg)",
    lg: "rotate(-90deg)",
    md: "rotate(-90deg)",
    sm: "rotate(0deg)",
    xs: "rotate(0deg)",
  },
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};

// const stylecss = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)",
// };
const heroMetaTextStyle = {
  fontFamily: "LGBold",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: {
    xl: "2.2rem",
    lg: "2.2rem",
    md: "2rem",
    sm: "1.8rem",
    xs: "1.5rem",
  },
  lineHeight: "25px",
  // marginLeft: {
  //   xl: "2rem",
  //   lg: "2rem",
  //   md: "2rem",
  //   sm: "0rem",
  //   xs: "0rem",
  // },
  marginTop: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "0.5rem",
    xs: "0.5rem",
  },
  color: "#FFFFFF",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
