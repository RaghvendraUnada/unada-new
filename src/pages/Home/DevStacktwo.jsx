import { Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";

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
};
