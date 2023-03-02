import { Grid, Paper, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TeamImgOne from "../../assets/Images/Home/OurTeam/ImgOne.png";
import TeamImgTwo from "../../assets/Images/Home/OurTeam/ImgTwo.png";
import "./OurTeam.css";
import Marquee from "react-marquee-master";

import { keyframes } from "styled-components";
import styled from "styled-components";
import teamTitle from "../../assets/images/new/team.png";
import axios from "axios";

const OurTeam = () => {
  const [teamData, setTeamData] = useState();
  const FetchTeamData = async () => {
    await axios
      .get("team/get_members")
      .then((res) => {
        console.log(res.data);
        setTeamData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const leftImages = [
    TeamImgOne,
    TeamImgOne,
    TeamImgOne,
    TeamImgOne,
    TeamImgOne,
  ];
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
          height: "100%",
          minHeight: "270px",
          maxHeight: "270px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={0}
      >
        <Typography sx={OurTeamTextStyle}>Our Team</Typography>
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
            {/* <img src={teamTitle} alt="team" width="60%" draggable="false" /> */}
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
                // background: "red",
                mb: { xl: 6, lg: 6, md: 6, sm: 0, xs: 0 },
              }}
            >
              <Typography sx={TextStyle}>The people who push the</Typography>
              <Typography sx={coloredText}>
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
                              <EmployeeCard1 data={res} />
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
  lineHeight: { xl: "70px", lg: "70px", md: "60px", sm: "30px", xs: "30px" },
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
  console.log(props.data);
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
        <img src={TeamImgOne} style={{ width: "100%", height: "100%" }} />
        <Typography sx={TeamNameTextStyle}>
          {props?.data?.TeamMemberName
            ? props?.data?.TeamMemberName
            : "Lorem Ipsum"}
        </Typography>
        <Typography sx={TeamProfessionTextStyle}>
          {props?.data?.TeamMemberPosition
            ? props?.data?.TeamMemberPosition
            : "Lorem Ipsum"}
        </Typography>
      </Box>
    </Grid>
  );
};

const EmployeeCard2 = () => {
  return (
    <Grid
      // scrollEnabled={false}
      // nestedScrollEnabled={false}
      item
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      sx={{ mx: "auto", mt: 4 }}
      className={"employe-card employe-card-2"}
    >
      <Box
        // scrollEnabled={false}
        sx={{
          // width: "90%",
          // maxWidth: "500px",
          height: "auto",
          mx: "auto",
        }}
      >
        <img src={TeamImgTwo} style={{ width: "100%", height: "100%" }} />
        <Typography sx={TeamNameTextStyle}>Alex Rook</Typography>
        <Typography sx={TeamProfessionTextStyle}>Web Designer</Typography>
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
  /* or 118% */
  letterSpacing: "2.97231px",
  color: "#000000",
  // ml: 10,
  textAlign: "center",
  mx: "auto",
};

const TeamNameTextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "23px", lg: "23px", md: "20px", sm: "18px", xs: "18px" },
  lineHeight: { xl: "36px", lg: "36px", md: "30px", sm: "25px", xs: "20px" },
  letterSpacing: "0.01px",
  color: "#000",
};

const TeamProfessionTextStyle = {
  fontFamily: "LGMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "15px", lg: "15px", md: "14px", sm: "14px", xs: "14px" },
  lineHeight: { xl: "20px", lg: "18px", md: "16px", sm: "16px", xs: "16px" },
  letterSpacing: "0.01px",
  color: "#000",
};

const coloredText = {
  fontSize: { xl: "55px", lg: "50px", md: "40px", sm: "30px", xs: "30px" },
  lineHeight: { xl: "70px", lg: "70px", md: "60px", sm: "35px", xs: "30px" },
  fontWeight: 500,
  fontFamily: "LGRegular",
  background: "linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};
