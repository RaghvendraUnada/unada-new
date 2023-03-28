import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Stack, Box, Paper, Button, Typography } from "@mui/material";
import OpenButton from "../src/assets/Images/Header/newHeader.svg";
import OpenButtonWhite from "../src/assets/Images/Header/whiteHamberger.svg";
import List from "@mui/material/List";
import HeaderStyles from "../src/Components/Header/Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../src/assets/Images/Header/Logo.png";
import WhiteLogo from "../src/assets/Images/Header/unada-logo.webp";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
import styled from "styled-components";
import "./index.css";
import AnimatedRoutes from "./AnimatedRoutes";
import LoadingScreen from "./views/LoadingScreen";

import ReactGA from "react-ga";
const TRACKING_ID = "UA-12341234-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
import GradientImage from "./assets/Images/gridentFixMidNew.webp";
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
function App() {
  let locationdta = useLocation();
  const [WhatsappView, setWhatsappView] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollState, setScroll] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  const [navfalse, setNavFalse] = useState(false);
  const [locationdata, setLocationData] = useState("");
  let location = window.location.pathname;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");
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

  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* {loading === false ? ( */}
      <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
        <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
          <Stack
            sx={{
              maxWidth: "2000px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative" }}>
              {locationdta.pathname !== "/" ? (
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
                    zIndex: 100000,
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
                          bgcolor: "transparent",
                        }}
                        elevation={0}
                      >
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                          {locationdta.pathname === "/metaVerse" ||
                          locationdta.pathname === "/home" ||
                          locationdta.pathname === "/service" ||
                          locationdta.pathname === "/ArVr" ||
                          locationdta.pathname === "/blockchain" ||
                          locationdta.pathname === "/contact" ? (
                            <Box
                              component="img"
                              src={WhiteLogo}
                              width="45px"
                              height={"auto"}
                              alt={colorState}
                              style={{ marginTop: "7px" }}
                            />
                          ) : (
                            <Box
                              component="img"
                              src={Logo}
                              width="40px"
                              height={"auto"}
                              alt={colorState}
                              style={{ marginTop: "8px" }}
                            />
                          )}
                        </Link>
                        {!open ? (
                          <Box
                            sx={{
                              ...ButtonStyle,
                              mt: 0.75,
                            }}
                            onClick={() => {
                              setOpen(true), setNavFalse(true);
                            }}
                          >
                            {locationdta.pathname === "/metaVerse" ||
                            locationdta.pathname === "/home" ||
                            locationdta.pathname === "/service" ||
                            locationdta.pathname === "/ArVr" ||
                            locationdta.pathname === "/blockchain" ||
                            locationdta.pathname === "/contact" ? (
                              <Box
                                component="img"
                                src={OpenButtonWhite}
                                sx={{
                                  marginBottom: "20px",
                                  mt: {
                                    sm: 0.5,
                                    xs: 0.5,
                                  },
                                  width: {
                                    xl: "50%",
                                    lg: "50%",
                                    md: "50%",
                                    sm: "80%",
                                    xs: "90%",
                                  },
                                  height: "auto",
                                  maxWidth: "35px",
                                  transition: "0.3s all linear",
                                  "&:hover": {
                                    transform: "rotate(360deg)",
                                  },
                                }}
                                alt="whyChooseUsimg"
                                className={HeaderStyles.MenuIcon}
                              />
                            ) : (
                              <Box
                                component="img"
                                sx={{
                                  transition: "0.3s all linear",
                                  "&:hover": {
                                    transform: "rotate(360deg)",
                                  },
                                  width: {
                                    xl: "50%",
                                    lg: "50%",
                                    md: "50%",
                                    sm: "100%",
                                    xs: "100%",
                                  },
                                  height: "auto",
                                  maxWidth: "35px",
                                }}
                                src={OpenButton}
                                alt="whyChooseUsimg"
                                className={HeaderStyles.MenuIcon}
                              />
                            )}
                          </Box>
                        ) : (
                          <Button
                            sx={ButtonStyle}
                            onClick={() => {
                              setNavFalse(true), setOpen(false);
                            }}
                          >
                            Close
                          </Button>
                        )}
                      </Paper>
                    </Paper>
                  ) : null}

                  <Paper
                    sx={{
                      width: "100%",
                      height: "90%",
                      minHeight: "100vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: open ? "0vh" : "-100vh",
                      transition: navfalse ? "all 1s" : "all 0s",
                      borderRadius: "0px",
                      bgcolor: open ? "#fff" : "transparent",
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
                      <Link
                        to={"/"}
                        style={{
                          textDecoration: "none",
                          marginTop: "1px",
                        }}
                      >
                        <Box
                          component="img"
                          src={Logo}
                          width="40px"
                          height={"auto"}
                          style={{ marginTop: "20px" }}
                        />
                      </Link>

                      <Button
                        sx={ButtonStyle}
                        onClick={() => {
                          setOpen(false), setNavFalse(false);
                        }}
                      >
                        Close
                      </Button>
                    </Paper>
                    <List
                      sx={{
                        py: 3,
                        height: "85vh",
                        overflowY: "scroll",
                        zIndex: 1,
                      }}
                    >
                      {HeaderArray.map((res, idx) => {
                        return (
                          <Link
                            onClick={() => {
                              setNavFalse(false);
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
                                      backgroundRepeat: "repeat",
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
                      <Box sx={{ mt: open ? 2.7 : -10.7 }}>
                        <Typography sx={centerMainText}>
                          Innovative Disruption
                        </Typography>
                      </Box>
                    </List>
                  </Paper>
                </Paper>
              ) : null}

              {!open || location === "/" ? (
                <AnimatedRoutes setColorState={setColorState} />
              ) : null}
            </Box>
          </Stack>
        </Paper>
      </motion.div>
      {/* ) : ( */}
      {/* <LoadingScreen /> */}
      {/* )} */}
    </>
  );
}

export default App;

const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
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
  background-image: -webkit-linear-gradient(
    2deg,
    rgba(201, 75, 234, 1) 0%,
    rgba(112, 62, 195, 1),
    rgba(59, 33, 140, 1),
    rgba(26, 16, 66, 1),
    rgba(54, 9, 52, 1),
    rgba(170, 2, 87, 1)
  );

  // background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGRegular;
  font-size: 65px;
  font-weight: 550;
  margin: 0;
  // text-transform: uppercase;
  padding: 0;
  // overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    font-size: 65px;
    lineheight: 75px;
  }
  @media (max-width: 992px) {
    font-size: 25px;
    lineheight: 65px;
  }
  @media (max-width: 768px) {
    fontsize: 25px;
    lineheight: 55px;
  }
  @media (max-width: 576px) {
    fontsize: 23px;
    lineheight: 50px;
  }
  @media (max-width: 320px) {
    fontsize: 23px;
    lineheight: 45px;
  }
`;

const ButtonStyle = {
  fontFamily: "LGRegular",
  textTransform: "none",
  fontSize: { xl: "24px", lg: "24px", md: "23px", sm: "20px", xs: "20px" },
  color: "#393939",
  fontStyle: "normal",
  fontWeight: 400,
  mt: { xl: "17px", lg: "17px", md: "17px", sm: "28px", xs: "34px" },
  width: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  height: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  zIndex: 6,
  cursor: "pointer",
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

const ContactUsText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "17px",
  background: "#4E4E4E",
  backgroundClip: "text",
  "&:hover": {
    background:
      "linear-gradient( to left,rgba(209, 51, 232, 1) 0%,  11.84210553765297%,rgba(114, 49, 191, 1) 23.68421107530594%,34.21052619814873%,rgba(64, 25, 132, 1) 44.736841320991516%,55.04385977983475%,rgba(29, 12, 64, 1) 65.35087823867798%,72.14912474155426%,rgba(81, 5, 43, 1) 78.94737124443054%,89.47368562221527%,rgba(192, 1, 81, 1) 100%)",
    textTransform: "none",
    backgroundSize: " 100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
};

const centerMainText = {
  fontFamily: "Alex Brush",
  fontStyle: "normal",
  fontWeight: 400,
  textAlign: "center",
  fontSize: { xl: "42px", lg: "42px", md: "40px", sm: "30px", xs: "30px" },
  background:
    "linear-gradient(to right,rgba(201, 75, 234, 1) 0%,11.84210553765297%,rgba(112, 62, 195, 1) 23.68421107530594%,34.21052619814873%,rgba(59, 33, 140, 1) 44.736841320991516%,55.04385977983475%,rgba(26, 16, 66, 1) 65.35087823867798%,72.14912474155426%,rgba(54, 9, 52, 1) 78.94737124443054%,89.47368562221527%,rgba(170, 2, 87, 1) 100%)",
  textTransform: "none",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const colorBoxGradientStyle = {
  background:
    "linear-gradient(to right,rgba(201, 75, 234, 1) 0%,11.84210553765297%,rgba(112, 62, 195, 1) 23.68421107530594%,34.21052619814873%,rgba(59, 33, 140, 1) 44.736841320991516%,55.04385977983475%,rgba(26, 16, 66, 1) 65.35087823867798%,72.14912474155426%,rgba(54, 9, 52, 1) 78.94737124443054%,89.47368562221527%,rgba(170, 2, 87, 1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
