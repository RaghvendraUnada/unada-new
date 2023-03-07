import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import ClientMarquee from "../../components/Maarquee/ClientMarquee";
import ClientMarqueeLeftToRight from "../../components/Maarquee/ClientMarqueeLeftToRight";
import "./OurTeam.css";
import { useEffect } from "react";
import axios from "axios";

const OurClients = () => {
  const [post, setPost] = React.useState();

  React.useEffect(() => {
    axios.get("/clients/get_clients").then((response) => {
      setPost(response.data);
      console.log("===>", post);
    });
  }, []);
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0px",
        bgcolor: "#000",
        height: "100%",
        minHeight: "700px",
        maxHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          minHeight: "200px",
          maxHeight: "300px",
          maxWidth: "600px",
          mx: "auto",
          mt: 0,
          pt: 10,
        }}
      >
        <Typography sx={ParentTextStyle}>Our Clients</Typography>
        <Typography sx={ChildTextStyle}>
          We integrate with the tools you love. So you'll be that much more
          efficient when hiring your crew for your next mission to space.
        </Typography>
      </Box>
      <Box sx={{ minHeight: "500px" }}>
        <ClientMarquee />
        <ClientMarqueeLeftToRight />
        <ClientMarquee />
      </Box>
    </Paper>
  );
};

export default OurClients;

const ParentTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "45px",
  lineHeight: "48px",
  /* or 194% */
  letterSpacing: "1px",
  color: "#FFFFFF",

  textAlign: "center",
  //   color: "#B2B2B2",
};

const ChildTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "31px",
  /* or 194% */
  textAlign: "center",
  color: "#B2B2B2",
  mt: 2,
};
