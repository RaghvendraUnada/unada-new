import React from "react";
import { Box } from "@mui/material";
import Images from "../assets/Images/MetaVerse/CaraImg1.svg";
const Slider3dNew = () => {
  return (
    <Box
      className="carousel"
      sx={{
        height: "100vh",
        // background: "blue",
        zIndex: 1,
        // width: "auto",
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      {[...Array(5)].map((e, idx) => (
        <Box
          className="carousel-item"
          key={idx}
          sx={{
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            width: {
              xl: "20%",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              scale: {
                xl: "2",
                lg: "2",
                md: "1.7",
                sm: "1.5",
                xs: "1",
              },
              //   borderRadius: "50px",
            }}
            src={Images}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export default Slider3dNew;
