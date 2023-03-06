import { Paper, Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const ContactUsSection = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    return await axios
      .post("/contact_us/add_contact_data", {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const section = document.getElementById("section");
    section.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Grid
      container
      sx={{
        height: "auto",
        minHeight: {
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
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
          //   bgcolor: "red",
        }}
      >
        <Box>
          <Typography sx={contacttext}>Contact Us</Typography>
          <Typography sx={infotext}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Typography>
        </Box>
        <Box>
          <Typography sx={labeltext}>
            Name:<span style={{ color: "#FF5F5F" }}>*</span>
          </Typography>

          <Box sx={box}>
            <input
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
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
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
              required
            />
          </Box>
        </Box>
        <Box>
          <div id="section"></div>
          <Typography sx={labeltext}>Message:</Typography>
          <Box sx={box}>
            <input
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Box>
        </Box>

        <Button sx={ButtonStyle1} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Grid>
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
    xs: "1rem",
    sm: "1rem",
    md: "1.2rem",
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
