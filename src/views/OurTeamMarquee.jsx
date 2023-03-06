import { Paper, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Marque.css";
import ClientMarquee from "./OurTeamMData";

const OurTeamMarquee = () => {
  const [teamData, setTeamData] = useState();
  const FetchTeamData = async () => {
    await axios
      .get("team/get_members")
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchTeamData();
  }, []);

  let OurTeamdataOne = [];
  let OurTeamdataTwo = [];
  teamData?.map((client, idx) => {
    if (idx % 2 == 0) {
      OurTeamdataOne.push(client);
    } else {
      OurTeamdataTwo.push(client);
    }
  });
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        sx={{
          transform: "rotate(90deg)",
        }}
      >
        <ClientMarquee data={OurTeamdataOne} />
        <ClientMarquee data={OurTeamdataTwo} />
      </Grid>
    </Paper>
  );
};

export default OurTeamMarquee;
