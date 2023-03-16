import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import Fade from "react-reveal/Fade";
import selection from "../../pages/Home/home.module.css";

const RevolutionSetion = () => {
  const [jobData, setJobData] = useState();
  const FetchJobData = async () => {
    await axios
      .get("/job/get_jobs")
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    FetchJobData();
  }, []);
  return (
    <Grid
      container
      sx={{
        background: "white",
        textAlign: "center",
        // padding: "11.2rem 8rem ",
        p: { xl: 10, lg: 10, md: 8, sm: 5, xs: 3 },
      }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Fade top duration={1000}>
          <Typography sx={textStyle} className={selection.zero}>
            Be a part of a revolution
          </Typography>
        </Fade>
        <Button sx={ButtonStyle}>{jobData?.length} Positions open</Button>
      </Grid>
    </Grid>
  );
};

export default RevolutionSetion;
const textStyle = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  // width: "100%",
  fontWeight: 500,
  fontSize: {
    xl: "80px",
    lg: "75px",
    md: "65px",
    sm: "45px",
    xs: "25px",
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
    xs: "14px",
  },
  lineHeight: {
    xl: "19px",
    lg: "19px",
    md: "19px",
    sm: "19px",
    xs: "19px",
  },
  //   marginTop: "2rem",
  padding: "2rem 4rem",
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
