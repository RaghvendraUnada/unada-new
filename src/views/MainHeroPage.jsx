import React, { useEffect, lazy, Suspense, useState } from "react";
// import UnadaVid from "../assets/UnadaBGvid.mp4";
import UnadaVid from "../assets/newAnimationVideo.mp4";
import { Paper, Box, Button, Typography } from "@mui/material";
import "../Components/css/HomeStyle.css";
import { motion } from "framer-motion";
import SideArrowImg from "../assets/Images/Home/SideArrowImg.svg";
import SideArrowImg2 from "../assets/Images/Home/SideArrowImg2.svg";
import { useNavigate, Navigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Logo from "../../src/assets/Images/Header/Logo.png";
import WhiteLogo from "../../src/assets/Images/Header/unada-logo.png";
import Close from "../../src/assets/Images/Header/CloseButton.svg";
import OpenButton from "../../src/assets/Images/Header/newHeader.svg";
import OpenButtonWhite from "../../src/assets/Images/Header/MenuIconWhite.svg";
import HeaderStyles from "../../src/Components/Header/Header.module.scss";
import arrowheader from "../../src/assets/Images/Header/headl.png";
import Fade from "react-reveal/Fade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { keyframes } from "styled-components";
import styled from "styled-components";
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

  const [WhatsappView, setWhatsappView] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollState, setScroll] = useState(false);
  const [colorState, setColorState] = useState(false);
  // const navigate = useNavigate();
  const [locationdata, setLocationData] = useState("");
  let location = window.location.pathname;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const CurrentLocation = useLocation();
  const [cursorVariant, setCursorVariant] = useState("default");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setWhatsappView(true);
    } else setWhatsappView(false);
  });

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
  document.onkeydown = function (evt) {
    if (evt.key === "Escape") {
      setOpen(false);
    }
  };
  return (
    <motion.div
      initial={{ width: "100%", opacity: 0 }}
      animate={{
        width: "100%",
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      transition={{
        ease: "easeInOut",
        duration: "1s",
      }}
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 2 }}
      // exit={{ opicity: 1 }}
    >
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
                // background: "red",
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
                  // bgcolor: "transparent",
                  background: "transparent",
                }}
                elevation={0}
              >
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  {colorState ? (
                    <img
                      src={WhiteLogo}
                      width="45px"
                      height={"auto"}
                      alt={colorState}
                      style={{ marginTop: "7px" }}
                    />
                  ) : (
                    <img
                      src={Logo}
                      width="40px"
                      height={"auto"}
                      alt={colorState}
                      style={{ marginTop: "8px" }}
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
                          width: "90%",
                          height: "auto",
                          maxWidth: "35px",
                          // bgcolor: "red",
                          transition: "0.3s all linear",
                          opacity: 0,
                          "&:hover": {
                            // bgcolor: "red",
                            transform: "scale(1.15)",
                            opacity: 1,
                          },
                        }}
                        alt="whyChooseUsimg"
                        className={HeaderStyles.MenuIcon}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={OpenButton}
                        sx={{
                          width: "90%",
                          height: "auto",
                          maxWidth: "28px",
                          transition: "0.3s all linear",
                          "&:hover": {
                            // bgcolor: "red",
                            // transform: "scale(1.15)",
                            transform: "rotate(360deg)",
                          },
                        }}
                        alt="whyChooseUsimg"
                        className={HeaderStyles.MenuIcon}
                      />
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
                          // on hover rotate image
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
              // opacity : open ? 1 :
              transition: "all 1s ",
              borderRadius: "0px",
              // background: "red",
              position: open ? "fixed" : "initial",
            }}
            elevation={0}
          >
            <Paper
              sx={{
                width: "95%",
                mx: "auto",
                display: "flex",
                justifyContent: "space-between",
                // bgcolor: "transparent",
              }}
              elevation={0}
            >
              {/* <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              > */}
              <img
                src={Logo}
                width="40px"
                height={"auto"}
                style={{ marginTop: "30px" }}
              />
              {/* </Link> */}

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
                console.log(location === res.location, "------->");
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
                        // ...colorBoxGradientStyle,
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
                              xl: "72px",
                              lg: "60px",
                              md: "50px",
                              sm: "35px",
                              xs: "35px",
                            },
                            // "&:hover": {
                            backgroundImage: `url(${GradientImage})`,
                            backgroundRepeat: "repeat",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                            backgroundSize: "cover",
                            // },
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
                              xl: "72px",
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
              <div
                // sx={{
                //   position: "relative",
                //   width: {
                //     xl: "1000px",
                //     lg: "1000px",
                //     md: "900px",
                //     sm: "850px",
                //     xs: "700px",
                //   },
                //   ml: {
                //     xl: "auto",
                //     lg: "auto",
                //     md: "auto",
                //     sm: "0%",
                //     xs: "-60%",
                //   },
                //   mr: "auto",
                // }}
                className="VideoPositioning"
              >
                <video
                  className="videoTag"
                  autoPlay
                  loop
                  muted
                  style={{
                    height: "100%",
                    minHeight: "90vh",
                    maxHeight: "90vh",
                    width: "100%",
                  }}
                >
                  <source src={UnadaVid} type="video/mp4" />
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
                      // lineHeight: "70px",
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
              <span>Explore</span>
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
              <span>Explore</span>

              <img
                src={SideArrowImg}
                style={{ filter: "invert(1)" }}
                // autoPlay
                // muted
                // loop
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

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
// const AnimatedGradientText = styled.h1`
//   background-image: -webkit-linear-gradient(
//     2deg,
//     rgba(201, 75, 234, 1) 0%,
//     rgba(112, 62, 195, 1),
//     rgba(59, 33, 140, 1),
//     rgba(26, 16, 66, 1),
//     rgba(54, 9, 52, 1),
//     rgba(170, 2, 87, 1)
//   );
//   background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -webkit-animation: ${hue} 10s infinite linear;
//   font-family: LGRegular;
//   font-size: 65px;
//   font-weight: 550;
//   margin: 0;
//   // text-transform: uppercase;
//   padding: 0;
//   // overflow-wrap: break-word;
//   text-rendering: optimizelegibility;
//   -moz-osx-font-smoothing: grayscale;
//   @media (max-width: 1200px) {
//     font-size: 65px;
//     lineheight: 75px;
//   }
//   @media (max-width: 992px) {
//     font-size: 25px;
//     lineheight: 65px;
//   }
//   @media (max-width: 768px) {
//     lineheight: 55px;
//   }
//   @media (max-width: 576px) {
//     lineheight: 50px;
//   }
//   @media (max-width: 320px) {
//     lineheight: 45px;
//     font-size: 10px;
//   }
// `;

const ButtonStyle = {
  fontFamily: "LGRegular",
  textTransform: "none",
  fontSize: { xl: "24px", lg: "24px", md: "23px", sm: "20px", xs: "20px" },
  color: "#393939",
  fontStyle: "normal",
  fontWeight: 400,
  mt: { xl: "17px", lg: "17px", md: "17px", sm: "17px", xs: "25px" },
  width: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  height: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  "&:hover": {
    bgcolor: "transparent",
    textDecoration: "line-through",
  },
  ml: "2.3%",
};
const LinkStyles = {
  textDecoration: "none",
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
const colorBoxGradientStyle = {
  "&:hover": {
    backgroundImage: `url(${GradientImage})`,
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    textFillColor: "transparent",
    backgroundSize: "contain",
    WebkitTextFillColor: "transparent",
    opacity: 1,
  },
};
