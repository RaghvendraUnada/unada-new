import { Typography, Box, Paper, Grid } from "@mui/material";
import chat from "../../assets/Images/Contact/chat.svg";
import arrow from "../../assets/Images/Contact/arrow.svg";
import phone from "../../assets/Images/Contact/phone.svg";
import Frame from "../../assets/Images/Contact/Frame.svg";
import send from "../../assets/Images/Contact/send.svg";
export default function ChatUs(props) {
  return (
    <Paper elevation={0}>
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
            // borderLeft: "0.5px solid rgba(163, 163, 163, 0.3)",
          }}
        >
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
            <Box
              sx={{
                padding: {
                  xl: "1.5rem",
                  lg: "1.5rem",
                  md: "1rem",
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
                }}
              >
                Chat to us
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
                  xl: "1.5rem",
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "1rem",
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
            // borderLeft: "0.5px solid rgba(163, 163, 163, 0.3)",
          }}
        >
          <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
            <Box
              sx={{
                padding: {
                  xl: "1.5rem",
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "1rem",
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
                  xl: "1.5rem",
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "1rem",
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
  // marginTop: "1rem",
  //   width: { xl: "30%", lg: "30%", md: "30%", sm: "60%", xs: "80%" },
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
  //   borderTop: "0.5px solid rgba(163, 163, 163, 0.3)",
  //   borderTop: "0.5px solid rgba(163, 163, 163, 0.3)",
  height: "50vh",

  minHeight: {
    xl: "300px",
    lg: "300px",
    md: "300px",
    sm: "250px",
    xs: "200px",
  },
  maxHeight: {
    xl: "400px",
    lg: "400px",
    md: "400px",
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
    // background: "rgba(237, 237, 237, 1)",
    // backgroundImage: "linear-gradient(-20deg, #00CDAC 0%, #8DDAD5 100%)",
    // backgroundImage:
    backgroundImage: "linear-gradient(to top, #EDEDED 0%, #EDEDED 100%);",
  },
};

const boxText1 = {
  ...boxText,
  //   width: { xl: "100%", lg: "100%", md: "40%", sm: "50%", xs: "100%" },
  fontSize: {
    xl: "2.5rem",
    lg: "2.5rem",
    md: "2rem",
    sm: "1.8rem",
    xs: "1.6rem",
  },
};
const boxText2 = {
  ...boxText,
  //   width: { xl: "50%", lg: "50%", md: "40%", sm: "50%", xs: "100%" },
};
const boxText3 = {
  ...boxText,
  //   width: { xl: "50%", lg: "50%", md: "40%", sm: "50%", xs: "100%" },
};
