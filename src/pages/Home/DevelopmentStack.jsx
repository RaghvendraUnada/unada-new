import { Paper, Typography, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./DevStack.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Fade from "react-reveal/Fade";
import "./home.module.css";

const DevelopmentStack = () => {
  const [numberOne, setNumberOne] = useState(1);
  const [boxtextOne, setBoxtextOne] = useState("Application Development");
  const [boxTitle, setBoxTitle] = useState("Application Development");
  const [Click1, setClick1] = useState(true);
  const [Click2, setClick2] = useState(false);
  const [Click3, setClick3] = useState(false);
  const [Click4, setClick4] = useState(false);
  const [Click5, setClick5] = useState(false);
  const [Click6, setClick6] = useState(false);
  const [boxDesc, setDesc] = useState(
    "We specialize in designing and creating innovative software applications for mobile devices. Whether you have a clear idea of what you want your app to do or you need help conceptualizing and designing a unique solution, we have the expertise to bring your vision to life."
  );
  const [url, setUrl] = useState("/application");

  const [icon1, setIcon1] = useState("#9D9D9D");
  const [border, setBorder] = useState("");

  const FunctionOne = (id, text, title, desc, url) => {
    setNumberOne(id);
    setBoxtextOne(text);
    setBoxTitle(text);
    setDesc(desc);
    setUrl(url);
  };

  const DataArray = [
    {
      id: 1,
      text: "Application Development",
      title: "Ultra-flexible logistics",
      desc: "We specialize in designing and creating innovative software applications for mobile devices. Whether you have a clear idea of what you want your app to do or you need help conceptualizing and designing a unique solution, we have the expertise to bring your vision to life.",
      url: "/application",
    },
    {
      id: 2,
      text: "Website Development",
      title: "Ultra-flexible logistics",
      desc: "Unada specializes in web design, development, and maintenance. Our team of experienced developers, designers, and project managers can help your business create a powerful online presence be it in the form e-commerce solutions or custom development.",
      url: "/web",
    },
    {
      id: 3,
      text: "UI / UX Designing",
      title: "Ultra-flexible logistics",
      desc: "We specialize in designing intuitive and user-friendly interfaces for websites, applications, and other digital products. Our team of experienced designers and researchers are experts in creating user experiences that are both functional and aesthetically pleasing.",
      url: "/ui",
    },
    {
      id: 4,
      text: "Metaverse",
      title: "Ultra-flexible logistics",
      desc: "Imagine a world where anything is possible! At Unada, we create immersive virtual worlds for users to explore and customize. Our team of experienced developers and designers is passionate about creating the most engaging virtual experiences possible.",
      url: "/Metaverse",
    },
    {
      id: 5,
      text: "AR / VR",
      title: "Ultra-flexible logistics",
      desc: "Whether you're a game developer looking to create the next big hit, a business owner looking for a unique way to engage with customers, or just someone who loves exploring new worlds, Unada’s AR/VR has something for you. We offer a range of services, including custom AR and VR development.",
      url: "/arvr",
    },
    {
      id: 6,
      text: "Blockchain",
      title: "Ultra-flexible logistics",
      desc: "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations.",
      url: "/blockchain",
    },
  ];

  return (
    <React.Fragment>
      <Paper
        sx={{
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
          height: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "relative",
        }}
        elevation={0}
      >
        <Grid container>
          <Grid item xl={6} lg={6} md={6}>
            <OpenDetails title={boxTitle} desc={boxDesc} url={url} />
          </Grid>
          {DataArray.map((res, idx) => {
            if (res.id) {
              return (
                <Grid
                  key={idx}
                  item
                  xl={1}
                  lg={1}
                  md={1}
                  onClick={() =>
                    FunctionOne(res.id, res.text, res.title, res.desc, res.url)
                  }
                >
                  <Paper
                    elevation={0}
                    sx={paperStyle}
                    className={styles.DevStackPaper}
                  >
                    <Box sx={PaperBoxStyle}>
                      <Typography
                        sx={{
                          ...TransformedText,
                          color: res.id === numberOne ? "#000000" : "#dddddd",
                          marginBottom: "-20px",
                        }}
                        className={styles.Text}
                      >
                        <Typography
                          sx={{
                            ...TransformedText,
                            color: res.id === numberOne ? "#000000" : "#dddddd",
                            width: "20px",
                            minWidth: "20px",
                            maxWidth: "20px",
                            mb: "-40px",
                            ml: "-60px",
                            transform: "rotate(90deg)",
                          }}
                          className={styles.Text}
                        >
                          {res.id}
                        </Typography>
                        {res.text}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            }
          })}
        </Grid>
      </Paper>
      {/* Mobile View */}
      <Paper
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click1 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>1</Typography>
                    <Typography sx={ServiceText}>
                      Application Development
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "3rem" }}>
                    <Fade top duration={1000}>
                      <Typography sx={verticalText}>
                        Application Development
                      </Typography>
                    </Fade>
                    <Typography sx={paperTextStyle1}>
                      We specialize in designing and creating innovative
                      software applications for mobile devices. Whether you have
                      a clear idea of what you want your app to do or you need
                      help conceptualizing and designing a unique solution, we
                      have the expertise to bring your vision to life.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="application">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{ opacity: 0.5, cursor: "pointer" }}
                onClick={() => {
                  setClick1(true);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                  setClick5(false);
                  setClick6(false);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography sx={NumTextStyle}>1</Typography>
                  <Typography sx={ServiceText}>
                    Application Development
                  </Typography>
                </Box>
              </Paper>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click2 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>2</Typography>
                    <Typography sx={ServiceText}>
                      Website Development
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "3rem" }}>
                    <Typography sx={verticalText}>
                      Website Development
                    </Typography>
                    <Typography sx={paperTextStyle1}>
                      Unada specializes in web design, development, and
                      maintenance. Our team of experienced developers,
                      designers, and project managers can help your business
                      create a powerful online presence be it in the form
                      e-commerce solutions or custom development.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="web">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{ opacity: 0.5, cursor: "pointer" }}
                onClick={() => {
                  setClick1(false);
                  setClick2(true);
                  setClick3(false);
                  setClick4(false);
                  setClick5(false);
                  setClick6(false);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography sx={NumTextStyle}>2</Typography>
                  <Typography sx={ServiceText}>Website Development</Typography>
                </Box>
              </Paper>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click3 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>3</Typography>
                    <Typography sx={ServiceText}>UI / UX Designing</Typography>
                  </Box>
                  <Box sx={{ padding: "3rem" }}>
                    <Typography sx={verticalText}>UI / UX Designing</Typography>
                    <Typography sx={paperTextStyle1}>
                      We specialize in designing intuitive and user-friendly
                      interfaces for websites, applications, and other digital
                      products. Our team of experienced designers and
                      researchers are experts in creating user experiences that
                      are both functional and aesthetically pleasing.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="ui">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{ opacity: 0.5, cursor: "pointer" }}
                onClick={() => {
                  setClick1(false);
                  setClick2(false);
                  setClick3(true);
                  setClick4(false);
                  setClick5(false);
                  setClick6(false);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography sx={NumTextStyle}>3</Typography>
                  <Typography sx={ServiceText}>UI / UX Designing</Typography>
                </Box>
              </Paper>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click4 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>4</Typography>
                    <Typography sx={ServiceText}>Metaverse</Typography>
                  </Box>
                  <Box sx={{ padding: "3rem" }}>
                    <Typography sx={verticalText}>Metaverse</Typography>
                    <Typography sx={paperTextStyle1}>
                      Imagine a world where anything is possible! At Unada, we
                      create immersive virtual worlds for users to explore and
                      customize. Our team of experienced developers and
                      designers is passionate about creating the most engaging
                      virtual experiences possible.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="metaVerse">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{ opacity: 0.5, cursor: "pointer" }}
                onClick={() => {
                  setClick1(false);
                  setClick2(false);
                  setClick3(false);
                  setClick4(true);
                  setClick5(false);
                  setClick6(false);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography sx={NumTextStyle}>4</Typography>
                  <Typography sx={ServiceText}>Metaverse</Typography>
                </Box>
              </Paper>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click5 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>5</Typography>
                    <Typography sx={ServiceText}>AR / VR</Typography>
                  </Box>

                  <Box sx={{ padding: "3rem" }}>
                    <Typography sx={verticalText}>AR / VR</Typography>

                    <Typography sx={paperTextStyle1}>
                      Whether you're a game developer looking to create the next
                      big hit, a business owner looking for a unique way to
                      engage with customers, or just someone who loves exploring
                      new worlds, Unada’s AR/VR has something for you. We offer
                      a range of services, including custom AR and VR
                      development.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="arvr">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{ opacity: 0.5, cursor: "pointer" }}
                onClick={() => {
                  setClick1(false);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                  setClick5(true);
                  setClick6(false);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography sx={NumTextStyle}>5</Typography>
                  <Typography sx={ServiceText}>AR / VR</Typography>
                </Box>
              </Paper>
            )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {Click6 ? (
              <>
                <Paper
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      padding: "2rem",
                      justifyContent: "start",
                      gap: "5rem",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Typography sx={NumTextStyle}>6</Typography>
                    <Typography sx={ServiceText}>Blockchain</Typography>
                  </Box>
                  <Box sx={{ padding: "3rem" }}>
                    <Typography sx={verticalText}>Blockchain</Typography>
                    <Typography sx={paperTextStyle1}>
                      Our services include custom blockchain and web3
                      development, consulting on blockchain and web3 strategy
                      and implementation, and training on how to use these
                      technologies. We work with clients from a variety of
                      industries, including finance, supply chain, healthcare,
                      and more, to help them improve security, efficiency, and
                      transparency in their operations.
                    </Typography>
                    <Box sx={{ width: { sm: "10%", xs: "20%" }, mx: "auto" }}>
                      <Link to="blockchain">
                        <Typography
                          sx={{
                            fontSize: "15px",
                            width: "15%",
                            fontFamily: "LGRegular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            marginTop: "1rem",
                            color: "#9D9D9D",
                            display: "flex",
                            alignItems: "center",
                            transition: "0.3s all linear",
                            "&:hover": {
                              color: "#000",
                              ml: "5px",
                              transform: "scale(1.07)",
                            },
                          }}
                          onMouseOut={() => {
                            setIcon1("#9D9D9D");
                            setBorder("");
                          }}
                          onMouseOver={() => {
                            setIcon1("White");
                            setBorder("black");
                          }}
                        >
                          View
                          <Box
                            sx={{
                              p: 0.2,
                              borderRadius: "20px",
                              border: `1px solid ${border}`,
                              background: border,
                              display: "flex",
                              marginLeft: "10px",
                              marginBottom: "-3px",
                            }}
                          >
                            <EastSharpIcon
                              fontSize="small"
                              sx={{
                                color: icon1,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </>
            ) : (
              <Paper
                sx={{
                  opacity: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#000",
                  },
                }}
                onClick={() => {
                  setClick1(false);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                  setClick5(false);
                  setClick6(true);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem",
                    justifyContent: "start",
                    gap: "5rem",
                    borderBottom: "1px solid grey",
                    "&:hover": {
                      color: "#000",
                    },
                  }}
                >
                  <Typography sx={NumTextStyle}>6</Typography>
                  <Typography sx={ServiceText}>Blockchain</Typography>
                </Box>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default DevelopmentStack;

const OpenDetails = (props) => {
  const [icon1, setIcon1] = useState("#9D9D9D");
  const [border, setBorder] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
    >
      <Paper
        sx={{
          width: "80%",
          mx: "auto",
          maxWidth: "600px",
          height: "100%",
          minHeight: {
            xl: "800px",
            lg: "800px",
            md: "800px",
            sm: "100%",
            xs: "100%",
          },
          display: "grid",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: "0px",
          boxShadow: "0px",
        }}
        elevation={0}
      >
        <Box>
          <Fade top duration={1000}>
            <Typography sx={OpenDetailsTextStyle} className={styles.Text}>
              {props.title}
            </Typography>
          </Fade>
        </Box>
        <Box>
          <Typography sx={OpenDetailsBottomTextStyle} className={styles.Text}>
            {props.desc}
          </Typography>
          <Box sx={{ width: "10%" }}>
            <Link to={props.url}>
              <Typography
                sx={{
                  fontSize: {
                    lg: "18px",
                    xl: "18px",
                    md: "18px",
                  },
                  width: "100%",
                  fontFamily: "LGRegular",
                  fontStyle: "normal",
                  fontWeight: 400,
                  marginTop: "1rem",
                  color: "#9D9D9D",
                  display: "flex",
                  alignItems: "center",
                  transition: "0.3s all linear",
                  "&:hover": {
                    color: "#000",
                    ml: "5px",
                    transform: "scale(1.07)",
                  },
                }}
                onMouseOut={() => {
                  setIcon1("#9D9D9D");
                  setBorder("");
                }}
                onMouseOver={() => {
                  setIcon1("White");
                  setBorder("black");
                }}
              >
                View
                <Box
                  sx={{
                    p: 0.3,
                    borderRadius: "20px",
                    border: `1px solid ${border}`,
                    background: border,
                    display: "flex",
                    marginLeft: "10px",
                    marginBottom: "-3px",
                  }}
                >
                  <EastSharpIcon
                    fontSize="small"
                    sx={{
                      color: icon1,
                    }}
                  />
                </Box>
              </Typography>
            </Link>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

const PaperBoxStyle = {
  bgcolor: "red",
  top: {
    xl: "50%",
    lg: "40%",
    md: "40%",
    sm: "40%",
    xs: "40%",
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
  boxShadow: "none",
  "&:hover": {
    color: "#000",
  },
};
const OpenDetailsTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "65px", lg: "55px", md: "45px", sm: "40px", xs: "35px" },
  lineHeight: { xl: "75px", lg: "65px", md: "55px", sm: "50px", xs: "45px" },
  textTransform: "uppercase",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const OpenDetailsBottomTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "22px",
  lineHeight: "33px",
  color: "#010101",
};

const TransformedText = {
  marginTop: {
    xl: "-40px",
    lg: "-40px",
    md: "-40px",
  },
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  width: "90%",
  minWidth: "600px",
  lineHeight: "45px",
  letterSpacing: "1px",
  color: "#000000",
  fontSize: {
    xl: "40px",
    lg: "40px",
    md: "35px",
    sm: "30px",
    xs: "30px",
  },
  textAlign: "left",
  opacity: 1,
  transform: {
    xl: "rotate(-90deg)",
    lg: "rotate(-90deg)",
    md: "rotate(-90deg)",
    sm: "rotate(0deg)",
    xs: "rotate(0deg)",
  },
  "&:hover": {
    color: "#000",
  },
};

const paperStyle = {
  width: "auto",
  height: {
    xl: "100%",
    lg: "100%",
    md: "100%",
    sm: "10vh",
    xs: "10vh",
  },
  borderLeft: "1px solid rgba(163, 163, 163, 0.3)",
  borderBottom: {
    xl: "1px solid rgba(163, 163, 163, 0.3)",
    lg: "1px solid rgba(163, 163, 163, 0.3)",
    md: "1px solid rgba(163, 163, 163, 0.3)",
    sm: "1px solid rgba(163, 163, 163, 0.3)",
    xs: "1px solid rgba(163, 163, 163, 0.3)",
  },
  cursor: "pointer",
  background: "white",
  position: "relative",
  borderRadius: "0px",
  boxShadow: "none",
  "&:hover": {
    color: "black",
  },
};

const ServiceText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "19.066px",
  lineHeight: "23px",
  letterSpacing: 0.50165,
  color: "#000000",
};
const NumTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18.0594px",
  lineHeight: "20px",
  letterSpacing: 0.0050165,
  color: "#000000",
};
const verticalText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "32.6073px",
  lineHeight: "38px",
  textTransform: "uppercase",
  textAlign: "center",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};
const paperTextStyle1 = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.4rem",
  lineHeight: "17px",
  color: "#010101",
  width: {
    xl: "50%",
    lg: "50%",
    md: "100%",
    sm: "100%",
    xs: "100%",
  },
  marginTop: "2rem",
  textAlign: "center",
};
