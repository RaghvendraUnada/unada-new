import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";
import chat from "../../assets/Images/Contact/chat.svg";
import arrow from "../../assets/Images/Contact/arrow.svg";
import phone from "../../assets/Images/Contact/phone.svg";
import Frame from "../../assets/Images/Contact/Frame.svg";
import send from "../../assets/Images/Contact/send.svg";
import Dialog from "@mui/material/Dialog";
import call from "../../assets/Images/Career/call.svg";
import clipboard from "../../assets/Images/Career/clipboard.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import location from "../../assets/Images/Career/location.svg";
import whatsappiucon from "../../assets/Images/Career/whatsappiucon.svg";
import cross from "../../assets/Images/Career/cross.svg";
import { Link } from "react-router-dom";
export default function ChatUs(props) {
  const [open, setOpen] = React.useState(false);
  const [copyText, setCopyText] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert("Copied");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            onClick={handleClickOpen}
          >
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
              <Paper sx={{ display: "flex", justifyContent: "center" }}>
                {open ? (
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{
                      borderRadius: "2.2rem",
                      minWidth: "510px",
                      maxWidth: "510px",
                      height: "auto",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      top: "0%",
                      left: "35%",
                      // background: "red",
                    }}
                  >
                    <DialogTitle
                      id="alert-dialog-title"
                      sx={{ position: "relative" }}
                    >
                      <Typography sx={contactUs}>CONNECT TO US</Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "35%",
                          right: "5%",
                          cursor: "pointer",
                        }}
                        onClick={handleClose}
                      >
                        <img
                          src={cross}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </Box>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={call}
                            style={{ width: "auto", height: "auto" }}
                          />
                          <Typography sx={callUs}>Call us</Typography>
                        </Box>
                        <Typography sx={phNo}>+91 989898989</Typography>
                        <Link to="https://api.whatsapp.com/send/?phone=918980298568&text&type=phone_number&app_absent=0">
                          <Box sx={{ display: "flex" }}>
                            <Button sx={wtspBtn} fullWidth>
                              CONNECT TO US ON WHATSAPP
                              <img
                                src={whatsappiucon}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </Button>
                          </Box>
                        </Link>
                      </DialogContentText>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          mt: 3,
                          // m: 1,
                        }}
                      >
                        <Typography sx={pageLink}>Page link</Typography>
                      </Box>
                      {/* <TextField
                    sx={{ mt: 2 }}
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="end">
                          <img
                            src={clipboard}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  /> */}

                      <FormControl
                        sx={{ m: 0, width: "72ch", mt: 1 }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Page Link
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "link"}
                          // defaultValue="https://wa.me/919898989898"
                          // disabled
                          onChange={(e) => setCopyText(e.target.value)}
                          endAdornment={
                            <InputAdornment
                              position="end"
                              onClick={handleCopy}
                              sx={{ cursor: "pointer" }}
                            >
                              <ContentCopyIcon
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              ></ContentCopyIcon>
                            </InputAdornment>
                          }
                          label="Link"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                          }}
                        >
                          <img
                            src={location}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </Box>
                        <Typography sx={address}>
                          550, Beside Star Bazaar, Satellite, Ahmedabad, Gujarat
                          380015
                        </Typography>
                      </FormControl>
                    </DialogContent>
                  </Dialog>
                ) : null}
              </Paper>
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

const contactUs = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 19,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const callUs = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 15,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const phNo = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 15,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
  lineHeight: "4rem",
};

const wtspBtn = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 15,
  textAlign: "center",
  letterSpacing: 0.01,
  p: 1.5,
  textDecorationLine: "underline",
  color: "#68ED72",
  borderRadius: "0.8rem",
  backgroundColor: "rgba(60, 173, 156, 1)",
  mt: 2,
  textDecoration: "none",
  gap: "15px",
  "&:hover": {
    backgroundColor: "rgba(60, 173, 156, 1)",
  },
};

const pageLink = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 15,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const address = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: 16,
  textAlign: "center",
  color: "#0D0D0D",
  width: "95%",
  mx: "auto",
};
