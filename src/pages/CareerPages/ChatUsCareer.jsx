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
  DialogActions,
  Modal,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

import React, { useState } from "react";
import PropTypes from "prop-types";
import chat from "../../assets/Images/Contact/chat.svg";
import arrow from "../../assets/Images/Contact/arrow.svg";
import phone from "../../assets/Images/Contact/phone.svg";
import Frame from "../../assets/Images/Contact/Frame.svg";
import send from "../../assets/Images/Contact/send.svg";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import call from "../../assets/Images/Career/call.svg";
import clipboard from "../../assets/Images/Career/clipboard.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import location from "../../assets/Images/Career/location.svg";
import whatsappiucon from "../../assets/Images/Career/whatsappiucon.svg";
import cross from "../../assets/Images/Career/cross.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export default function ChatUs(props) {
  const [open, setOpen] = React.useState(false);
  const [copyText, setCopyText] = useState("");
  // const handleCopy = () => {
  //   navigator.clipboard.writeText(copyText);
  //   alert("Copied");
  // };
  const handleCopy = () => {
    navigator.clipboard.writeText("https://wa.me/919898989898");
    alert("Copied");
  };
  const handleClickOpen = () => {
    setOpen(!open);
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
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={6}
          sm={6}
          onClick={handleClickOpen}
          sx={{ ...manageGrid, cursor: "pointer" }}
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            // onClick={handleClickOpen}
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
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Box>
                      <Typography sx={contactUs}>CONNECT TO US</Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          top: {
                            xl: "8%",
                            lg: "8%",
                            md: "8%",
                            sm: "8%",
                            xs: "5%",
                          },
                          right: "5%",
                          cursor: "pointer",
                        }}
                        onClick={handleClickOpen}
                      >
                        <img
                          src={cross}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                          mt: { xl: 5, lg: 5, md: 5, sm: 4, xs: 3 },
                        }}
                      >
                        <img
                          src={call}
                          style={{ width: "auto", height: "auto" }}
                        />
                        <Typography sx={callUs}>Call us</Typography>
                      </Box>
                      <Typography sx={phNo}>+91 989898989</Typography>
                    </Box>
                    <a
                      href="https://api.whatsapp.com/send/?phone=918980298568&text&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <Box sx={{ display: "flex" }}>
                        <Button sx={wtspBtn} fullWidth>
                          CONNECT TO US ON WHATSAPP
                          <img
                            src={whatsappiucon}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </Button>
                      </Box>
                    </a>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        mt: 3,
                      }}
                    >
                      <Typography sx={pageLink}>Page link</Typography>
                    </Box>
                    <Box sx={copyTextDes}>
                      <Box
                        sx={{
                          display: "flex",
                          // gap: "80px",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={linkText}>
                          https://wa.me/919898989898
                        </Typography>
                        <Box
                          sx={{
                            p: 0.5,
                            cursor: "pointer",
                            display: "flex",
                            // justifyContent: "flex-end",
                          }}
                          onClick={handleCopy}
                        >
                          <LightTooltip title="Copy" placement="top">
                            <ContentCopyIcon
                              sx={{
                                fontSize: "20px",
                                color: "rgba(110, 110, 110, 1)",
                              }}
                            />
                          </LightTooltip>
                        </Box>
                      </Box>
                    </Box>
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
                  </Box>
                </Modal>
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
  fontSize: {
    xl: "1.9rem",
    lg: "1.9rem",
    md: "1.9rem",
    sm: "1.8rem",
    xs: "1.8rem",
  },
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const callUs = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "1.5rem",
    lg: "1.5rem",
    md: "1.5rem",
    sm: "1.4rem",
    xs: "1.4rem",
  },
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const phNo = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "1.5rem",
    lg: "1.5rem",
    md: "1.5rem",
    sm: "1.4rem",
    xs: "1.4rem",
  },
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
  lineHeight: "4rem",
};

const wtspBtn = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "1.5rem",
    lg: "1.5rem",
    md: "1.5rem",
    sm: "1.4rem",
    xs: "1.4rem",
  },
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
  fontSize: {
    xl: "1.5rem",
    lg: "1.5rem",
    md: "1.5rem",
    sm: "1.4rem",
    xs: "1.4rem",
  },
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#000000",
};

const address = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: {
    xl: "1.6rem",
    lg: "1.6rem",
    md: "1.6rem",
    sm: "1.5rem",
    xs: "1.5rem",
  },
  textAlign: "center",
  color: "#0D0D0D",
  width: "100%",
  mx: "auto",
};

const copyTextDes = {
  height: "30%",
  width: "100%",
  minHeight: "10px",
  backgroundColor: "rgba(246, 246, 246, 1)",
  borderRadius: "8px",
  mt: 1,
  p: 1.5,
};

const linkText = {
  fontFamily: "Labil Grotesk Trial",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 17,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#898989",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xl: 400, lg: 400, md: 400, sm: 400, xs: 300 },
  // height: { sm: 400, xs: 300 },
  // height: 300,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "20px",
  p: { xl: 3, lg: 3, md: 3, sm: 3, xs: 1.5 },
};
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
