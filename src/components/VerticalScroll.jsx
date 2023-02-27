import React, { useState } from "react";
import { Typography, Box, Paper, Grid, Stack, Button } from "@mui/material";
import arrows from "../assets/Images/Career/arrows.svg";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const VerticalScroll = ({ positionDevo, pos1, pos2, pos3 }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={scrolltext}>
        <Box
          sx={{
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "15px",
            borderBottom: "1px solid rgba(163, 163, 163, 0.3)",
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              sx={{
                padding: {
                  xl: "4rem 0rem 4rem 0rem",
                  lg: "2rem 0rem 2rem 0rem",
                  md: "2rem 0rem 2rem 0rem",
                  sm: "35px",
                  xs: "30px",
                },
              }}
            >
              <Typography sx={textPos}>{positionDevo}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: {
                    xl: "left",
                    lg: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                  gap: "1rem",
                  // width: "70%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: {
                    xl: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Button sx={ButtonStyle}>{pos1}</Button>
                <Button sx={ButtonStyle}>{pos2}</Button>
                <Button sx={ButtonStyle}>{pos3}</Button>
              </Box>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              sx={{
                //   padding: "0px",
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "flex-end",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: {
                  xl: "end",
                  lg: "end",
                  md: "end",
                  sm: "center",
                  xs: "center",
                },
                textAlign: {
                  xl: "right",
                  lg: "right",
                  md: "right",
                  sm: "center",
                  xs: "center",
                },
                marginTop: "0.5rem",
              }}
            >
              <Button sx={ButtonStyle1} onClick={handleClickOpen}>
                Apply
                <span
                  style={{
                    height: "35px",
                    width: "35px",
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "18px",
                  }}
                >
                  <img
                    src={arrows}
                    alt="arr"
                    style={{ height: "auto", width: "20px" }}
                  />
                </span>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ width: "100%", height: "100%", padding: "2rem" }}
      >
        {/* <AppBar sx={{ position: "relative" }}> */}
        {/* <Toolbar> */}
        <Box
          sx={{
            width: "100%",
            height: "95vh",
            background: "red",
            zIndex: 100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              borderBottom: "1px solid yellow",
            }}
          >
            <Typography variant="h6" component="div" sx={ApplyTextStyle}>
              Applying For {"   "}
            </Typography>
            <Typography sx={PositionsDevText}>
              {"  "}
              {positionDevo}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          {/* </Toolbar> */}
          {/* </AppBar> */}
          <List>
            <ListItem>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List>
        </Box>
      </Dialog>
    </>
  );
};

export default VerticalScroll;
const scrolltext = {
  fontSize: { xl: "5rem", lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
  fontFamily: "LGRegular",
  letterSpacing: "0.1rem",
};
const ButtonStyle = {
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: {
    xl: "12px",
    lg: "12px",
    md: "10px",
    sm: "10px",
    xs: "10px",
  },
  textAlign: { lg: "left", xl: "left", md: "left", sm: "center", xs: "center" },
  padding: "0rem 1rem",
  letterSpacing: 0.01,
  borderRadius: "30px",
  border: "1px grey solid",
  color: "rgba(255, 255, 255, 0.5)",
  textTransform: "capitalize",
  marginTop: "2rem",
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
};
const ButtonStyle1 = {
  textTransform: "capitalize",
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: {
    xl: "15px",
    lg: "15px",
    md: "12px",
    sm: "8px",
    xs: "8px",
  },
  padding: {
    xl: "0.3rem 2rem",
    lg: "0.3rem 2rem",
    md: "0.3rem 2rem",
    sm: "0.3rem 2rem",
    xs: "0.3rem 2rem",
  },
  background: "transparent",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  alignContent: "center",
  borderRadius: "30px",
  border: "2px rgba(255, 255, 255, 1) solid",
  color: "rgba(255, 255, 255, 1)",
  marginTop: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "0rem",
    xs: "0rem",
  },
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
    // color: "black",
    // background: "white",
  },
};

const textPos = {
  fontSize: {
    xl: "2.3rem",
    lg: "2.3rem",
    md: "2.3rem",
    sm: "2.3rem",
    xs: "2.3rem",
  },
  fontFamily: "LGRegular",
  fontWeight: 500,

  textAlign: { lg: "left", xl: "left", md: "left", sm: "center", xs: "center" },
};
const ApplyTextStyle = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "23px",
  lineHeight: "36px",
  letterSpacing: 0.1,
  color: "#FFFFFF",
};
const PositionsDevText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "36px",
  letterSpacing: 0.1,

  color: "#FFFFFF",
};
