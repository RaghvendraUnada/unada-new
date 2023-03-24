import React from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import thumb from "../../assets/Images/Application/thumb.svg";
import { BsCheck2 } from "react-icons/bs";
import TechMarque from "../../components/Maarquee/TechMarque";
import Fade from "react-reveal/Fade";

const TechStack = (props) => {
  let storeData = props.Tech;
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          boxShadow: "rgba(0, 0, 0, 0.0364)",
          borderRadius: "0px",
        }}
      >
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "rgba(0, 0, 0, 0.0364)",
              }}
            >
              <Fade top duration={1000}>
                <Typography sx={mainText}>{props.text1} stack</Typography>
              </Fade>
            </Box>
          </Grid>
        </Grid>
        <Paper
          elevation={0}
          sx={{
            borderTop: "0.1px solid rgba(0, 0, 0, 0.0364)",
          }}
        >
          <Grid
            container
            mt={5}
            spacing={2}
            sx={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <TechMarque Tech={storeData} />
          </Grid>
        </Paper>
        <Box
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "flex",
              xs: "none",
            },
            borderBottom: "4px solid rgba(0, 0, 0, 0.0364)",
            marginTop: "4rem",
          }}
        ></Box>
        <Box
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "none",
              xs: "flex",
            },
            borderBottom: "1px solid rgba(0, 0, 0, 0.0364)",
            marginTop: "4rem",
          }}
        ></Box>
        <Paper elevation={0} sx={mainPage}>
          <Grid container sx={PageStyle}>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "1.5rem",
                }}
              >
                <img
                  src={thumb}
                  alt="thmb"
                  style={{ height: "auto", width: "8rem" }}
                />
                <Typography sx={TestStyle}>
                  Which Industries have we worked with
                </Typography>
              </Box>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  {props?.textone?.map((res, idx) => {
                    return (
                      <Typography sx={IndustriesNameText} key={idx}>
                        <BsCheck2
                          size={20}
                          color={"#4caf50"}
                          style={{ alignItems: "center" }}
                        />
                        {res}
                      </Typography>
                    );
                  })}
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  {props?.text?.map((res, idx) => {
                    return (
                      <Typography sx={IndustriesNameText} key={idx}>
                        <BsCheck2
                          size={20}
                          color={"#4caf50"}
                          style={{ alignItems: "center" }}
                        />
                        {res}
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* mobile */}
        <Paper elevation={0} sx={mainPageSmall}>
          <Grid container sx={PageStyle}>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "1.5rem",
                }}
              >
                <img
                  src={thumb}
                  alt="thmb"
                  style={{ height: "auto", width: "8rem" }}
                />
                <Typography sx={TestStyle}>
                  Which Industries have we worked with
                </Typography>
              </Box>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} mt={3}>
              <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  {props?.textone?.map((res, idx) => {
                    return (
                      <Typography sx={IndustriesNameText} key={idx}>
                        <BsCheck2
                          size={25}
                          color={"#4caf50"}
                          style={{ alignItems: "center" }}
                        />

                        {res}
                      </Typography>
                    );
                  })}
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  {props?.text?.map((res, idx) => {
                    return (
                      <Typography sx={IndustriesNameText} key={idx}>
                        <BsCheck2
                          size={20}
                          color={"#4caf50"}
                          style={{ alignItems: "center" }}
                        />
                        {res}
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

export default TechStack;

const mainText = {
  fontSize: { xl: "5rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  background: "linear-gradient(90.12deg, #2340FF 0.2%, #0ABFBC 79.48%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  p: "2rem",
  fontWeight: 500,
  fontFamily: "LGMedium",
  lineHeight: { xl: "6rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  marginTop: { xl: "0rem", lg: "0rem", md: "0rem", sm: "4rem", xs: "4rem" },
  marginLeft: "auto",
  marginRight: "auto",
};

const mainPage = {
  display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" },
  marginLeft: "auto",
  marginRight: "auto",
  width: { xl: "85%", lg: "85%", md: "90%", sm: "95%", xs: "auto" },
  borderRadius: { xl: "2rem", lg: "2rem", md: "2rem", sm: "2rem", xs: "0rem" },
  border: "1px solid rgba(163, 163, 163, 0.3)",
  py: 1,
  mt: 5,
  boxShadow: "0 6px 8px 4px rgba(0, 0, 0, 0.0364)",
};
const mainPageSmall = {
  borderRadius: "0px",
  display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "flex" },
  marginLeft: "auto",
  marginRight: "auto",
  width: { xl: "85%", lg: "85%", md: "90%", sm: "95%", xs: "auto" },
  py: 1,
  mt: 5,
  boxShadow: "0 16px 20px -5px black",
};
const PageStyle = {
  display: "flex",
  justifyContent: "center",
  padding: { xl: "1.5rem", lg: "1.5rem", md: "1.5rem", sm: "1rem", xs: "1rem" },
  background: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))",
  width: "100%",
  borderRadius: "2rem",
};
const IndustriesNameText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "14px",
    lg: "14px",
    md: "12px",
    sm: "8px",
    xs: "8px",
  },
  lineHeight: "28px",
  color: "#121212",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: {
    xl: "18px",
    lg: "18px",
    md: "16px",
    sm: "12px",
    xs: "12px",
  },
  marginLeft: "30px",
  transition: "0.3s all linear",
  "&:hover": {
    transform: "scale(1.07)",
  },
};

const TestStyle = {
  width: { xl: "35%", lg: "35%", md: "50%", sm: "50%", xs: "60%" },
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "2rem",
    lg: "2rem",
    md: "1.5rem",
    sm: "2rem",
    xs: "2rem",
  },
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
  color: "#212121",
  lineHeight: { sm: "inherit", xs: "inherit" },
};

const text = {
  color: "#121212",
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "1.2rem",
    lg: "1.2rem",
    md: "1.5rem",
    sm: "1.2rem",
    xs: "1.2rem",
  },
};
