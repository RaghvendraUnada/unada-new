import React from "react";
import { Grid, Typography } from "@mui/material";
import MobileIcon from "../../assets/Images/Career/MobileIcon.svg";
import WebDevIcon from "../../assets/Images/Career/WebDevIcon.svg";
import DevIcon1 from "../../assets/Images/Career/DevIcon1.svg";
import DevIcon2 from "../../assets/Images/Career/DevIcon2.svg";
import DevIcon3 from "../../assets/Images/Career/DevIcon3.svg";
import DevIcon4 from "../../assets/Images/Career/DevIcon4.svg";
import styles from "./OurTeam.module.css";
const OurTeams = () => {
  return (
    <Grid
      container
      sx={{
        background: "#000",

        // marginTop: "10rem",
        // padding: "2rem 2rem",
        // borderBottom: "1px solid white",
      }}
    >
      <Grid
        container
        sx={{
          borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          padding: "7.7rem",
        }}
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography sx={ourTeamText}>Our Teams</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: {
            xl: "70%",
            lg: "70%",
            md: "90%",
            sm: "90%",
            xs: "90%",
          },
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginTop: "9rem",
          padding: "1.12rem",
        }}
      >
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={WebDevIcon}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
            // style={{ marginBottom: "9rem" }}
          />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={MobileIcon}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
            // style={{ marginBottom: "9rem" }}
          />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={DevIcon1}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
          />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={DevIcon2}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
          />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={DevIcon3}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
          />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{ marginBottom: "9rem" }}
        >
          <img
            src={DevIcon4}
            alt="Mobile Icon"
            className={styles.ourTeamIcons}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurTeams;
const ourTeamText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "80px",
    lg: "75px",
    md: "65px",
    sm: "45px",
    xs: "30px",
  },
  lineHeight: {
    xl: "85px",
    lg: "75px",
    md: "65px",
    sm: "45px",
    xs: "35px",
  },
  letterSpacing: 0.01,
  color: "#FFFFFF",
  textAlign: "center",
};
