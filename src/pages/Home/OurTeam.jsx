import { Grid, Paper, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./OurTeam.css";
import { keyframes } from "styled-components";
import styled from "styled-components";
import axios from "axios";
import Fade from "react-reveal/Fade";
import selection from "./home.module.css";
import { useSpring } from "react-spring";
import Zaid from "../../assets/Images/ourTeamCutOut/Zaid.webp";
import Raghvendra from "../../assets/Images/ourTeamCutOut/Raghvendra.webp";
import Ronak from "../../assets/Images/ourTeamCutOut/Ronak.webp";
import Shri from "../../assets/Images/ourTeamCutOut/Shri.webp";
import Sandeep from "../../assets/Images/ourTeamCutOut/Sandeep.webp";
import Akash from "../../assets/Images/ourTeamCutOut/Akash.webp";
import Yash from "../../assets/Images/ourTeamCutOut/Yash.webp";
import Harsiddh from "../../assets/Images/ourTeamCutOut/Harsiddh.webp";
import Mit from "../../assets/Images/ourTeamCutOut/Mit.webp";
import Khushboo from "../../assets/Images/ourTeamCutOut/Khushboo.webp";
import Jin from "../../assets/Images/ourTeamCutOut/Jin.webp";
import Rutuja from "../../assets/Images/ourTeamCutOut/Rutuja.webp";
import Virendra from "../../assets/Images/ourTeamCutOut/Virendra.webp";
import Nammish from "../../assets/Images/ourTeamCutOut/Nammish.webp";
import Nishit from "../../assets/Images/ourTeamCutOut/Nishit.webp";
import Aashvi from "../../assets/Images/ourTeamCutOut/Aashvi.webp";
import Adi from "../../assets/Images/ourTeamCutOut/Adi.webp";
import Aditiya from "../../assets/Images/ourTeamCutOut/Aditiya.webp";
import Rohan from "../../assets/Images/ourTeamCutOut/Rohan.webp";
import tejas from "../../assets/Images/ourTeamCutOut/tejas.webp";
import new3D from "../../assets/Images/ourTeamCutOut/new3D.webp";
import hari from "../../assets/Images/ourTeamCutOut/hari.webp";
import fluterwala from "../../assets/Images/ourTeamCutOut/fluterwala.webp";
import devendra from "../../assets/Images/ourTeamCutOut/devendra.webp";
import greyemptyimg from "../../assets/Images/ourTeamCutOut/greyemptyimg.svg";
const OurTeam = () => {
  const [teamData, setTeamData] = useState();
  const [flip, setFlip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    flip: false,
    delay: 800,
    onRest: () => setFlip(!flip),
  });

  const FetchTeamData = async () => {
    await axios
      .get("team/get_members")
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchTeamData();
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0px",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Paper
        sx={{
          borderRadius: "0px",
          border: "none",
          boxShadow: "none",
          width: "100%",
          height: { xl: "100%", lg: "100%", md: "80%", xs: "80%" },
          minHeight: { xl: "270px", lg: "270px", md: "150px", xs: "150px" },
          maxHeight: "270px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={0}
      >
        <Fade top duration={1000}>
          <Typography sx={OurTeamTextStyle} className={selection.zero}>
            Our Team
          </Typography>
        </Fade>
      </Paper>
      <Paper
        sx={{
          borderTop: "1px solid rgba(163, 163, 163, 0.3)",
          height: "100%",
        }}
        elevation={0}
      >
        <Grid
          container
          sx={{
            height: "100%",
            maxHeight: {
              xl: "650px",
              lg: "650px",
              md: "650px",
              sm: "100%",
              xs: "100%",
            },
          }}
        >
          <Grid
            item
            xl={4}
            lg={4}
            md={5}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
              maxHeight: "100%",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "auto",
                mx: "auto",
                maxWidth: "400px",
                maxHeight: "400px",
                textAlign: {
                  xl: "initial",
                  lg: "initial",
                  md: "initial",
                  sm: "center",
                  xs: "center",
                },
                mb: { xl: 6, lg: 6, md: 6, sm: 0, xs: 0 },
              }}
            >
              <Typography sx={TextStyle} className={selection.zero}>
                The people who push the
              </Typography>
              <Typography sx={coloredText} className={selection.invert}>
                boundaries of technology and make it happen.
              </Typography>{" "}
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} md={7} sm={12} xs={12}>
            <Paper
              elevation={0}
              sx={{
                boxShadow: "0px",
                bgcolor: "transparent",
                pt: 2,
                mb: 0,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderLeft: "1px solid rgba(163, 163, 163, 0.3)",
                  borderRadius: "0px",
                  width: "100%",
                  height: "100%",
                  minHeight: "600px",
                  maxHeight: "600px",
                  overflowY: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  position: "relative",
                  p: 0,
                }}
              >
                <div class="block-33 display--inline-top">
                  <div class="gutter relative">
                    <div class="gallery-h">
                      {teamData?.map((res, idx) => {
                        return (
                          <div class="gallery-image relative" key={idx}>
                            <div class="gallery-image__img relative">
                              <EmployeeCard1 data={res} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div class="block-33 display--inline-top">
                  <div class="gutter relative">
                    <div class="gallery-h">
                      {teamData?.map((res, idx) => {
                        return (
                          <div class="gallery-image relative" key={idx}>
                            <div class="gallery-image__img relative">
                              <EmployeeCard2 data={res} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default OurTeam;

const TextStyle = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "60px", lg: "60px", md: "40px", sm: "30px", xs: "30px" },
  lineHeight: { xl: "75px", lg: "75px", md: "60px", sm: "30px", xs: "30px" },
  color: "#000",
  textAlign: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
  },
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: LGTrial;
  font-size: 60px;
  margin-top: -1px;
  font-weight: 500;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 992px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 576px) {
    font-size: 4rem;
  }
  @media (max-width: 320px) {
    font-size: 4rem;
  }
`;

const EmployeeCard1 = (props) => {
  const nameListEmp = [
    {
      img: Rohan,
      name: "Rohan Hundia ",
      place: "Co-Founder & CEO ",
    },
    {
      img: Yash,
      name: "Yash Deliwala ",
      place: "President People and Vibes",
    },
    {
      img: Raghvendra,
      name: "Raghvendra Singh ",
      place: "Full Stack Developer",
    },
    {
      img: Shri,
      name: "Shrikant Kanthale ",
      place: "L1 Web Developer",
    },
    {
      img: Ronak,
      name: "Ronak Goswami",
      place: "Full Stack Developer",
    },

    {
      img: Akash,
      name: "Akash Mishra",
      place: "MERN Stack Developer ",
    },
    {
      img: Harsiddh,
      name: "Harsiddh Rajput ",
      place: "Senior 3D Developer",
    },
    {
      img: devendra,
      name: "Devendra Chaudhari ",
      place: "3D Artist",
    },
    {
      img: Nishit,
      name: "Nishit Godhani ",
      place: "3D Intern ",
    },
    {
      img: Zaid,
      name: "Zaid Shaikh ",
      place: "Full Stack Developer",
    },
    {
      img: Adi,
      name: "Aditya Chauhan",
      place: "3D Artist",
    },
    {
      img: Virendra,
      name: "Virendra Parihar",
      place: "Senior Android Developer ",
    },
    {
      img: Sandeep,
      name: "Sandeep Singh",
      place: "UI/UX Designer ",
    },
  ];
  return (
    <Grid
      item
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      sx={{ mx: "auto", mt: 0.25, p: 0 }}
      className={"employe-card employe-card-1"}
    >
      <Box
        sx={{
          height: "auto",
          mx: "auto",
        }}
      >
        {nameListEmp?.map((el, idx) => {
          return (
            <Box
              sx={{
                mt: idx === 0 ? "-30px" : 0,
                height: "100%",
                minHeight: {
                  xl: "380px",
                  lg: "380px",
                  md: "350px",
                  sm: "300px",
                  xs: "250px",
                },
              }}
            >
              <Box
                component="img"
                src={el.img}
                className={selection.zero}
                sx={{
                  width: {
                    xl: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "95%",
                    xs: "95%",
                  },
                  mx: "auto",
                  height: "100%",
                  ml: { xl: 0, lg: 0, md: 0, xs: 1, sm: 1 },
                }}
              />
              {/* <img
                src={el.img}
                style={{ width: "100%", height: "100%" }}
                className={selection.zero}
              /> */}
              <Typography sx={TeamNameTextStyle} className={selection.zero}>
                {el.name}
              </Typography>
              <Typography
                sx={TeamProfessionTextStyle}
                className={selection.zero}
              >
                {el.place}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

const EmployeeCard2 = (props) => {
  const nameListEmp = [
    {
      img: Aditiya,
      name: "Aditya Vijay ",
      place: "Co-Founder & CTO",
    },
    {
      img: greyemptyimg,
      name: "Samir Vitlani",
      place: "Project Manager & Lead ",
    },
    {
      img: Rutuja,
      name: "Rutuja Karnavat ",
      place: "Chief Vibes & People Officer ",
    },
    {
      img: greyemptyimg,
      name: "Shreyansh Sheth",
      place: "Full Stack Developer",
    },
    {
      img: fluterwala,
      name: "kamlesh prajapat",
      place: " flutter intern ",
    },
    {
      img: greyemptyimg,
      name: "Dev Mistry",
      place: "Development Intern",
    },

    {
      img: tejas,
      name: "Tejas Lohar",
      place: "DevOps",
    },
    {
      img: hari,
      name: "Harikrushna Chauhan",
      place: "Manual Tester",
    },
    {
      img: Nammish,
      name: "Naimish Gadhiya ",
      place: "Full Stack Developer",
    },
    {
      img: Aashvi,
      name: "Aashvi zala ",
      place: "UI/UX",
    },
    {
      img: Khushboo,
      name: "Khushboo Rai ",
      place: "Andriod Developer",
    },
    {
      img: Jin,
      name: "Jahnavi Makwana ",
      place: "UI/UX Designer ",
    },
    {
      img: new3D,
      name: "Radhika Panjwani",
      place: "Unity3D Developer",
    },
  ];
  return (
    <Grid
      item
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      sx={{ mx: "auto", mt: 4 }}
      className={"employe-card employe-card-1"}
    >
      <Box
        sx={{
          height: "auto",
          mx: "auto",
        }}
      >
        {nameListEmp?.map((el, idx) => {
          return (
            <Box
              sx={{
                mt: idx === 0 ? "-60px" : 0,
                height: "100%",
                minHeight: {
                  xl: "380px",
                  lg: "380px",
                  md: "350px",
                  sm: "300px",
                  xs: "250px",
                },
              }}
            >
              <Box
                component="img"
                src={el.img}
                className={selection.zero}
                sx={{
                  width: {
                    xl: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "95%",
                    xs: "95%",
                  },
                  height: "100%",
                  mx: "auto",
                }}
              />
              {/* <img
                src={el.img}
                style={{ width: "100%", height: "100%" }}
                className={selection.zero}
              /> */}
              <Typography sx={TeamNameTextStyle} className={selection.zero}>
                {el.name}
              </Typography>
              <Typography
                sx={TeamProfessionTextStyle}
                className={selection.zero}
              >
                {el.place}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

const OurTeamTextStyle = {
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: { xl: "120px", lg: "100px", md: "80px", sm: "60px", xs: "40px" },
  lineHeight: { xl: "97px", lg: "75px", md: "60px", sm: "45px", xs: "30px" },
  letterSpacing: "2.97231px",
  color: "#000000",
  textAlign: "center",
  mx: "auto",
};

const TeamNameTextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "23px", lg: "23px", md: "20px", sm: "16px", xs: "14px" },
  lineHeight: { xl: "36px", lg: "36px", md: "30px", sm: "25px", xs: "20px" },
  letterSpacing: "0.01px",
  color: "#000",
  mt: 0.5,
  ml: { xl: 0, lg: 0, md: 0, sm: 0, xs: 1 },
};

const TeamProfessionTextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "15px", lg: "15px", md: "14px", sm: "12px", xs: "12px" },
  lineHeight: { xl: "20px", lg: "18px", md: "16px", sm: "16px", xs: "15px" },
  letterSpacing: "0.01px",
  color: "#000",
  mb: 3,
  ml: { xl: 0, lg: 0, md: 0, sm: 0, xs: 1 },
};

const coloredText = {
  fontSize: { xl: "55px", lg: "50px", md: "40px", sm: "30px", xs: "30px" },
  lineHeight: { xl: "75px", lg: "75px", md: "60px", sm: "35px", xs: "30px" },
  fontWeight: 500,
  fontFamily: "LGRegular",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};
