import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
const ContactUsSection = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let location = useLocation();
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    return await axios
      .post("/contact_us/add_contact_data", {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Message: message,
      })
      .then((res) => {
        alert("Thank You!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (location?.hash === "#section") {
      setTimeout(() => {
        window.scrollTo({ top: 800, behavior: "smooth" });
        navigate("/contact");
      }, [1200]);
    } else if (location?.hash === "#miniSection") {
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: "smooth" });
        navigate("/contact");
      }, [1200]);
    } else {
      return console.log(window.location.pathname);
    }
  }, []);

  // useEffect(() => {
  //   if (history.scrollRestoration) {
  //     history.scrollRestoration = "manual";
  //   } else {
  //     window.onbeforeunload = function () {
  //       window.scrollTo(0, 0);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <form onSubmit={handleSubmitForm}>
      <Grid
        container
        sx={{
          height: "auto",
          minHeight: {
            xs: "80vh",
            sm: "80vh",
            md: "80vh",
            lg: "25vh",
            xl: "25vh",
          },
          borderRadius: "none",
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          py: 5,
        }}
      >
        <Box
          sx={{
            width: {
              xl: "50%",
              lg: "50%",
              md: "50%",
              sm: "80%",
              xs: "80%",
            },
            display: "grid",
            height: "600px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography sx={contacttext}>
              <Fade top duration={1000}>
                Contact Us
              </Fade>
            </Typography>
            <Typography sx={infotext}>
              Got a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible
            </Typography>
          </Box>
          <Box>
            <Typography sx={labeltext}>
              Name:<span style={{ color: "#FF5F5F" }}>*</span>
            </Typography>

            <Box sx={box} id="section">
              <input
                className="contact-box"
                type="text"
                id="standard-textarea"
                label="First name"
                placeholder="First name"
                variant="standard"
                multiline
                style={{
                  height: "60px",
                  width: "50%",
                  color: "black",
                  borderBottom: "2px solid #A7A7A7",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                // {...register("firstname")}
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                className="contact-box"
                id="standard-textarea"
                label="Last name"
                placeholder="Last Name"
                variant="standard"
                multiline
                style={{
                  height: "60px",
                  width: "50%",
                  color: "black",
                  borderBottom: "2px solid #A7A7A7",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                // {...register("lastname")}
                required
              />
            </Box>
          </Box>
          <Box>
            <Typography sx={labeltext}>
              Email:<span style={{ color: "#FF5F5F" }}>*</span>
            </Typography>
            <Box sx={box}>
              <input
                type="text"
                className="contact-box"
                id="standard-textarea"
                label="Email"
                placeholder="Enter your email"
                variant="standard"
                style={{
                  height: "60px",
                  width: "100%",
                  color: "black",
                  borderBottom: "2px solid #A7A7A7",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // {...register("email")}
                required
              />
            </Box>
          </Box>
          <Box>
            <div id="section"></div>
            <Typography sx={labeltext}>Message:</Typography>
            <Box sx={box}>
              <input
                type="text"
                className="contact-box"
                id="standard-textarea"
                label="Email"
                placeholder="Enter your Message"
                variant="standard"
                style={{
                  height: "60px",
                  width: "100%",
                  color: "black",
                  // border: "none",
                  borderBottom: "2px solid #A7A7A7",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                multiline
                // {...register("message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Box>
          </Box>
          <Box sx={ButtonStyle1}>
            <Button
              type="submit"
              sx={{
                textAlign: "center",
                width: "100%",
                borderRadius: "30px",
                color: "#000",
                fontSize: {
                  xl: "15px",
                  lg: "15px",
                  md: "15px",
                  sm: "17px",
                  xs: "17px",
                },
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </form>
  );
};

export default ContactUsSection;

const contacttext = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: {
    xs: "4rem",
    sm: "4rem",
    md: "5rem",
    lg: "5.2rem",
    xl: "5.2rem",
  },
  color: "#0D0D0D",
};

const infotext = {
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 100,
  fontSize: {
    xs: "1.3rem",
    sm: "1.3rem",
    md: "1.3rem",
    lg: "1.4rem",
    xl: "1.4rem",
  },
  color: "#A3A3A3",
  paddingX: {
    // xs: "2rem",
    // sm: "2rem",
    md: "4rem",
    lg: "8rem",
    xl: "8rem",
  },
};

const labeltext = {
  fontFamily: "LGTrial",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  textAlign: "left",
};

const box = {
  display: "flex",
  justifyContent: "center",
  gap: 3,
  width: "100%",
  //   bgcolor: "red",
};

const ButtonStyle1 = {
  textAlign: "center",
  fontFamily: "LGLight",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "15px",
    lg: "15px",
    md: "12px",
    sm: "8px",
    xs: "8px",
  },
  width: "100%",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  borderRadius: "30px",
  border: "1px black solid",
  color: "black",
  "&:hover": {
    opacity: 1,
    color: "#fff",
    background: "black",
  },
};
