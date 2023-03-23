import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import selection from "../pages/Home/home.module.css";

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
  CircularProgress,
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
import vertical from "./vertical.module.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VerticalScroll = ({ positionDevo, pos1, pos2, pos3 }) => {
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const toggleLoader = () => {
    if (!loading) {
      setTimeout(() => {
        setloading(true);
      }, 3000);
      // setloading(true);
    } else {
      setloading(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleFileChange = (event) => {
  //   // if (fileRegex.test(event.dataTransfer.files[0])) {
  //   //   const selectedFile = event.dataTransfer.files[0];
  //   //   console.log(selectedFile);
  //   // }
  //   const fileRegex = /([a-zA-Z0-9\s_\.-:])+(.doc|.docx|.pdf)$/;
  //   if (/jpeg|jpg|png|gif/.test(ext.toLowerCase())) {
  //     return cb(new Error("Only images are allowed"), false);
  //   }
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   handleFileChange(event);
  // };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [experience, setExperience] = useState();
  const [skill, setSkill] = useState([]);
  const [linkedin, setLinkedin] = useState();
  const [file, setFile] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const uploadFileRef = useRef();
  const uploadFileRef2 = useRef();
  const [icon1, setIcon1] = useState("white");
  const [border, setBorder] = useState("white");
  const [focus, setFocus] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const coverLetterfile = e.dataTransfer.files[0];
    // alert("File Upload");
    console.log(coverLetterfile);
    setCoverLetter(coverLetterfile);
    console.log(coverLetter);
    // handleFileUpload(file);
  };

  // const [state,setState] = useState()

  const apply = async (e) => {
    e.preventDefault();
    if (firstName === "") {
      alert("please fill firstname");
    } else if (lastName === "") {
      alert("please fill lastname");
    } else if (email === "") {
      alert("please fill email");
    } else if (file === "") {
      alert("please fill file");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setExperience("");
    setSkill("");
    setLinkedin("");
    // setFile("");
    // setCoverLetter("");

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
    formdata.append("UserFirstName", firstName);
    formdata.append("UserLastName", lastName);
    formdata.append("UserEmail", email);
    formdata.append("UserExperience", experience);
    formdata.append("UserSkills", selectedSkill);
    formdata.append("UserLinkedInUrl", linkedin);
    formdata.append("resume", file[0]);
    formdata.append("coverLetter", coverLetter);
    console.log(
      firstName,
      lastName,
      email,
      experience,
      selectedSkill,
      linkedin,
      file[0],
      coverLetter
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://192.168.29.5:8000/user_data/apply", requestOptions)
      // fetch("http://192.168.29.5:8000/user_data/apply", requestOptions)
      .then((response) => {
        alert("data submitted");
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const [searchQuery, setSearchQuery] = useState();

  const [listOfSkillss, setlistOfSkillss] = useState([]);
  const listSkilss = async () => {
    axios
      .get("/skills/get_all_skill")
      .then((response) => {
        console.log("----->", response.data.SkillData[0].Skills);
        setlistOfSkillss(response.data.SkillData[0].Skills);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // var newSkills = "";

  const filterData = () => {
    const filteredData = listOfSkillss?.filter((item) => {
      if (item?.toLowerCase().includes(searchQuery?.toLowerCase())) {
        return item;
      }
    });
    return filteredData;
  };

  useEffect(() => {
    filterData();
    listSkilss();
  }, [searchQuery]);
  // const [searchQuery, setSearchQuery] = useState("");

  const [selectedSkill, setSelectedSkill] = useState([]);

  async function StoreSelectedSkill(props) {
    const isSkillSelected = selectedSkill.includes(props);
    if (isSkillSelected) {
      const newSelectedSkill = selectedSkill.filter((skill) => skill !== props);
      setSelectedSkill(newSelectedSkill);
      setSearchQuery("");
    } else {
      setSelectedSkill([...selectedSkill, props]);
      setSearchQuery("");
    }
  }

  async function removeElement(props) {
    const isSkillSelected = selectedSkill.includes(props);
    if (isSkillSelected) {
      const newSelectedSkill = selectedSkill.filter((skill) => skill !== props);
      setSelectedSkill(newSelectedSkill);
    }
  }

  const [loader, setLoader] = useState(false);

  // console.log(listOfSkill, selectedSkill);

  useEffect(() => {
    listOfSkillss?.includes(selectedSkill);
  }, [selectedSkill]);

  let SkillData = [];

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
              className={selection.zero}
            >
              <Box
                onClick={handleClickOpen}
                sx={ButtonStyle1}
                onMouseOut={() => {
                  setIcon1("white");
                  setBorder("white");
                }}
                onMouseOver={() => {
                  setIcon1("black");
                  setBorder("black");
                }}
              >
                Apply
                <EastSharpIcon
                  fontSize="small"
                  sx={{
                    p: 0.3,
                    ml: 3,
                    color: icon1,
                    fontSize: "20px",
                    borderRadius: "20px",
                    border: `1px solid ${border}`,
                    zIndex: 1,
                  }}
                />
              </Box>
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
            height: "auto",
            width: "100%",
            padding: {
              xl: "2rem",
              lg: "2rem",
              md: "2rem",
              sm: "1rem",
              xs: "1rem",
            },
            backgroundColor: "black",
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
                  top: "0.5rem",
                }}
              >
                {/* <CloseIcon sx={{ color: "white" }} /> */}
                <Typography sx={closeBtn}>Close</Typography>
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
                height: "100%",
                bgcolor: "black",
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
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                  gap: "2rem",
                }}
              >
                <Typography sx={labeltext}>
                  Name:<span style={{ color: "#FF5F5F" }}>*</span>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <input
                    // id="standard-textarea"
                    type="text"
                    label="First name"
                    placeholder="First name"
                    variant="standard"
                    multiline
                    style={{
                      width: "43%",
                      color: "white",
                      borderBottom: "2px solid white",
                    }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    id="standard-textarea"
                    label="Last name"
                    placeholder="Last name"
                    variant="standard"
                    multiline
                    style={{
                      width: "41%",
                      color: "white",
                      borderBottom: "2px solid white",
                    }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Box>
                <Typography sx={labeltext}>
                  Email:<span style={{ color: "#FF5F5F" }}>*</span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    // id="standard-textarea"
                    type="email"
                    label="Email"
                    // type="email"
                    placeholder="Enter your email"
                    variant="standard"
                    multiline
                    style={{
                      // width: {
                      //   xl: "87%",
                      //   lg: "87%",
                      //   md: "87%",
                      //   sm: "95%",
                      //   xs: "94%",
                      // },
                      width: "87%",
                      color: "white",
                      borderBottom: "2px solid white",
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
                    justifyContent: {
                      xl: "left",
                      lg: "left",
                      md: "left",
                      sm: "left",
                      xs: "flex-start",
                    },
                    alignItems: "center",
                    ml: {
                      xl: "5rem",
                      lg: "5rem",
                      md: "8rem",
                      sm: "6rem",
                      xs: "2rem",
                    },
                    width: {
                      xl: "50%",
                      lg: "50%",
                      md: "85%",
                      sm: "85%",
                      xs: "85%",
                    },
                  }}
                >
                  <input
                    // id="standard-textarea"
                    type="number"
                    label="Experience"
                    // type="email"
                    min={0}
                    placeholder="Enter your Experience"
                    variant="standard"
                    multiline
                    style={{
                      width: {
                        xl: "54%",
                        lg: "54%",
                        md: "100%",
                        sm: "100%",
                        xs: "100%",
                      },
                      color: "white",
                      borderBottom: "2px solid white",
                      bgcolor: "red",
                    }}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                  />
                </Box>
                {/* <Box sx={{ background: "red" }}>
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {filterData().map((item) => (
                    <div key={item.name}>
                      <h2>{item.name}</h2>
                      <p>{item.age}</p>
                    </div>
                  ))}
                </Box> */}
                <Typography sx={labeltext}>Skills:</Typography>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "left",
                      lg: "left",
                      md: "left",
                      sm: "left",
                      xs: "flex-start",
                    },
                    alignItems: "center",
                    ml: {
                      xl: "5rem",
                      lg: "5rem",
                      md: "8rem",
                      sm: "6rem",
                      xs: "2rem",
                    },
                    borderBottom: "2px solid white",
                    width: {
                      xl: "50%",
                      lg: "50%",
                      md: "85%",
                      sm: "85%",
                      xs: "85%",
                    },
                    // bgcolor: "red",
                    overflowY: "scroll",
                  }}
                >
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ color: "#fff", border: "none" }}
                  />
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    {searchQuery
                      ? filterData().map((item) => {
                          return (
                            <>
                              <Box
                                sx={{
                                  border: "2px solid grey",
                                  borderRadius: {
                                    xl: "30px",
                                    lg: "30px",
                                    md: "30px",
                                    sm: "15px",
                                    xs: "15px",
                                  },
                                  width: "auto",
                                  p: 0.5,
                                  height: "auto",
                                  color: "#fff",
                                  textAlign: "center",
                                  // p: 1,
                                  mb: 1,
                                  display: "flex",
                                  justifyContent: "center",
                                  gap: "20px",
                                  // position: "relative",
                                  ml: 1,
                                }}
                                onClick={() => {
                                  StoreSelectedSkill(item);
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: "4px",
                                    justifyContent: "space-around",
                                    p: 0.2,
                                    // bgcolor: "red",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      ...skillText,
                                      color: "#fff",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <div key={item}>{item}</div>
                                  </Typography>

                                  {/* <CloseIcon
                                    onClick={() => removeElement(idx)}
                                    sx={{
                                      color: "white",
                                      mt: 0.2,
                                      fontSize: "15px",
                                      textAlign: "left",
                                      cursor: "pointer",
                                    }}
                                  /> */}
                                </Box>
                              </Box>
                            </>
                          );
                        })
                      : null}
                  </Box>
                  {/* <Box
                    sx={{
                      border: "2px solid grey",
                      borderRadius: {
                        xl: "30px",
                        lg: "30px",
                        md: "30px",
                        sm: "15px",
                        xs: "15px",
                      },
                      width: "auto",
                      p: 0.5,
                      height: "auto",
                      color: "#fff",
                      textAlign: "center",
                      // p: 1,
                      mb: 1,
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                      // position: "relative",
                      ml: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                        justifyContent: "space-around",
                        p: 0.2,
                        // bgcolor: "red",
                      }}
                    >
                      <Typography
                        sx={{
                          ...skillText,
                          color: "#fff",
                          fontSize: "1.2rem",
                        }}
                      >
                        {el.skillName}
                      </Typography>

                      <CloseIcon
                        onClick={() => removeElement(idx)}
                        sx={{
                          color: "white",
                          mt: 0.2,
                          fontSize: "15px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </Box> */}
                  {selectedSkill?.map((el, idx) => {
                    return (
                      <>
                        <Box
                          sx={{
                            border: "2px solid grey",
                            borderRadius: {
                              xl: "30px",
                              lg: "30px",
                              md: "30px",
                              sm: "15px",
                              xs: "15px",
                            },
                            width: "auto",
                            p: 0.5,
                            height: "auto",
                            color: "#fff",
                            textAlign: "center",
                            // p: 1,
                            mb: 1,
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            // position: "relative",
                            ml: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: "4px",
                              justifyContent: "space-around",
                              p: 0.2,
                              // bgcolor: "red",
                            }}
                          >
                            <Typography
                              sx={{
                                ...skillText,
                                color: "#fff",
                                fontSize: "1.2rem",
                              }}
                            >
                              {el}
                            </Typography>

                            <CloseIcon
                              onClick={() => removeElement(el)}
                              sx={{
                                color: "white",
                                mt: 0.2,
                                fontSize: "15px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </Box>
                      </>
                    );
                  })}
                </Grid>
                <Grid
                  container
                  sx={{
                    width: {
                      xl: "80%",
                      lg: "80%",
                      md: "50%",
                      sm: "50%",
                      xs: "60%",
                    },
                    // mx: "auto",
                    ml: {
                      xl: "6rem",
                      lg: "6rem",
                      md: "8rem",
                      sm: "6rem",
                      xs: "4rem",
                    },
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "20px",
                    cursor: "pointer",
                    // bgcolor: "red",
                  }}
                  // onClick={listOfSkill}
                >
                  {listOfSkillss?.map((el, idx) => {
                    return (
                      <>
                        <Box
                          sx={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            width: "auto",
                            minWidth: {
                              xl: "15%",
                              lg: "15%",
                              md: "15%",
                              sm: "15%",
                              xs: "40%",
                            },
                            height: "auto",
                            textAlign: "center",
                            p: 0.5,
                            // color: "#fff",
                            // bgcolor: "#fff",
                            // opacity: 0.8,
                            // "&:hover": {
                            //   opacity: 1,
                            // },
                          }}
                          onClick={() => {
                            StoreSelectedSkill(el);
                          }}
                        >
                          <Typography sx={skillText}>{el}</Typography>
                        </Box>
                      </>
                    );
                  })}
                </Grid>
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
                      type="url"
                      label="Linked in url"
                      // type="url"
                      placeholder="Paste URL here"
                      variant="standard"
                      multiline
                      style={{
                        width: "86%",
                        color: "white",
                        borderBottom: "2px solid white",
                      }}
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </Box>
                  <Typography sx={labeltext}>
                    Upload your resume:
                    <span style={{ color: "#FF5F5F" }}>*</span>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      ml: {
                        xl: "5rem",
                        lg: "5rem",
                        md: "6rem",
                        sm: "5rem",
                        xs: "2rem",
                      },
                    }}
                  >
                    {/* {loading ? "Hide Loader" : "Show Loader"} */}
                    <input
                      type="file"
                      accept="application/pdf"
                      multiple
                      // ref={uploadFileRef}
                      style={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontFamily: "LGTrial",
                        color: "white",
                        "&:hover": {
                          background: "#FAFAFA",
                          // color: "white",
                        },
                      }}
                      onChange={(e) => {
                        // // setFile(e.target.files);
                        // setLoader(true);
                        // setTimeout(() => {
                        //   setLoader(false);
                        // }, [2000]);

                        // e.preventDefault();
                        // const resumefile = e.dataTransfer.files[0];
                        // console.log(resumefile);
                        setFile(e.target.files);
                      }}

                      // onClick={() => {
                      //   uploadFileRef.current.click();
                      // }}
                    />
                    <Box
                      sx={{
                        ml: {
                          xl: "6rem",
                          lg: "6rem",
                          md: "6rem",
                          sm: "5rem",
                          xs: "2rem",
                        },
                      }}
                    ></Box>
                    {loader ? (
                      <>
                        <CircularProgress
                          size={"25px"}
                          sx={{ color: "#fff" }}
                        />
                      </>
                    ) : null}

                    {/* {file?.length} */}
                    {/* <Button
                      sx={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontFamily: "LGTrial",
                        color: "black",
                        background: "#FAFAFA",
                        borderRadius: "none",
                        "&:hover": {
                          background: "#FAFAFA",
                          // color: "white",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        console.log(uploadFileRef);
                        uploadFileRef.current.click();
                      }}
                    >
                      Choose file
                    </Button> */}
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
                        width: "85%",
                        height: "175px",
                        background: "#4D4D4D",
                        border: "1px dashed #F0F0F0",
                        borderRadius: "4px",
                        "&:hover": {
                          background: "#4D4D4D",
                          border: "2px dashed #0051ED",
                          borderRadius: "4px",
                          cursor: "pointer",
                        },
                      }}
                      // onDrag={handleDragOver}
                      // onDrop={handleDrop}
                      className={dragOver ? "drag-over" : ""}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      // onClick={() => {
                      //   uploadFileRef2.current.click();
                      // }}
                      // onChange={(e) => {
                      //   setCoverLetter(e.target.files);
                      // }}
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
                      {/* <Typography
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
                      </Typography> */}

                      <input
                        type="file"
                        accept="application/pdf"
                        // ref={uploadFileRef2}
                        style={{ display: "none" }}
                        // onChange={(e) => {
                        //   setCoverLetter(e.target.files);
                        // }}
                      />
                      {coverLetter?.file?.name}
                      {/* <Button
                        variant="outlined"
                        component="label"
                        sx={{
                          textTransform: "none",
                          border: "none",
                        }}
                        onClick={() => {
                          uploadFileRef2.current.click();
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
                      </Button> */}
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
                  lg: "3rem",
                  // md: "8rem",
                  sm: "-4rem",
                  xs: "-6rem",
                },
                p: 2,
              }}
            >
              <Button sx={ButtonStyle1} type="submit" onClick={apply}>
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
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
const ButtonStyle1 = {
  cursor: "pointer",
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
    xl: "1rem 5.8rem",
    lg: "1rem 5.8rem",
    md: "0.8rem 5.5rem",
    sm: "0.8rem 5.5rem",
    xs: "0.8rem 5.5rem",
  },
  // background: "transparent",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  alignContent: "center",
  borderRadius: "30px",
  border: "2px rgba(255, 255, 255, 1) solid",
  color: "rgba(255, 255, 255, 1)",

  opacity: 0.8,

  "&:hover": {
    opacity: 1,
    color: "black",
    backgroundColor: "#fff",
    scale: 1,
  },
  "&:focus": {
    opacity: 1,
    color: "white",
    bgcolor: "white",
    scale: 1,
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
  "::selection": {
    WebkitTextFillColor: "black",
    color: "black",
    background: "white",
  },
};
const ApplyTextStyle = {
  fontFamily: "LGThin",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: {
    xl: "2.3rem",
    lg: "2.3rem",
    md: "2.3rem",
    sm: "1.9rem",
    xs: "1.8rem",
  },
  lineHeight: "36px",
  letterSpacing: 0.1,
  color: "#FFFFFF",
};
const PositionsDevText = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "3.2rem",
    lg: "3.2rem",
    md: "3.2rem",
    sm: "2.9rem",
    xs: "2.8rem",
  },
  lineHeight: "36px",
  letterSpacing: 0.1,

  color: "#FFFFFF",
};

const labeltext = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "1.9rem",
    xs: "1.9rem",
  },
  color: "White",
  marginLeft: {
    xl: "5rem",
    lg: "5rem",
    md: "7rem",
    sm: "5rem",
    xs: "2rem",
  },
};

const skillText = {
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: {
    xl: "1.2rem",
    lg: "1.2rem",
    md: "1.2rem",
    sm: "1rem",
    xs: "1rem",
  },
  color: "White",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
};

const closeBtn = {
  fontFamily: "LGRegular",
  textTransform: "none",
  fontSize: { xl: "24px", lg: "24px", md: "23px", sm: "20px", xs: "18px" },
  fontStyle: "normal",
  fontWeight: 400,
  mb: "5px",
  color: "#fff",
  "&:hover": {
    bgcolor: "transparent",
    textDecoration: "line-through",
  },
  // ml: "2.3%",
};
