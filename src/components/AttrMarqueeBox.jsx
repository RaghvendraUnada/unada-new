import React from "react";
import { Box, Typography } from "@mui/material";
const AttrMarqueeBox = ({ image, text, metaText }) => {
  return (
    <Box
      sx={{
        marginX: "12px",
        borderRadius: "12px",
        backgroundColor: "#0d0d0d",
        // paddingX: "120px",
        // paddingY: "12px",
        height: {
          xl: "124.71px",
          lg: "124.71px",
          md: "110.71px",
          sm: "100px",
          xs: "90px",
        },
        padding: {
          xl: "2rem",
          lg: "2rem",
          md: "1.6rem",
          sm: "1.5rem",
          xs: "1.3rem",
        },
        width: "fit-content",
        border: "3px solid rgba(163, 163, 163, 0.3)",
        // height: "auto",
        // minHeight: "95px",
        display: "flex",
        justifyContent: "center",
        gap: {
          xl: "2rem",
          lg: "2rem",
          md: "1.6rem",
          sm: "1.5rem",
          xs: "1.3rem",
        },
        alignItems: "center",
        opacity: "0.4",
      }}
    >
      <img
        style={{
          // display: "flex",
          // justifyContent: "center",
          // margin: "auto",
          height: "70%",
          width: "auto",
          //   maxWidth: "calc(100% - 120px)",
          //   maxHeight: "calc(100% - 12px)",
          //   margin: "auto",
        }}
        src={image}
        alt="android"
      />
      <Box>
        <Typography sx={textStyle}>{text}</Typography>
        <Typography sx={MetaTextStyle}>{metaText}</Typography>
      </Box>
    </Box>
  );
};

export default AttrMarqueeBox;
const textStyle = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: {
    xl: "23.5687px",
    lg: "23.5687px",
    md: "20px",
    sm: "16px",
    xs: "12px",
  },
  lineHeight: {
    xl: "31px",
    lg: "31px",
    md: "25px",
    sm: "20px",
    xs: "16px",
  },
  color: "#FFFFFF",
};
const MetaTextStyle = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: {
    xl: "17.6765px",
    lg: "17.6765px",
    md: "15px",
    sm: "12px",
    xs: "9px",
  },
  marginTop: {
    xl: "12px",
    lg: "12px",
    md: "9px",
    sm: "8px",
    xs: "3px",
  },
  lineHeight: "23px",
  color: "#FFFFFF",
};
