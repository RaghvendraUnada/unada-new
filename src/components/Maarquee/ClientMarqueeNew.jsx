import HorizontalScrollingList from "./HorizontalScrollingList";
import React from "react";
import Bxi from "../../assets/images/clients/bxi-white.webp";
import Cineman from "../../assets/images/clients/cineman-white.webp";
import Ganesh from "../../assets/images/clients/ganesh-white.webp";
import IclWhite from "../../assets/images/clients/icl-white.webp";
import Kushi from "../../assets/images/clients/khushi-white.webp";
import Maysixty from "../../assets/images/clients/maysixty-white.webp";
import Mirash from "../../assets/images/clients/mirash-white.webp";
import Pots from "../../assets/images/clients/pots-white.webp";
import Strategic from "../../assets/images/clients/strategic-white.webp";
import Unispace from "../../assets/images/clients/unispace-white.webp";
import WhiteValley from "../../assets/images/clients/white-valley-white.webp";
import oho from "../../assets/images/clients/ohoclient.webp";
import ClientBox from "../ClientBox";

const clients = [
  { image: Cineman },
  { image: IclWhite },
  { image: Pots },
  { image: Unispace },
  { image: Kushi },
  { image: Bxi },
  { image: Maysixty },
  { image: Mirash },
  { image: Ganesh },
  { image: oho },
  { image: Strategic },
  { image: WhiteValley },
];

const RandomFirstList = [...clients].sort(() => Math.random() - 0.6);
const RandomSecondList = [...clients].sort(() => Math.random() - 0.6);
const RandomThirdList = [...clients].sort(() => Math.random() - 0.6);

const ClientMarqueeNew = (props) => {
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

export default ClientMarqueeNew;
