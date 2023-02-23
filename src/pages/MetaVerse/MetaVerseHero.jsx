import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import BlackTHeroComp from "../../Components/BlackTHeroComp";
import MetaVerseHeroImg from "../../assets/Images/MetaVerse/MetaverseHeroImg.svg";
const MetaVerseHero = () => {
  return (
    // <Grid
    //   container
    //   sx={{
    //     background: "#000",
    //     height: "97vh",
    //     borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
    //   }}
    // >
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
    //   <Grid
    //     item
    //     xl={4}
    //     lg={4}
    //     md={4}
    //     sm={12}
    //     xs={12}
    //     sx={{
    //       //   bgcolor: "red",
    //       textAlign: {
    //         xl: "initial",
    //         lg: "initial",
    //         md: "initial",
    //         sm: "center",
    //         xs: "center",
    //       },
    //       position: "relative",
    //       marginTop: {
    //         xl: "0rem",
    //         lg: "0rem",
    //         md: "0rem",
    //         sm: "3rem",
    //         xs: "3rem",
    //       },
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <Box>
    //       <Typography sx={heroTextStyle}>
    //         BUILDING
    //         <Typography
    //           sx={{
    //             ...heroTextStyle,
    //             marginLeft: "0rem",
    //             marginTop: "0rem",
    //             background:
    //               "linear-gradient(to left, rgba(201, 75, 234, 1) 0%, 11.84210553765297%, rgba(112, 62, 195, 1) 23.68421107530594%, 34.21052619814873%, rgba(59, 33, 140, 1) 44.736841320991516%, 55.04385977983475%, rgba(26, 16, 66, 1) 65.35087823867798%, 72.14912474155426%, rgba(54, 9, 52, 1) 78.94737124443054%, 89.47368562221527%, rgba(170, 2, 87, 1) 100%)",
    //             backgroundSize: " 100%",
    //             backgroundRepeat: "repeat",
    //             backgroundClip: "text",
    //             textFillColor: "transparent",
    //           }}
    //         >
    //           IMMERSIVE
    //         </Typography>
    //         EXPERIENCES
    //       </Typography>

    //       <Typography sx={heroMetaTextStyle}>
    //         BRIDGING THE GAP
    //         <Typography
    //           sx={{
    //             ...heroMetaTextStyle,
    //             marginTop: "0rem",
    //             marginLeft: "0rem",
    //             background:
    //               "linear-gradient(to left, rgba(211, 37, 230, 1) 0%, 32.67543911933899%, rgba(110, 36, 185, 1) 65.35087823867798%, 82.67543911933899%, rgba(36, 13, 93, 1) 100%);",
    //             backgroundSize: " 100%",
    //             backgroundRepeat: "repeat",
    //             backgroundClip: "text",
    //             textFillColor: "transparent",
    //           }}
    //         >
    //           BETWEEN VIRTUAL AND REAL
    //         </Typography>
    //       </Typography>
    //     </Box>
    //   </Grid>
    //   <Grid
    //     item
    //     xl={6}
    //     lg={6}
    //     md={6}
    //     sm={6}
    //     xs={6}
    //     sx={{ marginLeft: "auto", marginRight: "auto" }}
    //   >
    //     <img
    //       src={MetaVerseHeroImg}
    //       style={{
    //         height: "auto",
    //         width: "100%",
    //         zIndex: 1,
    //       }}
    //       alt="heroImg"
    //     />
    //   </Grid>
    // </Grid>
    <>
      <BlackTHeroComp
        text1={"BUILDING"}
        ColorText={"IMMERSIVE"}
        text2={"EXPERIENCES"}
        metaText1={"BRIDGING THE GAP"}
        metaColorText={" BETWEEN VIRTUAL AND REAL"}
        HeroImg={MetaVerseHeroImg}
      />
    </>
  );
};

export default MetaVerseHero;
