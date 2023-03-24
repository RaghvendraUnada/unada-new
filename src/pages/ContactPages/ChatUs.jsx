import { Typography, Box, Paper, Grid } from "@mui/material";
import chat from "../../assets/Images/Contact/chat.svg";
import arrow from "../../assets/Images/Contact/arrow.svg";
import phone from "../../assets/Images/Contact/phone.svg";
import Frame from "../../assets/Images/Contact/Frame.svg";
import send from "../../assets/Images/Contact/send.svg";
export default function ChatUs(props) {
  return (
    <Paper elevation={0} sx={{ marginTop: "-3px" }}>
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={6}
          sm={6}
          sx={{
            ...manageGrid,
            borderLeft: "0.5px solid rgba(163, 163, 163, 0.3)",
          }}
        >
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
            <Box
              sx={{
                padding: {
                  xl: "2.5rem",
                  lg: "2.5rem",
                  md: "2.0rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              <img
                src={chat}
                alt="chat"
                style={{
                  height: "auto",
                  minwidth: "10%",
                  marginBottom: "1.5rem",
                }}
              />

              <Typography
                sx={{
                  ...boxText,
                  width: {
                    xl: "40%",
                    lg: "40%",
                    md: "70%",
                    sm: "70%",
                    xs: "100%",
                  },
                }}
              >
                Chat to us.
              </Typography>
            </Box>
          </Grid>
          {props?.showArrow ? (
            <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexWrap: "wrap",
                  padding: {
                    xl: "2.5rem",
                    lg: "2.5rem",
                    md: "2.0rem",
                    sm: "1.8rem",
                    xs: "1.6rem",
                  },
                  zIndex: "10",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img
                  src={arrow}
                  alt="chat"
                  sx={{}}
                  style={{ height: "auto", minwidth: "10%" }}
                />
              </Box>
            </Grid>
          ) : null}
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={6} sm={6} sx={manageGrid}>
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
            <Box
              sx={{
                padding: {
                  xl: "2.5rem",
                  lg: "2.5  rem",
                  md: "2.2rem",
                  sm: "0.5rem",
                  xs: "0.5rem",
                },
              }}
            >
              <img
                src={phone}
                alt="phone"
                style={{
                  height: "auto",
                  minwidth: "10%",
                  marginBottom: "1.5rem",
                }}
              />
              <Box
                sx={{
                  width: {
                    xl: "140%",
                    md: "100%",
                    sm: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    ...boxText,
                    width: {
                      xl: "40%",
                      lg: "40%",
                      md: "70%",
                      sm: "70%",
                      xs: "100%",
                    },
                  }}
                >
                  Give us a phone call.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {props?.showArrow ? (
            <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexWrap: "wrap",
                  padding: {
                    xl: "2.5rem",
                    lg: "2.5rem",
                    md: "2.0rem",
                    sm: "1.8rem",
                    xs: "1.6rem",
                  },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img
                  src={arrow}
                  alt="chat"
                  style={{ height: "auto", minwidth: "10%" }}
                />
              </Box>
            </Grid>
          ) : null}
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={6}
          sm={6}
          sx={{
            ...manageGrid,
            borderLeft: "0.5px solid rgba(163, 163, 163, 0.3)",
          }}
        >
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
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
              <img
                src={Frame}
                alt="Frame"
                style={{
                  height: "auto",
                  minwidth: "10%",
                  marginBottom: "1.5rem",
                }}
              />
              <Typography
                sx={{
                  ...boxText,
                  width: {
                    xl: "30%",
                    lg: "30%",
                    md: "70%",
                    sm: "70%",
                    xs: "100%",
                  },
                }}
              >
                Book a consultation.
              </Typography>
            </Box>
          </Grid>
          {props?.showArrow ? (
            <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexWrap: "wrap",
                  padding: {
                    xl: "2.5rem",
                    lg: "2.5rem",
                    md: "2.0rem",
                    sm: "1.8rem",
                    xs: "1.6rem",
                  },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img
                  src={arrow}
                  alt="chat"
                  style={{ height: "auto", minwidth: "10%" }}
                />
              </Box>
            </Grid>
          ) : null}
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={6} sm={6} sx={manageGrid}>
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
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
              <img
                src={send}
                alt="send"
                style={{
                  height: "auto",
                  minwidth: "10%",
                  marginBottom: "1.5rem",
                }}
              />
              <Typography
                sx={{
                  ...boxText,
                  width: {
                    xl: "40%",
                    lg: "40%",
                    md: "70%",
                    sm: "70%",
                    xs: "100%",
                  },
                }}
              >
                Drop us an email.
              </Typography>
            </Box>
          </Grid>
          {props?.showArrow ? (
            <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexWrap: "wrap",
                  padding: {
                    xl: "2.5rem",
                    lg: "2.5rem",
                    md: "2.0rem",
                    sm: "1.8rem",
                    xs: "1.6rem",
                  },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img
                  src={arrow}
                  alt="chat"
                  style={{ height: "auto", minwidth: "10%" }}
                />
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  );
}
const boxText = {
  marginTop: "1rem",
  fontWeight: 500,
  lineHeight: {
    xl: "2.5rem",
    lg: "2.5rem",
    md: "2rem",
    sm: "1.8rem",
    xs: "1.6rem",
  },
  fontSize: {
    xl: "2.5rem",
    lg: "2.5rem",
    md: "2rem",
    sm: "1.8rem",
    xs: "1.6rem",
  },
  color: "#0F0F0F",
  fontFamily: "LGRegular",
};
const manageGrid = {
  borderTop: "0.5px solid rgba(163, 163, 163, 0.3)",
  borderRight: "0.5px solid rgba(163, 163, 163, 0.3)",
  height: "100%",
  minHeight: {
    xl: "50vh",
    lg: "50vh",
    md: "50vh",
    sm: "250px",
    xs: "200px",
  },
  p: {
    xl: 6.5,
    lg: 6.5,
    md: 4.5,
    sm: 3.5,
    xs: 3.5,
  },
  borderRadius: "0rem",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  "&:hover": {
    background: "rgba(237, 237, 237, 1)",
    backgroundImage: "linear-gradient(to top, #EDEDED 0%, #EDEDED 100%);",
  },
};
const boxText1 = {
  ...boxText,
  fontSize: {
    xl: "2.5rem",
    lg: "2.5rem",
    md: "2rem",
    sm: "1.8rem",
    xs: "1.6rem",
  },
};
