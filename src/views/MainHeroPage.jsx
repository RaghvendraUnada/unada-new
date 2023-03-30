import React, { useEffect, lazy, Suspense, useState } from "react";
import UnadaVid from "../assets/newHomeHeroV.mp4";
import { Paper, Box, Button, Typography } from "@mui/material";
import "../Components/css/HomeStyle.css";
import { motion } from "framer-motion";
import SideArrowImg from "../assets/Images/Home/SideArrowImg.svg";
import SideArrowImg2 from "../assets/Images/Home/SideArrowImg2.svg";
import { useNavigate, Navigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Logo from "../../src/assets/Images/Header/Logo.png";
import WhiteLogo from "../../src/assets/Images/Header/unada-logo.webp";
import OpenButton from "../../src/assets/Images/Header/newHeader.svg";
import OpenButtonWhite from "../../src/assets/Images/Header/MenuIconWhite.svg";
import HeaderStyles from "../../src/Components/Header/Header.module.scss";
import arrowheader from "../../src/assets/Images/Header/headl.png";
import Fade from "react-reveal/Fade";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import "./HeroPageCss.css";

import { SendEvent } from "../utils/SendEvent";

import GradientImage from "../assets/Images/gridentFixMid.png";

let HeaderArray = [
  {
    text: "Home",
    location: "/",
  },
  {
    text: "Our Disruptive Technologies",
    location: "/service",
  },
  {
    text: "Our Services",
    location: "/whiteService",
  },
  {
    text: "Careers",
    location: "/careers",
  },
  {
    text: "Contact us",
    location: "/contact",
  },
];

const VideoBox = React.lazy(() => import("./VideoBox"));

const MainHeroPage = () => {
  const navigate = useNavigate();
  const Rlocation = useLocation();
  const [WhatsappView, setWhatsappView] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollState, setScroll] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [locationdata, setLocationData] = useState("");
  let location = Rlocation.pathname;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const CurrentLocation = useLocation();
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setWhatsappView(true);
      } else setWhatsappView(false);
    });
    document.onkeydown = function (evt) {
      if (evt.key === "Escape") {
        setOpen(false);
      }
    };
  }, []);

  useEffect(() => {
    SendEvent("Home Page Hero Section");
    if (
      location === "/metaVerse" ||
      location === "/home" ||
      location === "/service" ||
      location === "/ArVr" ||
      location === "/blockchain" ||
      location === "/contact"
    ) {
      setColorState(true);
    } else {
      setColorState(false);
    }
  }, [location]);

  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "transparent",
          position: "relative",
          boxShadow: "none",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Paper
          sx={{
            left: "auto",
            right: "auto",
            width: "100%",
            height: "auto",
            minWidth: "100vw",
            transition: "all 1s ",
            bgcolor: "transparent",
            position: "absolute",
            zIndex: 100,
            borderRadius: "0px",
            overflowY: "scroll",
          }}
          elevation={0}
        >
          {!open ? (
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: scrollState ? "60px" : "60px",
                width: "100%",
                transition: "all 1s",
                bgcolor: "transparent",
                borderRadius: "0px",
                mt: scrollState ? "0%" : "1%",
              }}
              elevation={0}
            >
              <Paper
                sx={{
                  width: "2000px",
                  padding: "0rem 2rem",
                  mx: "auto",
                  marginLeft: 0,
                  marginRight: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  background: "transparent",
                }}
                elevation={0}
              >
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  {colorState ? (
                    <Box
                      component="img"
                      src={WhiteLogo}
                      width="45px"
                      height={"auto"}
                      alt={colorState}
                      sx={{ marginTop: "7px" }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={Logo}
                      width="40px"
                      height={"auto"}
                      alt={colorState}
                      sx={{ marginTop: "8px" }}
                    />
                  )}
                </Link>
                {!open ? (
                  <Button
                    sx={{ ...ButtonStyle, mt: 0.75 }}
                    onClick={() => {
                      setOpen(true);
                      SendEvent("Header Menu open button click");
                    }}
                  >
                    {colorState === true ? (
                      <Box
                        component="img"
                        src={OpenButtonWhite}
                        sx={{
                          width: "40%",
                          height: "auto",
                          maxWidth: "35px",
                          backgroundColor: "red",
                          transition: "0.5s all linear",
                          opacity: 0,
                          "&:hover": {
                            transform: "scale(1.1)",
                            opacity: 1,
                          },
                          "&:focus": {
                            background: "transparent",
                          },
                          "&:click": {
                            bgColor: "transparent",
                          },
                          "& .MuiTouchRipple-root span": {
                            backgroundColor: "transparent !important",
                            opacity: 1,
                          },
                          "& .MuiTouchRipple-rippleVisible": {
                            color: "transparent !important",
                          },
                        }}
                        alt="whyChooseUsimg"
                        className={HeaderStyles.MenuIcon}
                      />
                    ) : (
                      <Button
                        src={OpenButton}
                        sx={{
                          mb: 1,
                          transition: "0.4s all linear",
                          mt: {
                            sm: 2,
                            xs: 2,
                          },
                          "&:hover": {
                            background: "transparent",
                            transform: "rotate(360deg)",
                          },
                          "&:focus": {
                            background: "transparent",
                          },
                          "&:click": {
                            bgColor: "transparent",
                          },
                          "& .MuiTouchRipple-root span": {
                            backgroundColor: "transparent !important",
                            opacity: 1,
                          },
                          "& .MuiTouchRipple-rippleVisible": {
                            color: "#005d83 !important",
                          },
                        }}
                        alt="whyChooseUsimg"
                        className={HeaderStyles.MenuIcon}
                      >
                        <img
                          src={OpenButton}
                          style={{
                            width: "40%",
                            height: "auto",
                            maxWidth: "28px",
                          }}
                        />
                      </Button>
                    )}
                  </Button>
                ) : (
                  <Button
                    sx={ButtonStyle}
                    onClick={() => {
                      setOpen(false);
                      SendEvent("Header Close Button Click");
                    }}
                  >
                    Close
                  </Button>
                )}
                <Box
                  sx={{
                    background: "white",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                  }}
                >
                  <Link to={"/contact"}>
                    <Box
                      sx={{
                        ...ContactUsButton,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "1rem",
                        "& img": {
                          transform: "rotate(44deg)",
                          transition: "all 0.6s ease-in-out",
                        },
                        color: "#4E4E4E",
                        "&:hover": {
                          "& img": {
                            transform: "rotate(10deg)",
                            transition: "all 0.6s ease-in-out",
                          },
                          background:
                            "linear-gradient( to left,rgba(209, 51, 232, 1) 0%,  11.84210553765297%,rgba(114, 49, 191, 1) 23.68421107530594%,34.21052619814873%,rgba(64, 25, 132, 1) 44.736841320991516%,55.04385977983475%,rgba(29, 12, 64, 1) 65.35087823867798%,72.14912474155426%,rgba(81, 5, 43, 1) 78.94737124443054%,89.47368562221527%,rgba(192, 1, 81, 1) 100%)",
                          textTransform: "none",
                          backgroundSize: " 100%",
                          backgroundRepeat: "repeat",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                        },
                        fontFamily: "LGRegular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "15px",

                        background: "#4E4E4E",
                        backgroundClip: "text",
                      }}
                    >
                      Get in touch
                      <img
                        src={arrowheader}
                        alt="arrow"
                        style={{
                          height: "auto",
                          width: "10px",
                        }}
                      />
                    </Box>
                  </Link>
                </Box>
              </Paper>
            </Paper>
          ) : null}
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              minHeight: "100vh",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: open ? "0vh" : "-100vh",
              transition: "all 1s ",
              borderRadius: "0px",
              position: open ? "fixed" : "initial",
            }}
            elevation={0}
          >
            <Paper
              sx={{
                width: "98%",
                mx: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
              elevation={0}
            >
              <img
                src={Logo}
                width="40px"
                height="30px"
                style={{ marginTop: "22px" }}
                onClick={() => window.location.reload()}
              />

              <Button sx={ButtonStyle} onClick={() => setOpen(false)}>
                Close
              </Button>
            </Paper>
            <List
              sx={{
                py: 3,
                height: "90vh",
                overflowY: "scroll",
                zIndex: -1,
              }}
            >
              {HeaderArray.map((res, idx) => {
                return (
                  <Link
                    onClick={() => {
                      setOpen(false);
                      setLocationData(res.location);
                    }}
                    className={HeaderStyles.Text}
                    to={res.location}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        mt: 0,
                        pl: 2,
                        cursor: "pointer",
                        borderTop: "1px solid #DBDBDB",
                        borderBottom: "1px solid #DBDBDB",
                        "&:hover": {
                          borderTop: "1px solid #000",
                          borderBottom: "1px solid #000",
                        },
                        fontFamily: "JekoNormal",
                        textAlign: "left",
                        height: {
                          xl: "100px",
                          lg: "100px",
                          md: "100px",
                          sm: "50px",
                          xs: "50px",
                        },
                        pt: 1,
                      }}
                      className={
                        location === res.location
                          ? HeaderStyles.navbarListTextActive
                          : HeaderStyles.navbarListText
                      }
                    >
                      {location === res.location ? (
                        <Typography
                          sx={{
                            fontSize: {
                              xl: "60px",
                              lg: "50px",
                              md: "35px",
                              sm: "25px",
                              xs: "20px",
                            },
                            lineHeight: {
                              xl: "85px",
                              lg: "60px",
                              md: "50px",
                              sm: "35px",
                              xs: "35px",
                            },

                            backgroundImage: `url(${GradientImage})`,
                            backgroundRepeat: "repeat",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                            backgroundSize: "cover",

                            textAlign: "left",
                            height: "100%",
                          }}
                          className={HeaderStyles.neww}
                        >
                          {res?.text}
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            fontSize: {
                              xl: "60px",
                              lg: "50px",
                              md: "35px",
                              sm: "25px",
                              xs: "20px",
                            },
                            lineHeight: {
                              xl: "85px",
                              lg: "60px",
                              md: "50px",
                              sm: "35px",
                              xs: "35px",
                            },
                            "&:hover": {
                              backgroundImage: `url(${GradientImage})`,
                              backgroundRepeat: "no-repeat",
                              backgroundClip: "text",
                              textFillColor: "transparent",
                              backgroundSize: "cover",
                            },
                            textAlign: "left",
                            height: "100%",
                          }}
                          className={HeaderStyles.neww}
                        >
                          {res?.text}
                        </Typography>
                      )}
                    </Box>
                  </Link>
                );
              })}
              <Box sx={{ mt: 3 }}>
                <Typography sx={centerMainText}>
                  Innovative Disruption
                </Typography>
              </Box>
            </List>
          </Paper>
        </Paper>
        {open ? null : (
          <LazyLoad>
            <VideoBox />
          </LazyLoad>
        )}
        <Suspense>
          <Paper
            sx={{
              position: "relative",
              background: "transparent",
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              minHeight: "100vh",
            }}
            elevation={0}
          >
            <Paper
              sx={{
                position: "absolute",
                top: "7%",
                width: "100%",
                bgcolor: "transparent",
              }}
              elevation={0}
            >
              <div className="VideoPositioning">
                <video
                  className="videoTag"
                  autoPlay
                  loop
                  muted
                  alt="mainVideo"
                  style={{
                    height: "100%",
                    minHeight: "85vh",
                    maxHeight: "90vh",
                    width: "100%",
                  }}
                >
                  <source src={UnadaVid} type="video/mp4" alt="mainVideo" />
                </video>
              </div>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Fade top duration={1000}>
                  <h1
                    className="textMainClass"
                    style={{
                      fontFamily: "MBFCanno",
                    }}
                  >
                    REDEFINING TECHNOLOGIES
                  </h1>
                </Fade>
              </Box>
            </Paper>

            <Box
              onClick={() => {
                navigate("/service");
                SendEvent("left explore button click");
              }}
              className="cta cta-left"
              sx={{
                position: "absolute",
                bottom: "59px",
                left: "5%",
                backgroundColor: "transparent",
                fontFamily: "Jeko Bold",
                fontStyle: "normal",
                fontWeight: 400,
                color: "black",
                cursor: "pointer",
                fontSize: {
                  xl: "17px",
                  lg: "15px",
                  md: "15px",
                  sm: "12px",
                  xs: "12px",
                },
                lineHeight: "18px",
                borderRadius: "61px",
                padding: "1rem 2rem",
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
                gap: "14px",
                opacity: 1,
                textTransform: "uppercase",
              }}
            >
              <img
                src={SideArrowImg2}
                style={{ filter: "invert(1)" }}
                alt="arrowImg"
              />
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <span>Explore</span>
              </Box>
            </Box>

            <Box
              onClick={() => {
                navigate("/whiteService");
                SendEvent("right explore button click");
              }}
              className="cta cta-right"
              sx={{
                position: "absolute",
                bottom: "59px",
                right: "5%",
                backgroundColor: "transparent",
                fontFamily: "Jeko Bold",
                fontStyle: "normal",
                fontWeight: 400,
                color: "black",
                cursor: "pointer",
                fontSize: {
                  xl: "17px",
                  lg: "15px",
                  md: "15px",
                  sm: "12px",
                  xs: "12px",
                },
                lineHeight: "18px",
                borderRadius: "61px",
                padding: "1rem 2rem",
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
                gap: "14px",
                opacity: 1,
                textTransform: "uppercase",
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <span>Explore</span>
              </Box>
              <img
                src={SideArrowImg}
                style={{ filter: "invert(1)" }}
                alt="arrowImg"
              />
            </Box>
          </Paper>
        </Suspense>
      </Paper>
    </motion.div>
  );
};

export default MainHeroPage;

const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0 },
};

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const ButtonStyle = {
  fontFamily: "LGRegular",
  textTransform: "none",
  fontSize: { xl: "24px", lg: "24px", md: "23px", sm: "20px", xs: "20px" },
  color: "#393939",
  fontStyle: "normal",
  fontWeight: 400,
  mt: { xl: "15px", lg: "15px", md: "15px", sm: "15px", xs: "25px" },
  width: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  height: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  "&:hover": {
    bgcolor: "transparent",
    textDecoration: "line-through",
  },
  ml: "2.3%",
  "&:focus": {
    background: "transparent",
  },
  "&:click": {
    bgColor: "transparent",
  },
  "& .MuiTouchRipple-root span": {
    backgroundColor: "transparent !important",
    opacity: 1,
  },
  "& .MuiTouchRipple-rippleVisible": {
    color: "transparent !important",
  },
};

const ContactUsButton = {
  width: "137px",
  height: "41px",
  borderRadius: "28px",
  px: 0,
  zIndex: 0,
  border: "0.5px solid #CCCCCC",
  mt: 1,
  justifyContent: "space-evenly",
  cursor: "pointer",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const centerMainText = {
  fontFamily: "Alex Brush",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: { xl: "42px", lg: "42px", md: "40px", sm: "30px", xs: "30px" },
  lineHeight: 2,
  textAlign: "center",
  background:
    "linear-gradient( to left,rgba(209, 51, 232, 1) 0%,  11.84210553765297%,rgba(114, 49, 191, 1) 23.68421107530594%,34.21052619814873%,rgba(64, 25, 132, 1) 44.736841320991516%,55.04385977983475%,rgba(29, 12, 64, 1) 65.35087823867798%,72.14912474155426%,rgba(81, 5, 43, 1) 78.94737124443054%,89.47368562221527%,rgba(192, 1, 81, 1) 100%)",
  textTransform: "none",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};
