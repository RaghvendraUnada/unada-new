// import { Paper, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HorizontalScrollingListBox from "../components/Maarquee/HorizontalScrollingListBox";
// import "./Marque.css";
// import ClientMarquee from "./OurTeamMData";

// const OurTeamMarquee = () => {
//   const [teamData, setTeamData] = useState();
//   const FetchTeamData = async () => {
//     await axios
//       .get("team/get_members")
//       .then((res) => {
//         setTeamData(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     FetchTeamData( );
//   }, []);

//   let OurTeamdataOne = [];
//   let OurTeamdataTwo = [];
//   teamData?.map((client, idx) => {
//     if (idx % 2 == 0) {
//       OurTeamdataOne.push(client);
//     } else {
//       OurTeamdataTwo.push(client);
//     }
//   });
//   return (
//     <Paper
//       sx={{
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <Grid
//         container
//         sx={{
//           transform: "rotate(90deg)",
//         }}
//       >
//         <ClientMarquee data={OurTeamdataOne} />
//         <ClientMarquee data={OurTeamdataTwo} />
//       </Grid>
//     </Paper>
//   );
// };

// export default OurTeamMarquee;

// import HorizontalScrollingListBox from "./HorizontalScrollingListBox";
import HorizontalScrollingListBoxOurClient from "../components/Maarquee/HorizontalScrollingListBoxOurClient.jsx";
import { Box, Grid } from "@mui/material";
// import CaraProjectBox from "../CaraProjectBox";
import axios from "axios";
import CaraProjectBoxOurClient from "../components/CaraProjectBoxOurClient.jsx";
import Images from "../assets/Images/MetaVerse/CaraImg1.svg";
import cara1 from "../assets/Images/MetaVerse/CaraImg1.svg";
import cara2 from "../assets/Images/MetaVerse/CaraImg2.svg";
import cara3 from "../assets/Images/MetaVerse/CaraImg3.svg";
import cara4 from "../assets/Images/MetaVerse/CaraImg4.svg";
import cara5 from "../assets/Images/MetaVerse/CaraImg5.svg";
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
  // const FetchTeamData = async () => {
  //   await axios
  //     .get("team/get_members")
  //     .then((res) => {
  //       setTeamData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
          return (
            <CaraProjectBoxOurClient
              key={idx}
              // image={client.image}

              // hrefLink={client.hrefLink}
            />
          );
        })}
      </HorizontalScrollingListBoxOurClient>
      <HorizontalScrollingListBoxOurClient>
        {clients.map((client, idx) => {
          return (
            <CaraProjectBoxOurClient
              key={idx}
              image={client.image}
              // hrefLink={client.hrefLink}
            />
          );
        })}
      </HorizontalScrollingListBoxOurClient>
    </Box>
  );
};

export default OurTeamMarquee;
