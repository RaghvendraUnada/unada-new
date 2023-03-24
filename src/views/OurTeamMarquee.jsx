import React, { useState, useEffect } from "react";
import HorizontalScrollingListBoxOurClient from "../components/Maarquee/HorizontalScrollingListBoxOurClient.jsx";
import { Box, Grid } from "@mui/material";
import CaraProjectBoxOurClient from "../components/CaraProjectBoxOurClient.jsx";
import client1 from "../assets/Images/clients/client1.svg";
const clients = [
  { image: client1 },
  { image: client1 },
  { image: client1 },
  { image: client1 },
  { image: client1 },
  { image: client1 },
];
const RandomFirstList = [...clients].sort(() => Math.random() - 0.6);
const RandomSecondList = [...clients].sort(() => Math.random() - 0.6);
const RandomThirdList = [...clients].sort(() => Math.random() - 0.6);

const OurTeamMarquee = (props) => {
  const [teamData, setTeamData] = useState();

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        display: "flex",
        justifyContent: "space-between",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        transform: "rotate(90deg)",
        gap: "10px",
      }}
    >
      <HorizontalScrollingListBoxOurClient>
        {clients.map((client, idx) => {
          return <CaraProjectBoxOurClient key={idx} />;
        })}
      </HorizontalScrollingListBoxOurClient>
      <HorizontalScrollingListBoxOurClient>
        {clients.map((client, idx) => {
          return <CaraProjectBoxOurClient key={idx} image={client.image} />;
        })}
      </HorizontalScrollingListBoxOurClient>
    </Box>
  );
};

export default OurTeamMarquee;
