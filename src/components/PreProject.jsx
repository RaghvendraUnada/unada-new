import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import pre1 from "../assets/Images/cara/pre1.png";
import pre2 from "../assets/Images/cara/pre2.png";
import pre3 from "../assets/Images/cara/pre3.png";
// import ExploreIcon from "../assets/Images/Services/ExploreIcon.svg";X
import blackArrowImg from "../assets/Images/Services/blackArrowImg.svg";

import { useRef } from "react";
const PreProject = () => {
  const boxRef = useRef();
  const scollToRef = useRef();
  useEffect(() => {
    return scollToRef?.current?.scroll(100, 0);
  });

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        paddingBottom: "60px",
        height: "100%",
        position: "relative",
        // minHeight: { lg: "100vh", md: "100vh", sm: "40vh", xs: "40vh" },
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
          // width: "90%",
          // marginLeft: "auto",
          // marginRight: "auto",
          paddingLeft: {
            xl: "3.5rem",
            lg: "3.5rem",
            md: "2rem",
            sm: "0rem",
            xs: "0rem",
          },
          textAlign: {
            xl: "start",
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          marginTop: {
            xl: "2rem",
            lg: "2rem",
            md: "0rem",
            sm: "4rem",
            xs: "4rem",
          },
        }}
      >
        <Typography sx={mainText}>Previous Projects</Typography>
      </Grid>

      <Grid
        container
        sx={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          // background: "red",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* left  */}
        <Box
          sx={{
            marginLeft: "auto",
            position: "absolute",
            left: {
              xs: "1%",
            },

            bottom: {
              xs: "53%",
              lg: "7%",
            },
            transform: "rotate(180deg)",
            cursor: "pointer",
            "&:hover": {
              scale: "1.2",
            },
            zIndex: "10",
          }}
        >
          <img
            style={{ height: "40px" }}
            src={blackArrowImg}
            alt="nextImg"
            onClick={() => {
              scollToRef?.current?.scroll(
                scollToRef?.current?.scrollLeft - boxRef?.current?.offsetWidth,
                0
              );
            }}
          />
        </Box>
        {/* right  */}
        <Box
          sx={{
            marginLeft: "auto",
            position: "absolute",
            right: {
              xs: "1%",
            },
            bottom: {
              xs: "53%",
              lg: "7%",
            },
            cursor: "pointer",
            "&:hover": {
              scale: "1.2",
            },
            zIndex: "10",
          }}
        >
          <img
            style={{ height: "40px" }}
            src={blackArrowImg}
            alt="nextImg"
            onClick={() => {
              scollToRef?.current?.scroll(
                scollToRef?.current?.scrollLeft + boxRef?.current?.offsetWidth,
                0
              );
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "raw",
            overflowY: "scroll",
            position: "relative",
            scrollBehavior: "smooth",
            gap: {
              xl: "3.5rem",
              lg: "3.5rem",
              md: "3.5rem",
              sm: "1.8rem",
              xs: "1rem",
            },
            // marginLeft: "-160px",v
            marginTop: "2rem",
            marginLeft: "-100px",
          }}
          id="abc"
          // ref={myRef}
          ref={scollToRef}
        >
          <Box component="img" id="ill" alt="hello" sx={imge} src={pre1} />
          <Box ref={boxRef} component="img" alt="hello" sx={imge} src={pre2} />
          <Box component="img" alt="hello" sx={imge} src={pre3} />
          <Box component="img" alt="hello" sx={imge} src={pre1} />
          <Box component="img" alt="hello" sx={imge} src={pre2} />
          <Box component="img" alt="hello" sx={imge} src={pre3} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PreProject;

const mainText = {
  width: "100%",
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4.8rem",
    lg: "4.8rem",
    md: "4.2rem",
    sm: "3.2rem",
    xs: "3.2rem",
  },

  letterSpacing: 0.42,

  color: "#000",
  paddingBottom: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "2rem",
    xs: "0rem",
  },
  marginTop: "6rem",
  // marginBottom: "2rem",
};

const imge = {
  height: { xl: "80%", lg: "80%", md: "70%", sm: "60%", xs: "60%" },
  width: { xl: "80%", lg: "80%", md: "70%", sm: "60%", xs: "60%" },
};
