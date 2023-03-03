import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ChatUsCareer from "../CareerPages/ChatUsCareer";
import { AiFillInstagram } from "react-icons/ai";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DoorSlidingSharpIcon from "@mui/icons-material/DoorSlidingSharp";
import GlassDoorIcon from "../../assets/Images/Career/glassdoor.svg";
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
          borderRight: "0.5px solid rgba(163, 163, 163, 0.3)",
        }}
      >
        <Typography sx={textStyle1}>
          Let’s chat,
          <Typography
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
          </Typography>{" "}
        </Typography>
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
            {/* <BsFacebook size={19} /> */}
            <AiFillInstagram size={24} />
            <LinkedInIcon size={24} sx={{ fontSize: "24px" }} />
            {/* <BsTwitter size={19} /> */}
            <YouTubeIcon size={24} sx={{ fontSize: "24px" }} />
            {/* <DoorSlidingSharpIcon size={23} sx={{ fontSize: "23px" }} /> */}
            <Box component="img" src={GlassDoorIcon} alt="glassdoor" />
          </Box>
          <Box sx={{ marginTop: "5rem" }}>
            <a
              href="https://www.google.com/maps?q=552,+Pandurang+Shashtri+Marg,+Beside+Star+Bazaar,+Satellite,+Ahmedabad,+Gujarat+380015"
              target="_blank"
            >
              <Typography sx={SubHeadText}>Find us</Typography>
              <Typography sx={metaTextStyle2}>
                550 Iscon Emporio, Besides StarBazaar, Jodhpur Cross Rd,
                Satellite,Ahmedabad, Gujarat 380015
              </Typography>
            </a>
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
  fontFamily: "LGRegular",
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
