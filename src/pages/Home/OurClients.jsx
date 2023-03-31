import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import ClientMarquee from "../../components/Maarquee/ClientMarquee";
import ClientMarqueeNew from "../../components/Maarquee/ClientMarqueeNew";
import ClientMarqueeLeftToRight from "../../components/Maarquee/ClientMarqueeLeftToRight";
import "./OurTeam.css";
import Fade from "react-reveal/Fade";
import selection from "./home.module.css";

const OurClients = () => {
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
        <Fade top duration={1000}>
          <Typography sx={ParentTextStyle} className={selection.invert2}>
            Our Clients
          </Typography>
        </Fade>
        <Typography sx={ChildTextStyle} className={selection.invert2}>
          We integrate with the tools you love. So you'll be that much more
          efficient when hiring your crew for your next mission to space.
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "500px",
        }}
      >
        <ClientMarquee />
        <ClientMarqueeLeftToRight />
        <ClientMarqueeNew />
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
  letterSpacing: "1px",
  color: "#FFFFFF",

  textAlign: "center",
};

const ChildTextStyle = {
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "31px",
  textAlign: "center",
  color: "#B2B2B2",
  mt: 2,
};
