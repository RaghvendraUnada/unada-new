import React from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import chatimg from "../../assets/Images/Application/newHeroApp.svg";
// import ChatAppImg from "../../assets/Images/Application/appgroupapp.svg";
import ChatAppImg from "../../assets/Images/Application/appSun.webp";
import HeroPage from "../../components/HeroPage";

const ApplicationHero = () => {
  return (
    <>
      <HeroPage
        imgUrl={ChatAppImg}
        mainText1={"Innovative App Solutions for a connected world."}
        subText1={
          "Our team of experienced, tech-savvy professionals create user-friendly, modern mobile apps for businesses seeking to stay competitive in today's digital age."
        }
        imgHeight={"650px"}
        imgWidth={"500px"}
        imgHeightMobile={"375px"}
        imgWidthMobile={"520px"}
      />
    </>
    // <Grid
    //   container
    //   sx={{
    //     height: "100%",
    //     minHeight: "96vh",
    //     background: "#fff",
    //     width: "95%",
    //     marginLeft: "auto",
    //     borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
    //     marginRight: "auto",
    //   }}
    // >
    //   <Grid
    //     item
    //     xl={5}
    //     lg={5}
    //     md={5}
    //     sm={12}
    //     xs={12}
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       position: "relative",
    //       // borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         // position: "absolute",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         padding: {
    //           xl: "1rem",
    //           lg: "1rem",
    //           md: "3rem",
    //         },
    //       }}
    //     >
    //       <Typography sx={mainText}>
    //         Innovative App Solutions for a connected world.
    //       </Typography>
    //       <Box mt={2}>
    //         <Typography sx={subText}>
    //           Our team of experienced, tech-savvy professionals create
    //           user-friendly, modern mobile apps for businesses seeking to stay
    //           competitive in today's digital age.
    //         </Typography>
    //       </Box>
    //       <Box
    //         mt={4}
    //         sx={{
    //           alignItems: "start",
    //           marginRight: {
    //             xl: "auto",
    //             lg: "auto",
    //             md: "center",
    //             sm: "center",
    //             xs: "center",
    //           },
    //           padding: {
    //             xl: "1rem",
    //             lg: "1rem",
    //             md: "3rem",
    //           },
    //         }}
    //       >
    //         <Button
    //           variant="contained"
    //           sx={{
    //             borderRadius: "9rem",
    //             background: "#0D6EFD",
    //             fontSize: "1.8rem",
    //             padding: "0.8rem 2rem",
    //             fontWeight: 500,
    //             // lineHeight: "2.9rem",
    //             fontFamily: "LGLight",
    //             textTransform: "capitalize",
    //           }}
    //         >
    //           Get Started
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Grid>

    //   <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
    //     <Paper
    //       elevation={0}
    //       sx={{
    //         mt: 5,
    //         mx: "auto",
    //         height: "100%",
    //         minHeight: "400px",
    //         maxWidth: "500px",
    //         width: "100%",
    //         background: `url(${ChatAppImg})`,
    //         backgroundSize: "contain",
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "center",
    //       }}
    //     ></Paper>
    //   </Grid>
    //   <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
    //     <Paper elevation={0} sx={paperStyle}>
    //       <Box
    //         sx={{
    //           top: {
    //             xl: "50%",
    //             lg: "50%",
    //             md: "50%",
    //             sm: "50%",
    //             xs: "50%",
    //           },
    //           left: {
    //             xl: "47%",
    //             lg: "47%",
    //             md: "47%",
    //             sm: "50%",
    //             xs: "50%",
    //           },
    //           position: "absolute",
    //           transform: {
    //             xl: "translate(-50%,70%)",
    //             lg: "translate(-50%,70%)",
    //             md: "translate(-50%,70%)",
    //             sm: "translate(-50%,-50%)",
    //             xs: "translate(-50%,-50%)",
    //           },
    //         }}
    //       >
    //         <Typography sx={MetaTextStyle}>Back</Typography>
    //       </Box>
    //     </Paper>
    //   </Grid>
    // </Grid>
  );
};

export default ApplicationHero;

const paperStyle = {
  width: "auto",

  height: {
    xl: "97vh",
    lg: "97vh",
    md: "97vh",
    sm: "10vh",
    xs: "10vh",
  },
  borderLeft: "1px solid rgba(163, 163, 163, 0.3)",
  // borderBottom: {
  //   xl: "1px solid rgba(163, 163, 163, 0.3)",
  //   lg: "1px solid rgba(163, 163, 163, 0.3)",
  //   md: "1px solid rgba(163, 163, 163, 0.3)",
  //   sm: "1px solid rgba(163, 163, 163, 0.3)",
  //   xs: "1px solid rgba(163, 163, 163, 0.3)",
  // },
  background: "#fff",
  position: "relative",

  //   bord,
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

const mainText = {
  fontSize: { xl: "6rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  color: "#212121",
  letterSpacing: "-0.1rem",
  fontWeight: 500,
  fontFamily: "LGMedium",
  lineHeight: { xl: "7rem", lg: "6rem", md: "5rem", sm: "4rem", xs: "4rem" },
  marginTop: { sm: "4rem", xs: "4rem" },
  width: { xl: "95%", lg: "95%", md: "90%", sm: "88%", xs: "90%" },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: {
    xl: "left",
    lg: "left",
    md: "center",
    sm: "center",
    xs: "center",
  },
};

const subText = {
  width: { xl: "95%", lg: "95%", md: "90%", sm: "85%", xs: "85%" },
  fontSize: {
    xl: "1.5rem",
    lg: "1.4rem",
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
  textAlign: {
    xl: "left",
    lg: "left",
    md: "center",
    sm: "center",
    xs: "center",
  },
};
