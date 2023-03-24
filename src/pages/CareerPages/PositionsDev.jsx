import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Grid, Stack, Button } from "@mui/material";
import VerticalScroll from "../../components/VerticalScroll";
import { keyframes } from "styled-components";
import styled from "styled-components";
import positionTitle from "../../assets/images/new/position.png";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import axios from "axios";
import selection from "../../pages/Home/home.module.css";

const PositionsDev = () => {
  const [JobData, setJobData] = useState();
  const navigate = useNavigate();
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
  useEffect(() => {
    if (location?.hash === "#section") {
      setTimeout(() => {
        window.scrollTo({ top: 3640, behavior: "smooth" });
      }, [1200]);
    } else if (location?.hash === "#miniSection") {
      setTimeout(() => {
        window.scrollTo({ top: 500, behavior: "smooth" });
      }, [1200]);
    } else {
      return console.log(window.location.pathname);
    }
  }, []);
  return (
    <Grid
      container
      sx={{ height: "100%", minHeight: "100vh", background: "#000" }}
    >
      <Grid
        item
        xl={3.6}
        lg={3.6}
        md={3.6}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRight: "1px solid rgba(163, 163, 163, 0.3)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xl: "start",
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "80%",
              flexDirection: {
                xl: "column",
                lg: "column",
                md: "column",
                sm: "row",
                xs: "row",
              },
              justifyContent: "center",
              alignItems: {
                xl: "start",
                lg: "start",
                md: "start",
                sm: "center",
                xs: "center",
              },
              gap: "1rem",
            }}
          >
            <Fade top duration={1000}>
              <Typography
                sx={{ ...textStyle1, color: "#fff" }}
                className={selection.invert2}
              >
                Open
              </Typography>
              <Typography
                sx={{
                  ...textStyle1,
                  background:
                    "linear-gradient(90deg, #091E3A -30%, #2F80ED 50%, #2D9EE0 100%);",
                  backgroundSize: " 100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                className={selection.invert2}
              >
                Positions
              </Typography>
            </Fade>
          </Box>
          <Typography sx={{ ...subText, mt: 2 }} className={selection.invert2}>
            Didn’t find any suitable role, but you believe we should have you?
            Get in touch as we’d love to connect.
          </Typography>

          <Box
            mt={4}
            sx={{
              alignItems: "start",
              marginRight: {
                xl: "auto",
                lg: "auto",
                md: "auto",
                sm: "auto",
                xs: "auto",
              },
              marginLeft: {
                xl: "0",
                lg: "0",
                md: "0",
                sm: "auto",
                xs: "auto",
              },
              padding: {
                xl: "1rem",
                lg: "1rem",
                md: "3rem",
              },
            }}
          >
            <Button
              sx={ButtonStyle}
              className="demoBtn"
              onClick={() => {
                navigate("/contact#section");
              }}
            >
              Let's Chat
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xl={8.4}
        lg={8.4}
        md={8.4}
        xs={12}
        sm={12}
        sx={{
          height: { lg: "100vh", md: "100vh", sm: "40vh", xs: "40vh" },
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
        }}
      >
        {JobData?.map((res, idx) => {
          if (!JobData || JobData.length === 0) {
            return <Typography>No Job Openings at The moment</Typography>;
          }
          return (
            <VerticalScroll
              key={idx}
              positionDevo={res.Position}
              pos1={res.Location}
              pos2={res.JobType}
              pos3={res.WorkLoacationType}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PositionsDev;

const mainText = {
  fontSize: { xl: "5rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  color: "#212121",
  letterSpacing: "-0.1rem",
  fontWeight: 500,
  fontFamily: "LGTrial",
  marginTop: { sm: "4rem", xs: "4rem" },
  width: { xl: "90%", lg: "90%", md: "90%", sm: "88%", xs: "90%" },
  textAlign: {
    xl: "left",
    lg: "left",
    md: "center",
    sm: "center",
    xs: "center",
  },
  background: "linear-gradient(0deg, #FFFFFF, #FFFFFF)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  background-image: -webkit-linear-gradient(
    2deg,
    rgba(201, 75, 234, 1) 0%,
    rgba(112, 62, 195, 1),
    rgba(59, 33, 140, 1),
    rgba(26, 16, 66, 1),
    rgba(54, 9, 52, 1),
    rgba(170, 2, 87, 1)
  );
  letter-spacing: -0.1rem;
  // background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  font-size: 60px;
  font-weight: 500;
  margin: 0;
  margin-right: auto;
  margin-left: 30px;
  text-align: left;
  // overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    font-size: 6rem;
    lineheight: 75px;
    width: 90%;
    text-align: left;
  }
  @media (max-width: 992px) {
    font-size: 5rem;
    lineheight: 65px;
    width: 90%;
    margin-right: 17px;
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    width: 90%;
    text-align: center;
    lineheight: 55px;
    margin-right: 0;
    margin-left: 0;
  }
  @media (max-width: 576px) {
    font-size: 3rem;
    width: 88%;
    text-align: center;
    lineheight: 50px;
    margin-top: 0rem;
    margin-right: 0;
    margin-left: 0;
  }
  @media (max-width: 320px) {
    font-size: 3rem;
    lineheight: 45px;
    width: 90%;
    text-align: center;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0rem;
  }
`;

const careertext = {
  fontSize: { xl: "9rem", lg: "9rem", md: "4rem", sm: "4rem", xs: "4rem" },
  color: "White",
  lineHeight: { xl: "9rem", lg: "8rem", md: "5rem", sm: "4rem", xs: "4rem" },
  letterSpacing: "0.1rem",
  fontWeight: 500,
  fontFamily: "LGRegular",
};

const subText = {
  width: { xl: "90%", lg: "90%", md: "90%", sm: "85%", xs: "85%" },
  fontSize: {
    xl: "2rem",
    lg: "2rem",
    md: "1.6rem",
    sm: "1.3rem",
    xs: "1.3rem",
  },
  color: "#fff",
  fontWeight: 400,
  fontFamily: "LGThin",
  lineHeight: {
    xl: "2.8rem",
    lg: "2.8rem",
    md: "2.6rem",
    sm: "2.1rem",
    xs: "2.0rem",
  },
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
};

const ButtonStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "16px",
    lg: "16px",
    md: "16px",
    sm: "16px",
    xs: "16px",
  },

  padding: "1rem 2.5rem",
  letterSpacing: 0.01,
  borderRadius: "30px",
  border: "1px grey solid",
  color: "rgba(255, 255, 255, 0.5)",
  opacity: 0.8,
  textTransform: "capitalize",
  marginLeft: "auto",
  "&:hover": {
    opacity: 1,
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
};
const textStyle1 = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "64px",
    lg: "64px",
    md: "50px",
    sm: "42px",
    xs: "35px",
  },
  lineHeight: {
    xl: "76px",
    lg: "76px",
    md: "58px",
    sm: "50px",
    xs: "45px",
  },
  letterSpacing: 1,
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
};
