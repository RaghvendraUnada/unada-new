import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Stack, Box, Paper, Button, Typography } from "@mui/material";
import Close from "../src/assets/Images/Header/CloseButton.svg";
import OpenButton from "../src/assets/Images/Header/MenuIcon.svg";
import OpenButtonWhite from "../src/assets/Images/Header/MenuIconWhite.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HeaderStyles from "../src/Components/Header/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import arrowheader from "../src/assets/Images/Header/headl.png";
// import { HiArrowRight } from "react-icons/hi";
import Logo from "../src/assets/Images/Header/Logo.png";
import WhiteLogo from "../src/assets/Images/Header/unada-logo.png";
import WhatsappIcon from "./assets/Images/WhatsappIcon.png";

import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
import styled from "styled-components";

import { Scrollbars } from "react-custom-scrollbars";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  let locationdta = useLocation();
  const [WhatsappView, setWhatsappView] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollState, setScroll] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  // const navigate = useNavigate();
  const [locationdata, setLocationData] = useState("");
  let location = window.location.pathname;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setWhatsappView(true);
    } else setWhatsappView(false);
  });

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "green",
      mixBlendMode: "normal",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, []);

  return (
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
          {/* <BrowserRouter> */}
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
                        onClick={() => setOpen(true)}
                      >
                        {locationdta.pathname === "/metaVerse" ||
                        locationdta.pathname === "/home" ||
                        locationdta.pathname === "/service" ||
                        locationdta.pathname === "/ArVr" ||
                        locationdta.pathname === "/blockchain" ||
                        locationdta.pathname === "/contact" ? (
                          <img
                            src={OpenButtonWhite}
                            style={{
                              width: "90%",
                              height: "auto",
                              maxWidth: "35px",
                            }}
                            alt="whyChooseUsimg"
                            className={HeaderStyles.MenuIcon}
                          />
                        ) : (
                          <img
                            src={OpenButton}
                            style={{
                              width: "90%",
                              height: "auto",
                              maxWidth: "28px",
                            }}
                            alt="whyChooseUsimg"
                            className={HeaderStyles.MenuIcon}
                          />
                        )}
                      </Button>
                    ) : (
                      <Button sx={ButtonStyle} onClick={() => setOpen(false)}>
                        <img
                          src={Close}
                          alt="Close"
                          style={{
                            width: "90%",
                            height: "auto",
                            maxWidth: "35px",
                          }}
                        />
                      </Button>
                    )}
                    <Link to={"/contact"}>
                      <Box
                        sx={{
                          ...ContactUsButton,
                          background: "white",
                          fontFamily: "SF Pro Display",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#4E4E4E",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          px: "1rem",
                          "& img": {
                            transform: "rotate(44deg)",
                            transition: "all 0.6s ease-in-out",
                          },
                          "&:hover": {
                            background: "rgba(255, 255, 255, 0.8)",
                            backgroundImage:
                              "-webkit-gradient( linear, left top, right bottom, color-stop(0, #3b5998), color-stop(1, #fff))",
                            color: "transparent",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            // on hover rotate image
                            "& img": {
                              transform: "rotate(10deg)",
                              transition: "all 0.6s ease-in-out",
                            },
                          },
                        }}
                      >
                        Get in touch
                        <img
                          src={arrowheader}
                          alt="arrow"
                          style={{
                            height: "auto",
                            width: "10px",
                            marginLeft: "5px",
                            marginBottom: "-2px",
                            // transform: "rotate(44deg)",
                          }}
                        />
                      </Box>
                    </Link>
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
                  transition: "all 1s ",
                  borderRadius: "0px",
                  bgcolor: open ? "#fff" : "transparent",
                }}
                elevation={0}
              >
                <Paper
                  sx={{
                    width: "95%",
                    mx: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "transparent",
                  }}
                  elevation={0}
                >
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      margin: "auto",
                      marginLeft: "auto",
                      paddingLeft: "74px",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src={Logo}
                      width="40px"
                      height={"auto"}
                      style={{ marginTop: "10px" }}
                    />
                  </Link>

                  <Button sx={ButtonStyle} onClick={() => setOpen(false)}>
                    <img
                      src={Close}
                      alt="Close"
                      style={{
                        width: "75%",
                        height: "auto",
                        marginTop: "10px",
                        maxWidth: "22px",
                      }}
                    />
                  </Button>
                </Paper>
                <List sx={{ py: 5, height: "80vh", overflowY: "scroll" }}>
                  <ListItem
                    sx={{
                      mt: 1,
                      cursor: "pointer",
                      borderTop: "1px solid #DBDBDB",
                      borderBottom: "1px solid #DBDBDB",
                      "&:hover": {
                        borderTop: "1px solid #000",
                        borderBottom: "1px solid #000",
                      },
                    }}
                    className={HeaderStyles.Text}
                  >
                    <Link
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={
                        location === "/"
                          ? HeaderStyles.navbarListTextActive
                          : HeaderStyles.navbarListText
                      }
                      to="/"
                      style={{ margin: "auto" }}
                    >
                      {location === "/" ? (
                        <AnimatedGradientText>Home</AnimatedGradientText>
                      ) : (
                        "Home"
                      )}
                    </Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      // mt: 1,
                      cursor: "pointer",
                      borderBottom: "1px solid #DBDBDB",
                      "&:hover": {
                        borderBottom: "1px solid #000",
                        borderTop: "1px solid #000",
                      },
                    }}
                  >
                    <Link
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={
                        location === "/careers"
                          ? HeaderStyles.navbarListTextActive
                          : HeaderStyles.navbarListText
                      }
                      to="/careers"
                      style={{ margin: "auto" }}
                    >
                      {location === "/careers" ? (
                        <AnimatedGradientText>Careers</AnimatedGradientText>
                      ) : (
                        "Careers"
                      )}
                    </Link>
                  </ListItem>
                  <ListItem
                    sx={{
                      // mt: 1,
                      cursor: "pointer",
                      borderBottom: "1px solid #DBDBDB",
                      "&:hover": {
                        borderBottom: "1px solid #000",
                        borderTop: "1px solid #000",
                      },
                    }}
                  >
                    <Link
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={
                        location === "/contact"
                          ? HeaderStyles.navbarListTextActive
                          : HeaderStyles.navbarListText
                      }
                      to="/contact"
                      style={{ margin: "auto" }}
                    >
                      {location === "/contact" ? (
                        <AnimatedGradientText>Contact us</AnimatedGradientText>
                      ) : (
                        "Contact us"
                      )}
                    </Link>
                  </ListItem>
                </List>
              </Paper>
            </Paper>
          ) : null}

          {!open ? <AnimatedRoutes setColorState={setColorState} /> : null}
          {/* </BrowserRouter> */}
        </Box>
        {locationdta.pathname === "/home" ||
        locationdta.pathname === "/whiteService" ||
        locationdta.pathname === "/service" ||
        open ? null : (
          <Footer />
        )}
      </Stack>

      <motion.div
        className="whatsappicon"
        style={{
          marginRight: WhatsappView ? "0px" : "-100px",
          transition: "all 1s ease-in-out",
        }}
      >
        <Box
          sx={{
            width: "40px",
            cursor: "pointer",
            background: "white",
            borderRadius: "20px",
            height: "40px",
            border: "none",
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FaArrowAltCircleUp
            fill="black"
            size={"107%"}
            height={"40px"}
            style={{
              marginTop: "-1px",
              marginLeft: "-1.5px",
            }}
          />
        </Box>
      </motion.div>
    </Paper>
  );
}

export default App;

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
  font-weight: 500;
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
    lineheight: 55px;
  }
  @media (max-width: 576px) {
    lineheight: 50px;
  }
  @media (max-width: 320px) {
    lineheight: 45px;
  }
`;

const ButtonStyle = {
  color: "black",
  fontFamily: "Inter",
  mt: "07px",
  fontSize: "12px",
  width: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  height: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  "&:hover": {
    bgcolor: "transparent",
  },
  ml: "2.3%",
};
const LinkStyles = {
  textDecoration: "none",
};

const ContactUsButton = {
  width: "137px",
  height: "41px",
  // background: " grey",
  // boxShadow: "0px 0px 3px rgba(51, 211, 212, 0.18)",
  borderRadius: "28px",
  // display: "flex",
  px: 0,
  zIndex: 0,
  border: "0.5px solid #CCCCCC",
  mt: 1,
  justifyContent: "space-evenly",
  cursor: "pointer",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  // display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
  // boxShadow: "10px 10px 10px 10px black",
  // WebkitBoxShadow: "4px 4px 20px -1px rgba(0,0,0,0.11)",
  // MozBoxShadow: "4px 4px 20px -1px rgba(0,0,0,0.11)",
  // boxShadow: "4px 4px 20px -1px rgba(0,0,0,0.11)",
};

const ContactUsText = {};
