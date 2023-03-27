import HorizontalScrollingListBox from "./HorizontalScrollingListBox";
import { Box } from "@mui/system";
import CaraProjectBox from "../CaraProjectBox";
import Images from "../../assets/Images/MetaVerse/CaraImg1.svg";
import cara1 from "../../assets/Images/MetaVerse/CaraImg1.svg";
import cara2 from "../../assets/Images/MetaVerse/CaraImg2.svg";
import cara3 from "../../assets/Images/MetaVerse/CaraImg3.svg";
import cara4 from "../../assets/Images/MetaVerse/CaraImg4.svg";
import cara5 from "../../assets/Images/MetaVerse/CaraImg5.svg";
const clients = [
  { image: Images, hrefLink: "https://www.youtube.com/" },
  { image: cara1, hrefLink: "https://www.youtube.com/" },
  { image: cara2, hrefLink: "https://www.youtube.com/" },
  { image: cara3, hrefLink: "https://www.youtube.com/" },
  { image: cara4, hrefLink: "https://www.youtube.com/" },
  { image: cara5, hrefLink: "https://www.youtube.com/" },
];
const RandomFirstList = [...clients].sort(() => Math.random() - 0.6);
const RandomSecondList = [...clients].sort(() => Math.random() - 0.6);
const RandomThirdList = [...clients].sort(() => Math.random() - 0.6);

const CaraProject = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        background: "#000",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        pt: {
          xl: 4,
          lg: 4,
          md: 2,
          sm: 2,
          xs: 2,
        },
        pb: 4,
      }}
    >
      <HorizontalScrollingListBox>
        {clients.map((client, idx) => {
          return (
            <CaraProjectBox
              key={idx}
              image={client.image}
              hrefLink={client.hrefLink}
            />
          );
        })}
      </HorizontalScrollingListBox>
    </Box>
  );
};

export default CaraProject;
