import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Close from "../../assets/Images/Header/CloseButton.svg";
import OpenButton from "../../assets/Images/Header/MenuIcon.svg";
import OpenButtonWhite from "../../assets/Images/Header/MenuIconWhite.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HeaderStyles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import arrowheader from "../../assets/Images/Header/arrowheader.svg";
import { HiArrowRight } from "react-icons/hi";
import Logo from "../../assets/Images/Header/Logo.png";
import WhiteLogo from "../../assets/Images/Header/unada-logo.png";
import { LineAxisOutlined } from "@mui/icons-material";

const Header = () => {
  useEffect(() => {}, [useLocation().pathname]);

  return (
    <Paper
      sx={{
        left: "auto",
        right: "auto",
        width: "100%",
        height: "auto",
        maxWidth: "1800px",
        transition: "all 1s ",
        bgcolor: "transparent",
        position: "absolute",
        zIndex: 100000,
        borderRadius: "0px",
        overflowY: "scroll",
      }}
      elevation={0}
    >
      {!open ? (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: scrollState ? "60px" : "60px",
            width: "100%",
            transition: "all 1s",
            maxWidth: "1800px",
            minWidth: "99vw",
            bgcolor: "transparent",
            borderRadius: "0px",
            mt: scrollState ? "0%" : "1%",
          }}
          elevation={0}
        >
          <Paper
            sx={{
              width: "95%",
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "transparent",
            }}
            elevation={0}
          >
            <Link to={"/"} style={{ textDecoration: "none", margin: "auto" }}>
              {location === "/metaVerse" ||
              location === "/home" ||
              location === "/ArVr" ||
              location === "/service" ||
              location === "/blockchain" ||
              location === "/contact" ? (
                <img
                  src={WhiteLogo}
                  width="45px"
                  height={"auto"}
                  alt={location}
                  style={{ marginTop: "7px" }}
                />
              ) : (
                <img
                  src={Logo}
                  width="40px"
                  height={"auto"}
                  alt={location}
                  style={{ marginTop: "8px" }}
                />
              )}
            </Link>
            {!open ? (
              <Button
                disableRipple
                sx={{ ...ButtonStyle, mt: 0.75 }}
                onClick={() => setOpen(true)}
              >
                {location === "/metaVerse" ||
                location === "/home" ||
                location === "/ArVr" ||
                location === "/service" ||
                location === "/blockchain" ||
                location === "/contact" ? (
                  <img
                    src={OpenButtonWhite}
                    style={{
                      width: "90%",
                      height: "auto",
                      maxWidth: "35px",
                    }}
                    alt="whyChooseUsimg"
                    className={HeaderStyles.MenuIcon}
                  />
                ) : (
                  <img
                    style={{
                      width: "90%",
                      height: "auto",
                      maxWidth: "28px",
                    }}
                    alt="whyChooseUsimg"
                    className={HeaderStyles.MenuIcon}
                  />
                )}
              </Button>
            ) : (
              <Button
                disableRipple
                sx={ButtonStyle}
                onClick={() => setOpen(false)}
              >
                <img
                  alt="Close"
                  style={{ width: "90%", height: "auto", maxWidth: "35px" }}
                />
              </Button>
            )}
            <Box
              sx={ContactUsButton}
              onClick={() => {
                navigate("/contact");
              }}
            >
              <img
                src={arrowheader}
                alt="arrow"
                style={{ height: "auto", width: "15px" }}
              />
            </Box>
          </Paper>
        </Paper>
      ) : null}
      <Paper
        sx={{
          width: "100%",
          height: "90%",
          minHeight: "98vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: open ? "0vh" : "-100vh",
          transition: "all 1s ",
        }}
        elevation={0}
      >
        <Paper
          sx={{
            width: "95%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "transparent",
          }}
          elevation={0}
        >
          <Link to={"/"} style={{ textDecoration: "none", margin: "auto" }}>
            <img
              src={Logo}
              width="40px"
              height={"auto"}
              style={{ marginTop: "10px" }}
            />
          </Link>

          <Button disableRipple sx={ButtonStyle} onClick={() => setOpen(false)}>
            <img
              alt="Close"
              style={{
                width: "75%",
                height: "auto",
                marginTop: "10px",
                maxWidth: "22px",
              }}
            />
          </Button>
        </Paper>
        <List sx={{ py: 5, height: "80vh", overflowY: "scroll" }}>
          <ListItem
            sx={{
              cursor: "pointer",
              borderTop: "1px solid #DBDBDB",
              borderBottom: "1px solid #DBDBDB",
              "&:hover": {
                borderTop: "1px solid #000",
                borderBottom: "1px solid #000",
              },
            }}
          >
            <Link
              onClick={() => {
                setOpen(false);
                setLocationData("/");
              }}
              className={
                location === "/"
                  ? HeaderStyles.navbarListTextActive
                  : HeaderStyles.navbarListText
              }
              to="/"
            >
              Home
            </Link>
          </ListItem>

          <ListItem
            sx={{
              cursor: "pointer",
              borderBottom: "1px solid #DBDBDB",
              "&:hover": {
                borderBottom: "1px solid #000",
                borderTop: "1px solid #000",
              },
            }}
          >
            <Link
              onClick={() => {
                setOpen(false);
                setLocationData("/careers");
              }}
              className={
                location === "/careers"
                  ? HeaderStyles.navbarListTextActive
                  : HeaderStyles.navbarListText
              }
              to="/careers"
            >
              Careers
            </Link>
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              borderBottom: "1px solid #DBDBDB",
              "&:hover": {
                borderBottom: "1px solid #000",
                borderTop: "1px solid #000",
              },
            }}
          >
            <Link
              onClick={() => {
                setOpen(false);
                setLocationData("/contact");
              }}
              className={
                location === "/contact"
                  ? HeaderStyles.navbarListTextActive
                  : HeaderStyles.navbarListText
              }
              style={LinkStyles}
              to="/contact"
            >
              Contact us
            </Link>
          </ListItem>
        </List>
      </Paper>
    </Paper>
  );
};

export default Header;

const ButtonStyle = {
  color: "black",
  fontFamily: "Inter",
  mt: "07px",
  fontSize: "12px",
  width: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  height: { xl: "35px", lg: "35px", md: "33px", sm: "30px", xs: "20px" },
  "&:hover": {
    bgcolor: "transparent",
  },
  "&:focus": {
    bgcolor: "transparent",
  },
  ml: "2.3%",
};
const LinkStyles = {
  textDecoration: "none",
};

const ContactUsButton = {
  width: "123px",
  height: "30px",
  background: " #FFFFFF",
  borderRadius: "8px",
  px: 0,
  zIndex: 0,
  mt: 1,
  justifyContent: "space-evenly",
  cursor: "pointer",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
  WebkitBoxShadow: "7px 7px 36px -1px rgba(0,0,0,0.75)",
  MozBoxShadow: "7px 7px 36px -1px rgba(0,0,0,0.75)",
  boxShadow: "7px 7px 36px -1px rgba(0,0,0,0.75)",
};

const ContactUsText = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  background:
    "linear-gradient( to left,rgba(209, 51, 232, 1) 0%,  11.84210553765297%,rgba(114, 49, 191, 1) 23.68421107530594%,34.21052619814873%,rgba(64, 25, 132, 1) 44.736841320991516%,55.04385977983475%,rgba(29, 12, 64, 1) 65.35087823867798%,72.14912474155426%,rgba(81, 5, 43, 1) 78.94737124443054%,89.47368562221527%,rgba(192, 1, 81, 1) 100%)",
  textTransform: "none",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
};
