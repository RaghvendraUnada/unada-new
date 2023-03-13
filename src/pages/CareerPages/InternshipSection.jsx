import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import selection from "../../pages/Home/home.module.css";

const InternshipSection = () => {
  return (
    <Grid
      container
      sx={{ background: "white", textAlign: "center", padding: "4rem 4rem " }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Fade top duration={1800}>
          <Typography sx={textStyle} className={selection.zero}>
            Our Internship Program
          </Typography>
        </Fade>
        <Typography sx={metaTextStyle} className={selection.zero}>
          Our internship program is designed to provide hands-on experience and
          mentorship to help interns develop their skills and knowledge.
          Throughout the program, interns will work on real projects and
          challenges alongside our talented team of professionals, gaining
          exposure to a wide range of technologies and processes.
        </Typography>
        <Typography sx={metaTextStyle} className={selection.zero}>
          We look forward to helping you jumpstart your career in tech!
        </Typography>
        <Button disableRipple sx={ButtonStyle}>
          Apply
        </Button>
      </Grid>
    </Grid>
  );
};

export default InternshipSection;
const textStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "80px",
    lg: "75px",
    md: "65px",
    sm: "45px",
    xs: "30px",
  },
  lineHeight: {
    xl: "85px",
    lg: "75px",
    md: "65px",
    sm: "45px",
    xs: "35px",
  },
  letterSpacing: 0.01,
  textAlign: "center",
  color: "#000000",
};
const ButtonStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "20px",
    lg: "20px",
    md: "20px",
    sm: "18px",
    xs: "15px",
  },
  lineHeight: {
    xl: "19px",
    lg: "19px",
    md: "19px",
    sm: "19px",
    xs: "19px",
  },
  //   marginTop: "2rem",
  padding: "2rem 9rem",
  letterSpacing: 0.01,
  borderRadius: "30px",
  border: "1px #000 solid",
  color: "#000",
  marginTop: "5rem",
  textTransform: "capitalize",
  transition: "0.15s linear all",
  opacity: 0.7,
  "&:hover": {
    background: "black",
    color: "white",
    opacity: 1,
  },
  "&:focus": {
    backgroundColor: "transparent",
    color: "black",
  },
};
const metaTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "20px",
    lg: "20px",
    md: "18px",
    sm: "15px",
    xs: "12px",
  },
  lineHeight: "29px",
  textAlign: "center",
  letterSpacing: 0.085,
  width: {
    xl: "80%",
    lg: "80%",
    md: "80%",
    sm: "100%",
    xs: "100%",
  },
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2rem",
  color: "#000000",
};
