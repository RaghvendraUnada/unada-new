import React, { useState, useEffect } from "react";
import TeamImgOne from "../assets/Images/Home/OurTeam/ImgOne.png";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const OurTeamMData = (props) => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={false}
      // pauseOnClick={true}
      direction={"left"}
      style={{
        width: "100%",
        minWidth: "1200px",
        height: "100%",
        maxHeight: "500px",
      }}
    >
      {props?.data?.map((client, idx) => {
        return (
          <Box
            sx={{
              marginX: "12px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              transform: "rotate(-90deg)",
              width: {
                xs: "300px",
                sm: "300px",
                md: "350px",
                lg: "400px",
                xl: "400px",
              },
              height: {
                xs: "auto",
                sm: "auto",
                md: "350px",
                lg: "400px",
                xl: "400px",
              },
              display: "grid",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <img
              style={{
                height: "auto",
                maxHeight: "300px",
                width: "auto",
                marginLeft: "0px",
              }}
              src={client.TeamMemberImage}
              alt="Team Member"
            />
            <Box>
              {/* <Typography sx={TextStyleOne}>{client.TeamMemberName}</Typography>
              <Typography sx={TextStyleTwo}>{client.TeamMemberName}</Typography> */}
            </Box>
          </Box>
        );
      })}
    </Marquee>
  );
};

export default OurTeamMData;

const TextStyleOne = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "23px",
  lineHeight: "36px",
  letterSpacing: 0.1,
  color: "#0F0F0F",
};

const TextStyleTwo = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "20px",
  letterSpacing: 0.1,
  color: "rgba(0, 0, 0, 0.76);",
};
