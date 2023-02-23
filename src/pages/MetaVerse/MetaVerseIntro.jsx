import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import MetaVerseIntroImg from "../../assets/Images/MetaVerse/MetaVerseIntroImg.svg";
import BlackTIntroComp from "../../Components/BlackTIntroComp";
const MetaVerseIntro = () => {
  return (
    // <Grid
    //   container
    //   sx={{
    //     marginTop: "10rem",
    //     width: "80%",

    //     marginLeft: "auto",
    //     marginRight: "auto",
    //   }}
    // >
    //   <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
    //     <Box>
    //       <img
    //         src={MetaVerseIntroImg}
    //         alt="Intro"
    //         style={{ height: "auto", width: "100%" }}
    //       />
    //     </Box>
    //   </Grid>
    //   <Grid
    //     item
    //     xl={6}
    //     lg={6}
    //     md={12}
    //     sm={12}
    //     xs={12}
    //     sx={{
    //       marginTop: {
    //         xl: "0rem",
    //         lg: "0rem",
    //         md: "3rem",
    //         sm: "3rem",
    //         xs: "3rem",
    //       },
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         width: {
    //           xl: "90%",
    //           lg: "100%",
    //           md: "100%",
    //           sm: "100%",
    //           xs: "100%",
    //         },
    //         // marginTop: "2rem",
    //         marginLeft: {
    //           xl: "5rem",
    //           lg: "5rem",
    //           md: "0rem",
    //           sm: "0rem",
    //           xs: "0rem",
    //         },
    //         textAlign: {
    //           xl: "initial",
    //           lg: "initial",
    //           md: "center",
    //           sm: "center",
    //           xs: "center",
    //         },
    //       }}
    //     >
    //       <Typography sx={IntroMainText}>
    //         Escape the limits of reality,
    //       </Typography>
    //       <Typography sx={IntroColorText}>
    //         with a world beyond boundaries.
    //       </Typography>
    //       <Typography sx={IntroParaText}>
    //         At Unada, we are dedicated to building the ultimate metaverse
    //         experience. Our team is composed of experts in virtual reality,
    //         augmented reality, and game development, who are committed to
    //         creating immersive and interactive environments for our users. We
    //         have been at the forefront of the metaverse movement, constantly
    //         pushing the boundaries of what is possible in this exciting new
    //         world. Our focus is on creating a seamless blend of the physical and
    //         virtual worlds, allowing our users to fully experience the potential
    //         of the metaverse.
    //       </Typography>
    //     </Box>
    //   </Grid>
    // </Grid>
    <>
      <BlackTIntroComp
        introImg={MetaVerseIntroImg}
        Text1={"Escape the limits of reality,"}
        ColorText={"with a world beyond boundaries."}
        MetaText={
          "At Unada, we are dedicated to building the ultimate metaverse experience. Our team is composed of experts in virtual reality, augmented reality, and game development, who are committed to creating immersive and interactive environments for our users.We have been at the forefront of the metaverse movement, constantly pushing the boundaries of what is possible in this exciting new world. Our focus is on creating a seamless blend of the physical and virtual worlds, allowing our users to fully experience the potential of the metaverse."
        }
      />
    </>
  );
};

export default MetaVerseIntro;
