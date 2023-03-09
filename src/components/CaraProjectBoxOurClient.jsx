import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import client1 from "../assets/Images/clients/client1.svg";

const CaraProjectBoxOurClient = ({ image, name, hrefLink, desig }) => {
  return (
    <Box
      sx={{
        transform: "rotate(270deg)",
        width: "100%",
        height: "100%",
        minHeight: "450px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          mx: "auto",
          display: "grid",
          justifyItems: "center",
          width: {
            xl: "400px",
            lg: "400px",
            md: "450px",
            sm: "400px",
            xs: "300px",
          },
          height: "auto",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "350px",
              lg: "350px",
              md: "350px",
              sm: "350px",
              xs: "300px",
            },
            height: "auto",
            pl: 2,
          }}
        >
          <img
            style={{
              height: "auto",
              width: "100%",
            }}
            src={client1}
            alt="android"
          />
          <Box>
            <Typography sx={TextStyleOne}>Ronak</Typography>
            <Typography sx={TextStyleTwo}>Web Designer</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CaraProjectBoxOurClient;

const TextStyleOne = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "23px",
  lineHeight: "36px",
  letterSpacing: 0.1,
  color: "#0F0F0F",
  textAlign: "left",
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
