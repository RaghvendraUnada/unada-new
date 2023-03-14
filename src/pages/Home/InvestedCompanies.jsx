import { Grid, Paper, Typography } from "@mui/material";
import { Box, minHeight } from "@mui/system";
import React from "react";
import PharmeasyImg from "../../assets/Images/InvestedCompanies/Pharmeasy.png";
import UnispaceImg from "../../assets/Images/InvestedCompanies/Unispace.png";
import KhushiImg from "../../assets/Images/InvestedCompanies/Khushi.png";
import RatnaImg from "../../assets/Images/InvestedCompanies/ratna.png";
import MunothImg from "../../assets/Images/InvestedCompanies/munoth.png";
import Fade from "react-reveal/Fade";
import selection from "./home.module.css";

const InvestedCompanies = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        height: "auto",
        minHeight: "400px",
        // maxHeight:""
        position: "relative",
        marginTop: "0px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          height: "auto",
          minHeight: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3);",
          textAlign: {
            xl: "initial",
            lg: "initial",
            md: "initial",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Fade top duration={1800}>
          <Typography sx={TextStle} className={selection.invert2}>
            Company that Invested & Trusted us.
          </Typography>
        </Fade>
      </Box>
      <Box
        sx={{
          height: "auto",
          minHeight: {
            xl: "220px",
            lg: "220px",
            md: "220px",
            sm: "300px",
            xs: "100%",
          },
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            py: 5,
            // alignSelf: "center",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%,-50%)",
          }}
        >
          <ImageBox img={PharmeasyImg} mx="auto" />
          <ImageBox img={UnispaceImg} mx="auto" />
          <ImageBox img={KhushiImg} mx="auto" />
          <ImageBox img={RatnaImg} mx="0" />
          <ImageBox img={MunothImg} mx="0" />
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestedCompanies;

const ImageBox = (props) => {
  return (
    <Grid item xl={2.4} lg={2.4} md={2.4} sm={4} xs={4} sx={{ mx: "auto" }}>
      <Box
        sx={{
          mt: 2,
          width: "90%",
          maxWidth: {
            xl: "250px",
            lg: "230px",
            md: "200px",
            sm: "180px",
            xs: "180px",
          },
          alignContent: "center",
          textAlign: "center",
          height: "100%",
          mx: "auto",
          bgcolor: "transparent",
        }}
      >
        <img src={props.img} width="75%" height="auto" />
      </Box>
    </Grid>
  );
};

const TextStle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "50px", lg: "45px", md: "40px", sm: "35px", xs: "30px" },
  lineHeight: { xl: "42px", lg: "40px", md: "35px", sm: "30px", xs: "30px" },
  letterSpacing: "0.01px",
  color: "#FFFFFF",
};
