import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ChatUsCareer from "../CareerPages/ChatUsCareer";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import styles from "./OurTeam.module.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { keyframes } from "styled-components";
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import chatTitle from "../../assets/images/new/chat.png";

const ChatSection = () => {
  return (
    <Grid
      container
      sx={{
        background: "white",
        // minHeight: {
        //   xl: "100vh",
        //   lg: "100vh",
        //   md: "100vh",
        //   sm: "100vh",
        //   xs: "100vh",
        // },
        // mb: { xl: 8.3, lg: 8, md: 8, sm: 0, xs: -8 },
        position: "relative",
      }}
    >
      <Grid
        item
        xl={6}
        lg={6}
        md={12}
        sm={12}
        xs={12}
        sx={{
          padding: "2rem 6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: {
            xl: "initial",
            lg: "initial",
            md: "center",
            sm: "center",
            xs: "center",
          },
        }}
      >
        {/* <Typography sx={textStyle1}>
          Let’s chat,
          <Box
            className="content"
            display="flex"
            alignItems="center"
            justifyContent="start"
            sx={{
              // padding: {
              //   xl: "2rem",
              //   lg: "2rem",
              //   md: "2rem",
              //   sm: "2rem",
              //   xs: "2rem",
              // },
              // width: "95%",
              // margin: {
              //   sm: "auto",
              //   md: 0,
              // },
              // marginLeft: "0px",
              // marginRight: "auto",
              // marginY: "5rem",
            }}
          > */}
            {/* <AnimatedGradientText2>we respond fast</AnimatedGradientText2> */}
            {/* <AnimatedGradientText2>We respond fast</AnimatedGradientText2> */}
            {/* <Box
              className="bg-gradient-text"
              sx={{
                fontSize: {
                  lg: "6rem",
                  md: "4rem",
                  sm: "4rem",
                  xs: "4rem",
                },
              }}
            >
              We respond fast
            </Box> */}
            {/* <AnimatedGradientText></AnimatedGradientText>  */}
            {/* <h2 style={{ fontSize: "70px" }}> We respond fast</h2>
            <h2 style={{ fontSize: "70px" }}>We respond fast</h2> */}
          {/* </Box> */}
          {/* <Typography
            sx={{
              ...textStyle1,
              background:
                "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
              backgroundSize: " 100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            we respond fast
          </Typography> */}
        {/* </Typography> */}
        <img src={chatTitle} alt="chat" width="70%" draggable="false" />
        <Box>
          <Typography sx={SubHeadText}>Follow us</Typography>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",

              justifyContent: {
                xl: "start",
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              },
              gap: "20px",
            }}
          >
            <BsFacebook className={styles.iconfb} size={19} />
            <AiFillInstagram className={styles.iconinsta1} size={23} /> 
            <AiFillLinkedin className={styles.icontwitter} size={23} /> 
            <BsTwitter className={styles.icontwitter} size={19} />
          </Box>
          <Box sx={{ marginTop: "5rem" }}>
            <Typography sx={SubHeadText}>Find us</Typography>
            <Typography sx={metaTextStyle2}>
              550 Iscon Emporio, Besides StarBazaar, Jodhpur Cross Rd,
              Satellite,Ahmedabad, Gujarat 380015
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <ChatUsCareer showArrow={false} />
      </Grid>
    </Grid>
  );
};

export default ChatSection;
const textStyle1 = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "64px",
    lg: "64px",
    md: "50px",
    sm: "42px",
    xs: "35px",
  },
  lineHeight: {
    xl: "76px",
    lg: "76px",
    md: "58px",
    sm: "50px",
    xs: "45px",
  },
  letterSpacing: 1,
};
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  letter-spacing: 1px;
  font-size: 64px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  // overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    font-size: 64px;
    lineheight: 76px;
  }
  @media (max-width: 992px) {
    font-size: 64px;
    lineheight: 76px;
  }
  @media (max-width: 768px) {
    font-size: 50px;
    lineheight: 58px;
  }
  @media (max-width: 576px) {
    font-size: 42px;
    lineheight: 50px;
  }
  @media (max-width: 320px) {
    font-size: 35px;
    lineheight: 45px;
  }
`;
const SubHeadText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "12px",
    xs: "12px",
  },
  lineHeight: "17px",
  color: "#0F0F0F",
  marginTop: {
    xl: "0rem",
    lg: "0rem",
    md: "4rem",
    sm: "4rem",
    xs: "4rem",
  },
};

const metaTextStyle2 = {
  marginTop: "2rem",
  width: {
    xl: "50%",
    lg: "50%",
    md: "50%",
    sm: "100%",
    xs: "100%",
  },
  marginLeft: {
    xl: "0rem",
    lg: "0rem",
    md: "auto",
    sm: "auto",
    xs: "auto",
  },
  marginRight: "auto",
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "16px",
    lg: "16px",
    md: "13px",
    sm: "11px",
    xs: "11px",
  },
  lineHeight: "24px",
  color: "rgba(15, 15, 15, 0.5)",
  textAlign: {
    xl: "start",
    lg: "start",
    md: "center",
    sm: "center",
    xs: "center",
  },
  marginBottom: {
    xl: "0rem",
    lg: "0rem",
    md: "4rem",
    sm: "4rem",
    xs: "4rem",
  },
};

const AnimatedGradientText2 = styled.h1`
  background-image: -webkit-linear-gradient(
    2deg,
    rgba(201, 75, 234, 1) 0%,
    rgba(112, 62, 195, 1),
    rgba(59, 33, 140, 1),
    rgba(26, 16, 66, 1),
    rgba(54, 9, 52, 1),
    rgba(170, 2, 87, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 6rem;
  font-weight: 500;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1200px) {
    width: 60%;
    font-size: 4rem;
    margin: auto;
  }
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
