import React, { useState, useRef } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Stack,
  Button,
  TextField,
  MenuItem,
  Select,
  Input,
} from "@mui/material";
import arrows from "../assets/Images/Career/arrows.svg";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Uploadimg from "../assets/uploadicon.svg";
import axios from "axios";
import { json } from "react-router-dom";

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

  const handleFileChange = (event) => {
    // if (fileRegex.test(event.dataTransfer.files[0])) {
    //   const selectedFile = event.dataTransfer.files[0];
    //   console.log(selectedFile);
    // }
    const fileRegex = /([a-zA-Z0-9\s_\.-:])+(.doc|.docx|.pdf)$/;
    if (/jpeg|jpg|png|gif/.test(ext.toLowerCase())) {
      return cb(new Error("Only images are allowed"), false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileChange(event);
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [experience, setExperience] = useState();
  const [skill, setSkill] = useState();
  const [linkedin, setLinkedin] = useState();
  const [file, setFile] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const uploadFileRef = useRef();
  // const [state,setState] = useState()

  const apply = async () => {
    console.log(file);
    console.log(
      firstName,
      lastName,
      email,
      experience,
      skill,
      linkedin,
      file,
      coverLetter
    );
    // const data = {
    //   UserFirstName: firstName,
    //   UserLastName: lastName,
    //   UserEmail: email,
    //   UserExperience: experience,
    //   UserSkills: skill,
    //   UserLinkedInUrl: linkedin,
    //   resume: file,
    //   coverLetter: coverLetter,
    // };

    // return await axios
    //   .post("user_data/apply", data, {
    //     headers: {
    //       "Content-type": "multipart/form-data",
    //       "Content-Length": JSON.stringify(data).length,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // await fetch("http://192.168.29.5:8000/user_data/apply", {
    //   method: "POST",
    //   body: formData,
    //   // headers: {
    //   //   "Content-type": "multipart/form-data",
    //   // },
    // });
    var formdata = new FormData();
    formdata.append("UserLastName", firstName);
    formdata.append("coverLetter", coverLetter[0]);
    formdata.append("resume", file[0]);
    formdata.append("UserFirstName", lastName);
    formdata.append("UserEmail", email);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://unada-backend.unada.in/user_data/apply", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
                  onClick={() => {
                    setOpen(true);
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
      <form>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          sx={{
            width: "100%",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: {
                xl: "95vh",
                lg: "95vh",
              },
              background: "Black",
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                borderBottom: "1px solid #A3A3A3",
                gap: "2rem",
                bgcolor: "",
                p: 2,
              }}
            >
              <IconButton
                edge="end"
                size="large"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: "2rem",
                  top: "2rem",
                }}
              >
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography variant="h6" component="div" sx={ApplyTextStyle}>
                  Applying For {"   "}
                </Typography>
                <Typography sx={PositionsDevText}>
                  {"  "}
                  {positionDevo}
                </Typography>
              </Box>
            </Box>
            <Grid
              container
              sx={{
                height: "80%",
                p: 2,
              }}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: {
                    xl: "1px solid #A3A3A3",
                    lg: "1px solid #A3A3A3",
                    md: "1px solid #A3A3A3",
                    sm: "none",
                    xs: "none",
                  },
                  gap: "2rem",
                }}
              >
                <Typography sx={labeltext}>Name:</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <input
                    // id="standard-textarea"
                    label="First name"
                    placeholder="First name"
                    variant="standard"
                    multiline
                    style={{
                      width: "40%",
                      color: "white",
                    }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    id="standard-textarea"
                    label="Last name"
                    placeholder="Last name"
                    variant="standard"
                    multiline
                    style={{
                      width: "40%",
                      color: "white",
                    }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Box>
                <Typography sx={labeltext}>Email:</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    id="standard-textarea"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    variant="standard"
                    multiline
                    style={{
                      width: "84%",
                      color: "white",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Box>
                <Typography sx={labeltext}>Experience:</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    ml: {
                      xl: "6rem",
                      lg: "6rem",
                      md: "6rem",
                      sm: "2rem",
                      xs: "2rem",
                    },
                  }}
                >
                  <FormControl sx={{ width: "40%" }}>
                    <Select
                      placeholder="select"
                      sx={{
                        color: "white",
                        borderBottom: "1px solid white",
                        "& .Mui-focused": {
                          border: "black",
                        },
                      }}
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"1 Year"}>1 Year</MenuItem>
                      <MenuItem value={"2 Year"}>2 Year</MenuItem>
                      <MenuItem value={"3 Year"}>3 Year</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Typography sx={labeltext}>Skills:</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    ml: {
                      xl: "6rem",
                      lg: "6rem",
                      md: "6rem",
                      sm: "2rem",
                      xs: "2rem",
                    },
                  }}
                >
                  <input
                    id="standard-textarea"
                    label="Skills"
                    placeholder="Skills"
                    variant="standard"
                    multiline
                    style={{
                      width: "40%",
                      color: "white",
                    }}
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    required
                  />
                </Box>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  bgcolor: "black",
                }}
              >
                <Box
                  sx={{
                    mt: 8,
                    gap: "2rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={labeltext}>Linked in url:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      id="standard-textarea"
                      label="Linked in url"
                      type="url"
                      placeholder="Paste URL here"
                      variant="standard"
                      multiline
                      style={{
                        width: "84%",
                        color: "white",
                      }}
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </Box>
                  <Typography sx={labeltext}>Upload your resume:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      ml: {
                        xl: "6rem",
                        lg: "6rem",
                        md: "6rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  >
                    <input
                      type="file"
                      multiple
                      ref={uploadFileRef}
                      style={{ display: "none" }}
                      onChange={(e) => {
                        setFile(e.target.files);
                      }}
                    />
                    {file?.length}
                    <Button
                      sx={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontFamily: "LGTrial",
                        color: "black",
                        background: "#FAFAFA",
                        borderRadius: "none",
                        // "&:hover": {
                        //   background: "#FAFAFA",
                        //   color: "white",
                        // },
                      }}
                      variant="contained"
                      onClick={() => {
                        console.log(uploadFileRef);
                        uploadFileRef.current.click();
                      }}
                    >
                      Choose file
                    </Button>
                  </Box>
                  <Typography sx={labeltext}>Cover letter</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        width: "84%",
                        height: "175px",
                        background: "#4D4D4D",
                        border: "1px dashed #F0F0F0",
                        borderRadius: "4px",
                      }}
                      onDrag={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <img src={Uploadimg} alt="img" />
                      <Typography
                        sx={{
                          fontFamily: "LGTrial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: 12,
                          letterSpacing: 0.171613,
                          color: "#FFFFFF",
                        }}
                      >
                        Drag and drop here
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "LGTrial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: 12,
                          letterSpacing: 0.171613,
                          color: "#FFFFFF",
                        }}
                      >
                        or
                      </Typography>

                      <input
                        type="file"
                        multiple
                        ref={uploadFileRef}
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setCoverLetter(e.target.files);
                        }}
                      />
                      {coverLetter?.length}
                      <Button
                        variant="outlined"
                        component="label"
                        sx={{
                          textTransform: "none",
                          border: "none",
                        }}
                        onClick={() => {
                          console.log(uploadFileRef);
                          uploadFileRef.current.click();
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "LGTrial",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 12,
                            letterSpacing: 0.171613,
                            color: "#0051ED",
                          }}
                        >
                          Browse File
                        </Typography>
                      </Button>
                      <Input
                        type="file"
                        pattern=".+.pdf$"
                        sx={{ display: "none" }}
                        // onChange={handleFileChange}
                        required
                      />
                    </Paper>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                mt: {
                  xl: "0px",
                  lg: "5rem",
                  md: "6rem",
                  sm: "6rem",
                  xs: "6rem",
                },
              }}
            >
              <Button sx={ButtonStyle1} onClick={apply} type="submit">
                Submit
              </Button>
            </Box>
          </Box>
        </Dialog>
      </form>
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
  // marginTop: {
  //   xl: "2rem",
  //   lg: "2rem",
  //   md: "2rem",
  //   sm: "-2rem",
  //   xs: "-2rem",
  // },
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

const labeltext = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
  color: "White",
  marginLeft: {
    xl: "5rem",
    lg: "5rem",
    md: "2rem",
    sm: "2rem",
    xs: "2rem",
  },
};
