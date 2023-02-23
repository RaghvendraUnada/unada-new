import { Paper, Typography, Box, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import ServicesPage from "../Services/ServicesPage";
import { useSpring, animated } from "@react-spring/web";

const DevelopmentStack = () => {
  const [one, setone] = useState(false);
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [six, setsix] = useState(false);

  return (
    <Paper
      sx={{
        display: "grid",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <button
            onClick={() => {
              setone(true);
              settwo(false);
              setthree(false);
              setfour(false);
              setfive(false);
              setsix(false);
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              maxHeight: "100px",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {one ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
          }}
        >
          <button
            onClick={() => {
              setone(false);
              settwo(true);
              setthree(false);
              setfour(false);
              setfive(false);
              setsix(false);
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {two ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <button
            onClick={() => {
              setone(false);
              settwo(false);
              setthree(true);
              setfour(false);
              setfive(false);
              setsix(false);
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {three ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <button
            onClick={() => {
              {
                setone(false);
                settwo(false);
                setthree(false);
                setfour(true);
                setfive(false);
                setsix(false);
              }
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {four ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <button
            onClick={() => {
              setone(false);
              settwo(false);
              setthree(false);
              setfour(false);
              setfive(true);
              setsix(false);
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {five ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
      <Box sx={{ width: "100%", heigh: "auto" }}>
        <Paper
          sx={{
            width: "100%",
            minWidth: "100vw",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <button
            onClick={() => {
              setone(false);
              settwo(false);
              setthree(false);
              setfour(false);
              setfive(false);
              setsix(true);
            }}
            style={{
              bgcolor: "red",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <PaperButton
              text={"Application Development"}
              num={1}
              active={true}
            />
          </button>
        </Paper>
        {six ? (
          <OpenDetails
            title={"Ultra-flexible logistics"}
            textTwo={
              "Our services include custom blockchain and web3 development, consulting on blockchain and web3 strategy and implementation, and training on how to use these technologies. We work with clients from a variety of industries, including finance, supply chain, healthcare, and more, to help them improve security, efficiency, and transparency in their operations."
            }
            url={"View All"}
          />
        ) : null}
      </Box>
    </Paper>
  );
};

export default DevelopmentStack;

const PaperButton = (props) => {
  return (
    <Paper elevation={0} sx={paperStyle}>
      <Box
        sx={{
          display: "flex",
          width: "800px",
          mx: "auto",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            ...TransformedText,
            color: props.active ? "#000000" : "#dddddd",
          }}
        >
          {props.num}
        </Typography>
        <Typography
          sx={{
            ...TransformedText,
            color: props.active ? "#000000" : "#dddddd",
          }}
        >
          {props.text}
        </Typography>
      </Box>
    </Paper>
  );
};

const OpenDetails = (props) => {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        borderRight: "1px solid rgba(163, 163, 163, 0.3)",
        borderRadius: "0px",
      }}
    >
      <Box sx={{ width: "550px" }}>
        <Typography sx={OpenDetailsTextStyle}>{props.title}</Typography>
        <Typography sx={{ ...OpenDetailsTextStyle, color: "black" }}>
          {" "}
          logistics
        </Typography>
      </Box>
      <Box sx={{ width: "550px" }}>
        <Typography sx={OpenDetailsBottomTextStyle}>{props.textTwo}</Typography>
        <Typography>{props.url}</Typography>
      </Box>
    </Paper>
  );
};

const OpenDetailsTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "65px",
  lineHeight: "75px",
  textTransform: "uppercase",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const OpenDetailsBottomTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "33px",
  color: "#010101",
};

const TransformedText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "45px",
  letterSpacing: "1px",
  color: "#000000",
  fontSize: {
    xl: "40px",
    lg: "40px",
    md: "35px",
    sm: "8rem",
    xs: "5rem",
  },
  textAlign: "center",
  opacity: 1,
  //   transform: {
  //     xl: "rotate(-90deg)",
  //     lg: "rotate(-90deg)",
  //     md: "rotate(-90deg)",
  //     sm: "rotate(0deg)",
  //     xs: "rotate(0deg)",
  //   },
};

const TransformedTextTwo = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "45px",
  display: "flex",
  letterSpacing: "1px",
  color: "#000000",
  fontSize: {
    xl: "40px",
    lg: "40px",
    md: "35px",
    sm: "8rem",
    xs: "5rem",
  },
  textAlign: "center",
  opacity: 1,
  transform: {
    xl: "rotate(0deg)",
    lg: "rotate(0deg)",
    md: "rotate(-90deg)",
    sm: "rotate(0deg)",
    xs: "rotate(0deg)",
  },
};

const paperStyle = {
  width: "auto",
  display: "flex",
  justifyContent: "center",
  height: "auto",
  maxHeight: "100px",
  borderRight: "0px solid rgba(163, 163, 163, 0.3)",
  borderBottom: {
    xl: "1px solid rgba(163, 163, 163, 0.3)",
    lg: "1px solid rgba(163, 163, 163, 0.3)",
    md: "1px solid rgba(163, 163, 163, 0.3)",
    sm: "1px solid rgba(163, 163, 163, 0.3)",
    xs: "1px solid rgba(163, 163, 163, 0.3)",
  },
  background: "transparent",
  position: "relative",
  border: "0px",
  boxShadow: "none",

  //   bord,
};

const inActiveboxStyle = {
  position: "absolute",
  bottom: "5%",
  display: "flex",
  padding: "2rem",
  alignItems: "baseline",
};
const ActiveBoxStyles = {
  position: "absolute",
  bottom: "5%",
  padding: "2rem",
};
const ServicePaperStyle = {
  width: "auto",

  height: {
    xl: "97vh",
    lg: "97vh",
    md: "97vh",
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

  //   "&:hover": {
  //     background: `url(${MetaImgServices})`,
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "none",
  //   },
  // padding: "3rem",
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
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "28pxpx",
  marginTop: "2rem",
  color: "rgba(255, 255, 255, 0.8)",
};
const MetaTextStyle = {
  fontFamily: "LGMedium",
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
};
const mobileActivePaper = {
  background: "black",
  border: "1px solid #191919",
  textAlign: "center",
  padding: "2rem",
  // position: "relative",
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
  textAlign: "center",
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
  top: "25%",
};
const ButtonStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    sm: "35px",
    xs: "15px",
  },
  lineHeight: {
    sm: "42px",
    xs: "21px",
  },
  padding: "1rem 2rem",
  letterSpacing: 0.01,
  borderRadius: "30px",
  border: "1px white solid",
  color: "#FFFFFF",
  marginTop: "2rem",
};
