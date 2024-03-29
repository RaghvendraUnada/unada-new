import React, { useEffect } from "react";
import { useState } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import MetaImgServices from "../../assets/Images/Services/Metaverse.webp";
import ArVrimg from "../../assets/Images/Services/ARVR.webp";
import ArVrMobImg from "../../assets/Images/Services/ARVR.webp";
import BlockChainMobImg from "../../assets/Images/Services/Blockchain.webp";
import MobileMetaImg from "../../assets/Images/Services/Metaverse.webp";
import ExploreIcon from "../../assets/Images/Services/ExploreIcon.svg";
import styles from "./Service.module.css";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Fade from "react-reveal/Fade";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
const ServicesPage = () => {
  const navigate = useNavigate();
  const [paper1, setPaper1] = useState(true);
  const [paper2, setPaper2] = useState(true);
  const [paper3, setPaper3] = useState(true);
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [icon1, setIcon1] = useState("White");
  const [icon2, setIcon2] = useState("White");
  const [icon3, setIcon3] = useState("White");

  const [stopText, setStopText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          background: "#000",
          height: "100vh",
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          display: {
            xl: "inherit",
            lg: "inherit",
            md: "inherit",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Grid item xl={1.5} lg={1.5} md={1.5} sm={12} xs={12}>
          <Paper
            elevation={0}
            sx={paperStyle}
            onClick={() => {
              navigate("/");
            }}
          >
            <Box
              sx={{
                width: "100px",
                top: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "50%",
                },
                left: {
                  xl: "47%",
                  lg: "47%",
                  md: "47%",
                  sm: "50%",
                  xs: "50%",
                },
                position: "absolute",
                transform: {
                  xl: "translate(-50%,70%)",
                  lg: "translate(-50%,70%)",
                  md: "translate(-50%,70%)",
                  sm: "translate(-50%,-50%)",
                  xs: "translate(-50%,-50%)",
                },
              }}
            >
              <Typography sx={MetaTextStyle}>Home</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}>
          <Paper
            onClick={() => {
              navigate("/metaVerse");
            }}
            cursor="pointer"
            elevation={0}
            sx={{
              ...ServicePaperStyle,
              background: `url(${MetaImgServices})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 0.5,
              "&:hover": {
                opacity: 1,
              },
            }}
            onMouseOver={() => setPaper1(true)}
            onMouseOut={() => setPaper1(true)}
          >
            {paper1 ? (
              <>
                <Box sx={ActiveBoxStyles}>
                  <Fade top duration={1000}>
                    <Typography sx={paperTextStyle}>Metaverse</Typography>
                  </Fade>
                  <Typography sx={activePaperText}>
                    Imagine a world where anything is possible! At Unada.
                  </Typography>
                  <Link to={"/metaVerse"} style={{ textDecoration: "none" }}>
                    <Box
                      className={styles.BigArrowImg}
                      onMouseOut={() => setIcon1("white")}
                      onMouseOver={() => setIcon1("black")}
                      sx={{
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      <EastSharpIcon fontSize="large" sx={{ color: icon1 }} />
                    </Box>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box sx={inActiveboxStyle}>
                  <Typography sx={paperTextStyle}>Metaverse</Typography>

                  <img src={ExploreIcon} alt="nextImg" />
                </Box>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}>
          <Paper
            onClick={() => {
              navigate("/ArVr");
            }}
            elevation={0}
            sx={{
              ...ServicePaperStyle,
              background: `url(${ArVrimg})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 0.5,
              "&:hover": {
                opacity: 1,
              },
            }}
            onMouseOver={() => {
              setPaper2(true);
            }}
            onMouseOut={() => setPaper2(ture)}
          >
            {paper2 ? (
              <>
                <Box sx={ActiveBoxStyles}>
                  <Fade top duration={1000}>
                    <Typography sx={paperTextStyle}>AR/VR</Typography>
                  </Fade>
                  <Typography sx={activePaperText}>
                    Whether you're a game developer looking to create the next
                    big hit, or trying to curate immersive experiences.
                  </Typography>
                  <Link to={"/ArVr"} style={{ textDecoration: "none" }}>
                    <Box
                      className={styles.BigArrowImg}
                      onMouseOut={() => setIcon2("white")}
                      onMouseOver={() => setIcon2("black")}
                      sx={{
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      <EastSharpIcon fontSize="large" sx={{ color: icon2 }} />
                    </Box>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box sx={inActiveboxStyle}>
                  <Typography sx={paperTextStyle}>AR/VR</Typography>

                  <img src={ExploreIcon} alt="nextImg" />
                </Box>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}>
          <Paper
            onClick={() => {
              navigate("/blockchain");
            }}
            elevation={0}
            sx={{
              ...ServicePaperStyle,
              background: `url(${BlockChainMobImg})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              opacity: 0.5,
              "&:hover": {
                opacity: 1,
              },
            }}
            onMouseOver={() => setPaper3(true)}
            onMouseOut={() => setPaper3(true)}
          >
            {paper3 ? (
              <>
                <Box sx={ActiveBoxStyles}>
                  <Fade top duration={1000}>
                    <Typography sx={paperTextStyle}>Blockchain</Typography>
                  </Fade>
                  <Typography sx={activePaperText}>
                    Our services include custom blockchain and web3 development.
                  </Typography>
                  <Link to={"/blockchain"} style={{ textDecoration: "none" }}>
                    <Box
                      className={styles.BigArrowImg}
                      onMouseOut={() => setIcon3("white")}
                      onMouseOver={() => setIcon3("black")}
                      sx={{
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      <EastSharpIcon fontSize="large" sx={{ color: icon3 }} />
                    </Box>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box sx={inActiveboxStyle}>
                  <Typography sx={paperTextStyle}>Blockchain</Typography>

                  <img src={ExploreIcon} alt="nextImg" />
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* MobileView */}
      <Grid
        container
        sx={{
          background: "#000",
          height: "100vh",
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "inline",
            xs: "inline",
          },
          paddingTop: "7rem",
        }}
      >
        <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {click1 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                {...AnimationSettings}
              >
                <Paper sx={{ ...mobileActivePaper, position: "relative" }}>
                  <Box
                    sx={{ position: "relative" }}
                    onClick={() => {
                      setClick1(false);
                    }}
                  >
                    <img
                      src={MobileMetaImg}
                      alt="metaVerseImg"
                      style={{
                        height: "70%",
                        width: "100%",
                        marginTop: "2rem",
                        position: "relative",
                      }}
                    />
                    <Typography sx={mobileActivePaperMetaText}>
                      <Fade top duration={1000}>
                        <Typography sx={mobileActivePapertext} mb={2}>
                          Metaverse
                        </Typography>
                      </Fade>
                      Imagine a world where anything is possible! At Unada.
                      <br />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "5%",
                      bottom: "6.5%",
                    }}
                  >
                    <Link
                      to={"/metaVerse"}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        className={styles.BigArrowImgmb}
                        onMouseOut={() => setIcon1("white")}
                        onMouseOver={() => setIcon1("black")}
                        sx={{
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        <EastSharpIcon fontSize="large" sx={{ color: icon1 }} />
                      </Box>
                    </Link>
                  </Box>
                </Paper>
              </motion.div>
            ) : (
              <>
                <Paper
                  sx={mobilePaper}
                  onClick={() => {
                    setClick1(true);
                    setClick2(false);
                    setClick3(false);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={mobileHeadText}>Metaverse</Typography>
                    <img src={ExploreIcon} alt="nextImg" />
                  </Box>
                </Paper>
              </>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {click2 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                {...AnimationSettings}
              >
                <Paper sx={{ ...mobileActivePaper, position: "relative" }}>
                  <Box
                    sx={{ position: "relative" }}
                    onClick={() => {
                      setClick2(false);
                    }}
                  >
                    <img
                      src={ArVrMobImg}
                      alt="metaVerseImg"
                      style={{
                        height: "80%",
                        width: "100%",
                        marginTop: "2rem",
                        position: "relative",
                      }}
                    />
                    {stopText ? (
                      <Typography sx={mobileActivePaperMetaText}>
                        <Fade top duration={1000}>
                          <Typography sx={mobileActivePapertext} mb={2}>
                            AR/VR
                          </Typography>
                        </Fade>
                        Whether you're a game developer looking to create the
                        next big hit, or trying to curate immersive experiences.
                        <br />
                      </Typography>
                    ) : null}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "5%",
                      bottom: "6.5%",
                    }}
                  >
                    <Link
                      to={"/ArVr"}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        className={styles.BigArrowImgmb}
                        onMouseOut={() => setIcon2("white")}
                        onMouseOver={() => setIcon2("black")}
                        sx={{
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        <EastSharpIcon fontSize="large" sx={{ color: icon2 }} />
                      </Box>
                    </Link>
                  </Box>
                </Paper>
              </motion.div>
            ) : (
              <>
                <Paper
                  sx={mobilePaper}
                  onClick={() => {
                    setClick1(false);
                    setClick2(true);
                    setClick3(false);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={mobileHeadText}>AR/VR</Typography>
                    <img src={ExploreIcon} alt="nextImg" />
                  </Box>
                </Paper>
              </>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {click3 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                {...AnimationSettings}
              >
                <Paper sx={{ ...mobileActivePaper, position: "relative" }}>
                  <Box
                    sx={{ position: "relative" }}
                    onClick={() => {
                      setClick3(false);
                    }}
                  >
                    <img
                      src={BlockChainMobImg}
                      alt="metaVerseImg"
                      style={{
                        height: "80%",
                        width: "100%",
                        marginTop: "2rem",
                        position: "relative",
                      }}
                    />
                    {stopText ? (
                      <Typography sx={mobileActivePaperMetaText}>
                        <Fade top duration={1000}>
                          <Typography sx={mobileActivePapertext} mb={2}>
                            Blockchain
                          </Typography>
                        </Fade>
                        Our services include custom blockchain and web3
                        development.
                        <br />
                      </Typography>
                    ) : null}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "5%",
                      bottom: "6.5%",
                    }}
                  >
                    <Link
                      to={"/blockchain"}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        className={styles.BigArrowImgmb}
                        onMouseOut={() => setIcon3("white")}
                        onMouseOver={() => setIcon3("black")}
                        sx={{
                          "&:hover": {
                            color: "black",
                          },
                        }}
                      >
                        <EastSharpIcon fontSize="large" sx={{ color: icon3 }} />
                      </Box>
                    </Link>
                  </Box>
                </Paper>
              </motion.div>
            ) : (
              <>
                <Paper
                  sx={mobilePaper}
                  onClick={() => {
                    setClick1(false);
                    setClick2(false);
                    setClick3(true);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={mobileHeadText}>Blockchain</Typography>
                    <img src={ExploreIcon} alt="nextImg" />
                  </Box>
                </Paper>
              </>
            )}
          </Grid>
        </motion.div>
      </Grid>
    </React.Fragment>
  );
};

const AnimationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.9 },
};
const paperStyle = {
  width: "auto",

  height: {
    xl: "100vh",
    lg: "100vh",
    md: "100vh",
    sm: "10vh",
    xs: "10vh",
  },
  borderRight: "1px solid rgba(163, 163, 163, 0.3)",
  borderBottom: {
    xl: "1px solid rgba(163, 163, 163, 0.3)",
    lg: "1px solid rgba(163, 163, 163, 0.3)",
    md: "1px solid rgba(163, 163, 163, 0.3)",
    sm: "1px solid rgba(163, 163, 163, 0.3)",
    xs: "1px solid rgba(163, 163, 163, 0.3)",
  },
  background: "black",
  position: "relative",
  opacity: 0.5,
  "&:hover": {
    background: "#0f0f0f",
    cursor: "pointer",
    opacity: 1,
  },
};

const inActiveboxStyle = {
  position: "absolute",
  width: "100%",
  bottom: "5%",
  display: "flex",
  padding: "2rem",
  alignItems: "baseline",
  justifyContent: "space-between",
};
const ActiveBoxStyles = {
  position: "absolute",
  bottom: "5%",
  padding: "2rem",
  cursor: "pointer",
};
const ServicePaperStyle = {
  width: "auto",
  objectFit: "cover",
  minHeight: {
    xl: "100vh",
    lg: "100vh",
    md: "100vh",
    sm: "100vh",
    xs: "100vh",
  },
  borderRight: "1px solid rgba(163, 163, 163, 0.3)",
  borderBottom: {
    xl: "1px solid rgba(163, 163, 163, 0.3)",
    lg: "1px solid rgba(163, 163, 163, 0.3)",
    md: "1px solid rgba(163, 163, 163, 0.3)",
    sm: "1px solid rgba(163, 163, 163, 0.3)",
    xs: "1px solid rgba(163, 163, 163, 0.3)",
  },
  position: "relative",
  opacity: 0.5,
};
const mobilePaper = {
  width: "auto",
  padding: "3rem",
  background: "#000000",
  border: "1px solid #191919",
};
const mobileHeadText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "30px",
  lineHeight: "45px",
  letterSpacing: 0.01,

  color: "#FFFFFF",
};
const activePaperText = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "26px",
  marginTop: "2rem",
  color: "rgba(255, 255, 255, 0.8)",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
const MetaTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "10rem",
    lg: "9.5rem",
    md: "9rem",
    sm: "8rem",
    xs: "5rem",
  },
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
  letterSpacing: "0.01px",
  textAlign: "center",
  color: "rgba(255, 255, 255, 0.2)",

  opacity: 0.5,
  transform: {
    xl: "rotate(-90deg)",
    lg: "rotate(-90deg)",
    md: "rotate(-90deg)",
    sm: "rotate(0deg)",
    xs: "rotate(0deg)",
  },
};

const paperTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4.2rem",
    lg: "4.2rem",
    md: "3.7rem",
    sm: "3.2rem",
    xs: "3rem",
  },
  lineHeight: "45px",
  letterSpacing: "0.01px",
  color: " #FFFFFF",
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
const mobileActivePaper = {
  background: "black",
  border: "1px solid #191919",
  textAlign: "center",
  padding: { xl: "2rem", lg: "2rem", md: "2rem", sm: "1rem", xs: "0rem" },
};
const mobileActivePapertext = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  background: "linear-gradient(90deg, #1488CC 0%, #2B32B2 100%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontSize: "35px",
  lineHeight: "45px",
  textAlign: "left",
  letterSpacing: 0.01,
};
const mobileActivePaperMetaText = {
  fontFamily: "LGRegular",
  padding: "2rem",
  fontStyle: "normal",
  textAlign: "justify",
  fontWeight: 400,
  fontSize: {
    sm: "35px",
    xs: "15px",
  },
  lineHeight: {
    sm: "42px",
    xs: "21px",
  },
  color: "white",
  position: "absolute",
  top: "68%",
};

export default ServicesPage;
