import React from "react";
import { Typography, Box, Paper, Grid, Stack } from "@mui/material";
import arrwhite from "../../assets/Images/Contact/arrwhite.svg";
import { Link } from "react-router-dom";
const Jobs = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "auto",
        minHeight: {
          xl: "180px",
          lg: "180px",
          md: "150px",
          sm: "120px",
          xs: "120px",
        },
        background: "#000",
        paddingTop: {
          xl: "11.7rem",
          lg: "11.7rem",
          md: "11.7rem",
          xs: "4rem",
          sm: "4rem",
        },
        paddingBottom: {
          xl: "11.7rem",
          lg: "11.7rem",
          md: "11.7rem",
          xs: "4rem",
          sm: "4rem",
        },
        paddingLeft: {
          xl: "5.2rem",
          lg: "5.2rem",
          md: "5.2rem",
          xs: "1rem",
          sm: "1rem",
        },
        paddingRight: {
          xl: "5.2rem",
          lg: "5.2rem",
          md: "5.2rem",
          xs: "1rem",
          sm: "1rem",
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          //   sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              padding: {
                xl: "2.5rem",
                lg: "2.5rem",
                md: "2.0rem",
                sm: "0.5rem",
                xs: "0.5rem",
              },
            }}
          >
            <Typography sx={text}>Unada Jobs</Typography>
            <Typography sx={text1}>View our open position.</Typography>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: {
                xl: "2.5rem",
                lg: "2.5rem",
                md: "2.0rem",
                sm: "1.8rem",
                xs: "1.6rem",
              },
              marginTop: {
                xl: "2.2rem",
                lg: "2.1rem",
                md: "1.6rem",
                sm: "0.5rem",
                xs: "-0.5rem",
              },
            }}
          >
            <Link to={"/careers"}>
              <img
                src={arrwhite}
                alt="chat"
                className="chat-arrow-img"
                style={{
                  height: "auto",
                  minwidth: "1%",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Jobs;

const text = {
  fontSize: {
    xl: "3.6rem",
    lg: "3.6rem",
    md: "3.1rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  lineHeight: {
    xl: "3rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  fontWeight: 400,
  fontFamily: "LGRegular",
  color: "#fff",
};

const text1 = {
  fontSize: {
    xl: "2.2rem",
    lg: "2.1rem",
    md: "1.6rem",
    sm: "1.2rem",
    xs: "1.1rem",
  },
  lineHeight: {
    xl: "3rem",
    lg: "3rem",
    md: "2.6rem",
    sm: "2.2rem",
    xs: "2.1rem",
  },
  marginTop: "1.5rem",
  fontWeight: 400,
  fontFamily: "LGThin",
  color: "#fff",
};
