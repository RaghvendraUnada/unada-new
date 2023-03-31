import React from "react";
import { useState } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import Applicationimg from "../../assets/Images/Services/Application.webp";
import Websiteimg from "../../assets/Images/Services/Website.webp";
import uiuximg from "../../assets/Images/Services/UIUX.webp";
import ApplicationMobile from "../../assets/Images/Services/ApplicationMobile.webp";
import blackArrowImg from "../../assets/Images/Services/blackArrowImg.svg";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Fade from "react-reveal/Fade";
import selection from "./whiteservice.module.css";

const WhiteServicesPage = () => {
  const navigate = useNavigate();
  const [paper1, setPaper1] = useState(true);
  const [paper2, setPaper2] = useState(true);
  const [paper3, setPaper3] = useState(true);
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  return (
    <motion.div initial="hidden" animate="visible" {...AnimationSettings}>
      <Paper
        elevation={0}
        sx={{ bgcolor: "white", borderRadius: "0px", minHeight: "100vh" }}
        className={selection.invert3}
      >
        <Grid
          container
          sx={{
            background: "white",
            height: "100%",
            minHeight: "100vh",
            borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12} sx={adjGrid}>
            <Paper
              onClick={() => {
                navigate("/application");
              }}
              elevation={0}
              sx={{
                ...ServicePaperStyle,
                background: `url(${Applicationimg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              onMouseOver={() => setPaper1(true)}
              onMouseOut={() => setPaper1(true)}
            >
              {paper1 ? (
                <>
                  <Box sx={ActiveBoxStyles}>
                    <Fade top duration={1000}>
                      <Typography sx={paperTextStyle}>Application</Typography>
                    </Fade>
                    <Typography sx={activePaperText}>
                      We specialize in designing and creating innovative
                      software
                    </Typography>
                    <Link
                      to={"/application"}
                      style={{ textDecoration: "none" }}
                    >
                      <Button sx={ButtonStyle}>
                        <EastSharpIcon fontSize="large" />
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={inActiveboxStyle}>
                    <Typography sx={paperTextStyle}>Application</Typography>

                    <img src={blackArrowImg} alt="nextImg" />
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12} sx={adjGrid}>
            <Paper
              onClick={() => {
                navigate("/web");
              }}
              elevation={0}
              sx={{
                ...ServicePaperStyle,
                background: `url(${Websiteimg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              onMouseOver={() => setPaper2(true)}
              onMouseOut={() => setPaper2(true)}
            >
              {paper2 ? (
                <>
                  <Box sx={ActiveBoxStyles}>
                    <Fade top duration={1000}>
                      <Typography sx={paperTextStyle}>Website</Typography>
                    </Fade>
                    <Typography sx={activePaperText}>
                      Unada specializes in web design, development, and
                      maintenance.
                    </Typography>
                    <Link to={"/web"} style={{ textDecoration: "none" }}>
                      <Button sx={ButtonStyle}>
                        <EastSharpIcon fontSize="large" />
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <Paper>
                  <Box sx={inActiveboxStyle}>
                    <Typography sx={paperTextStyle}>Website</Typography>

                    <img src={blackArrowImg} alt="nextImg" />
                  </Box>
                </Paper>
              )}
            </Paper>
          </Grid>
          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12} sx={adjGrid}>
            <Paper
              onClick={() => {
                navigate("/ui");
              }}
              elevation={0}
              sx={{
                ...ServicePaperStyle,

                background: `url(${uiuximg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              onMouseOver={() => setPaper3(true)}
              onMouseOut={() => setPaper3(true)}
            >
              {paper3 ? (
                <>
                  <Box sx={ActiveBoxStyles}>
                    <Fade top duration={1000}>
                      <Typography sx={paperTextStyle}>UI/UX</Typography>
                    </Fade>
                    <Typography sx={activePaperText}>
                      We specialize in designing intuitive and user-friendly
                      interfaces for websites..
                    </Typography>
                    <Link to={"/ui"} style={{ textDecoration: "none" }}>
                      <Button sx={ButtonStyle}>
                        <EastSharpIcon fontSize="large" />
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={inActiveboxStyle}>
                    <Typography sx={paperTextStyle}>UI/UX</Typography>

                    <img src={blackArrowImg} alt="nextImg" />
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
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
        </Grid>
        {/* MobileView */}
        <Grid
          container
          sx={{
            background: "#fff",
            height: "100%",
            minHeight: "10vh",
            borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "inline",
              xs: "inline",
            },
          }}
        >
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ paddingTop: "10rem" }}
          >
            {click1 ? (
              <Paper
                sx={{
                  ...mobileActivePaper,
                  height: "60%",
                  minHeight: "72vh",
                }}
              >
                <Box
                  onClick={() => {
                    setClick1(false);
                  }}
                >
                  <img
                    src={ApplicationMobile}
                    alt="metaVerseImg"
                    style={{
                      height: "10%",
                      width: "100%",
                      position: "relative",
                    }}
                  />
                  <Box sx={{}}>
                    <Fade top duration={1000}>
                      <Typography sx={mobileActivePapertext}>
                        Application
                      </Typography>
                    </Fade>
                    <Typography sx={mobileActivePaperMetaText}>
                      We specialize in designing and creating innovative
                      software applications for mobile devices.
                      <br />
                    </Typography>
                  </Box>
                </Box>
                <Link
                  to={"/application"}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Button sx={ButtonStyle}>
                    <EastSharpIcon fontSize="large" />
                  </Button>
                </Link>
              </Paper>
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
                    <Typography sx={mobileHeadText}>Application</Typography>
                    <img src={blackArrowImg} alt="nextImg" />
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
                <Paper
                  sx={{
                    ...mobileActivePaper,
                    height: "60%",
                    minHeight: "72vh",
                  }}
                >
                  <Box
                    onClick={() => {
                      setClick2(false);
                    }}
                  >
                    <img
                      src={Websiteimg}
                      alt="metaVerseImg"
                      style={{
                        height: "90%",
                        width: "100%",
                        marginTop: "2rem",
                        position: "relative",
                      }}
                    />
                    <Fade top duration={1000}>
                      <Typography sx={mobileActivePapertext}>
                        Website
                      </Typography>
                    </Fade>
                    <Typography sx={mobileActivePaperMetaText}>
                      We specialize in designing and creating innovative
                      software applications for mobile devices. Whether you have
                      a clear idea of what you want your app to do or you need
                      help conceptualizing and designing a unique solution, we
                      have the expertise to bring your vision to life
                      <br />
                    </Typography>
                  </Box>
                  <Link
                    to={"/web"}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                    onClick={() => {
                      setClick2(true);
                    }}
                  >
                    <Button sx={ButtonStyle}>
                      <EastSharpIcon fontSize="large" />
                    </Button>
                  </Link>
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
                    <Typography sx={mobileHeadText}>Website</Typography>
                    <img src={blackArrowImg} alt="nextImg" />
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
                <Paper
                  sx={{
                    ...mobileActivePaper,
                    height: "60%",
                    minHeight: "72vh",
                  }}
                >
                  <Box
                    onClick={() => {
                      setClick3(false);
                    }}
                  >
                    <img
                      src={uiuximg}
                      alt="metaVerseImg"
                      style={{
                        height: "70%",
                        width: "100%",
                        marginTop: "2rem",
                        position: "relative",
                      }}
                    />
                    <Fade top duration={1000}>
                      <Typography sx={mobileActivePapertext}>UI/UX</Typography>
                    </Fade>
                    <Typography sx={mobileActivePaperMetaText}>
                      We specialize in designing and creating innovative
                      software applications for mobile devices. Whether you have
                      a clear idea of what you want your app to do or you need
                      help conceptualizing and designing a unique solution, we
                      have the expertise to bring your vision to life
                      <br />
                    </Typography>
                  </Box>
                  <Link
                    to={"/ui"}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Button sx={ButtonStyle}>
                      <EastSharpIcon fontSize="large" />
                    </Button>
                  </Link>
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
                    <Typography sx={mobileHeadText}>UI/UX</Typography>
                    <img src={blackArrowImg} alt="nextImg" />
                  </Box>
                </Paper>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
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
  position: "relative",
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
    background: "rgba(29, 29, 29, 0.12)",
  },
  cursor: "pointer",
};
const inActiveboxStyle = {
  position: "absolute",
  bottom: "5%",
  width: "100%",
  display: "flex",
  padding: "2rem",
  alignItems: "baseline",
  justifyContent: "space-between",
};
const ActiveBoxStyles = {
  position: "absolute",
  bottom: "5%",
  padding: "2rem",
};
const ServicePaperStyle = {
  width: "auto",
  cursor: "pointer",

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
  background: "#fff",
  position: "relative",
};
const mobilePaper = {
  height: "auto",
  width: "100%",
  padding: "3rem",
  background: "#fff",
  border: "1px solid rgba(163, 163, 163, 0.3)",
};
const mobileHeadText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "30px",
  lineHeight: "45px",
  letterSpacing: 0.01,

  color: "#000",
};
const activePaperText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,

  fontSize: {
    xl: "2rem",
    lg: "1.6rem",
    md: "1.3rem",
    sm: "1rem",
    xs: "1rem",
  },
  lineHeight: "28pxpx",
  marginTop: "2rem",
  color: "#000",
  opacity: 0.5,
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
  letterSpacing: "0.01px",
  textAlign: "center",
  color: "#000",

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
    xl: "4rem",
    lg: "4rem",
    md: "3.2rem",
    sm: "3.2rem",
    xs: "3rem",
  },
  lineHeight: "45px",
  letterSpacing: "0.01px",
  color: "#000",
};
const mobileActivePaper = {
  border: "1px solid rgba(163, 163, 163, 0.3)",
  textAlign: "center",
  height: "100%",
};
const mobileActivePapertext = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  background:
    "linear-gradient(to right, rgba(211, 37, 230, 1) 0%, 32.67543911933899%, rgba(110, 36, 185, 1) 65.35087823867798%, 82.67543911933899%, rgba(36, 13, 93, 1) 100%);",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: " ",
  fontSize: "35px",
  textAlign: "center",
  letterSpacing: 0.01,
};
const mobileActivePaperMetaText = {
  fontFamily: "LGThin",
  padding: "0.5rem",
  fontStyle: "normal",
  textAlign: "center",
  fontWeight: 400,
  fontSize: {
    sm: "18px",
    xs: "14px",
  },
  lineHeight: {
    sm: "30px",
    xs: "21px",
  },
  color: "black",
};
const ButtonStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  p: 1,
  fontSize: {
    xl: "16px",
    lg: "16px",
    md: "16px",
    sm: "16px",
    xs: "16px",
  },

  padding: "1rem 4rem",
  letterSpacing: 0.01,
  borderRadius: "30px",
  border: "1px black solid",
  color: "#000",

  marginTop: "2rem",
  opacity: 0.5,
  "&:hover": {
    background: "#000",
    color: "#fff",
    opacity: 1,
  },
};
const adjGrid = {
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
  },
};
export default WhiteServicesPage;
