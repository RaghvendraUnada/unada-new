import HorizontalScrollingListBox from "./HorizontalScrollingListBox";
import { Box } from "@mui/system";
import Bxi from "../../assets/images/clients/bxi-white.svg";
import Cineman from "../../assets/images/clients/cineman-white.svg";
import Ganesh from "../../assets/images/clients/ganesh-white.svg";
import IclWhite from "../../assets/images/clients/icl-white.svg";
import Kushi from "../../assets/images/clients/khushi-white.svg";
import Maysixty from "../../assets/images/clients/maysixty-white.svg";
import Mirash from "../../assets/images/clients/mirash-white.svg";
import Pots from "../../assets/images/clients/pots-white.svg";
import Strategic from "../../assets/images/clients/strategic-white.svg";
import Unispace from "../../assets/images/clients/unispace-white.svg";
import WhiteValley from "../../assets/images/clients/white-valley-white.svg";
import CaraProjectBox from "../CaraProjectBox";
import pre1 from "../../assets/Images/cara/pre1.png";
import pre2 from "../../assets/Images/cara/pre2.png";
import pre3 from "../../assets/Images/cara/pre3.png";
import Images from "../../assets/Images/MetaVerse/CaraImg1.svg";
import cara1 from "../../assets/Images/MetaVerse/CaraImg1.svg";
import cara2 from "../../assets/Images/MetaVerse/CaraImg2.svg";
import cara3 from "../../assets/Images/MetaVerse/CaraImg3.svg";
import cara4 from "../../assets/Images/MetaVerse/CaraImg4.svg";
import cara5 from "../../assets/Images/MetaVerse/CaraImg5.svg";
const clients = [
  { image: Images, hrefLink: "https://www.youtube.com/watch?v=lHgtB7DuOD8" },
  { image: cara1, hrefLink: "https://www.youtube.com/watch?v=ZqFCn4Nia4o" },
  { image: cara2, hrefLink: "https://www.youtube.com/watch?v=ZqFCn4Nia4o" },
  { image: cara3, hrefLink: "https://www.youtube.com/watch?v=ZqFCn4Nia4o" },
  { image: cara4, hrefLink: "https://www.youtube.com/watch?v=ZqFCn4Nia4o" },
  { image: cara5, hrefLink: "https://www.youtube.com/watch?v=lHgtB7DuOD8" },
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
