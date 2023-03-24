import HorizontalScrollingList from "./HorizontalScrollingList";
import { Box } from "@mui/system";
import React from "react";
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
import oho from "../../assets/images/clients/ohoclient.svg";
import ClientBox from "../ClientBox";
import axios from "axios";

const clients = [
  { image: Bxi },
  { image: Cineman },
  { image: Ganesh },
  { image: IclWhite },
  { image: Kushi },
  { image: Maysixty },
  { image: Mirash },
  { image: Pots },
  { image: Strategic },
  { image: Unispace },
  { image: WhiteValley },
  { image: oho },
];

const RandomFirstList = [...clients].sort(() => Math.random() - 0.6);
const RandomSecondList = [...clients].sort(() => Math.random() - 0.6);
const RandomThirdList = [...clients].sort(() => Math.random() - 0.6);

const ClientMarquee = (props) => {
  return (
    <HorizontalScrollingList fromRight>
      {clients.map((client, idx) => {
        return (
          <ClientBox
            key={idx}
            image={client.image}
            directions={props.directions}
          />
        );
      })}
    </HorizontalScrollingList>
  );
};

export default ClientMarquee;
