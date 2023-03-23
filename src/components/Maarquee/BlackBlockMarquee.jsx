import HorizontalScrollingList from "./HorizontalScrollingList";
import { Box } from "@mui/system";
import Marqueeimg1 from "../../assets/Images/MetaVerse/MarqueeImg1.svg";

import AttrMarqueeBox from "../AttrMarqueeBox";

const Attrs = [
  {
    image: Marqueeimg1,
    text: "Finance",
    metaText: "Transforming finance with secure, transparent transactions",
  },
  {
    image: Marqueeimg1,
    text: "Healthcare",
    metaText: "Unleash the power of health data with distributed ledgers",
  },
  {
    image: Marqueeimg1,
    text: "Social Media",
    metaText: "Have ownership of the content you create and get paid",
  },
  {
    image: Marqueeimg1,
    text: "Gaming",
    metaText: "Transforming in-gaming economies and player centrism",
  },
];

const BlackBlockMarquee = (props) => {
  return (
    <HorizontalScrollingList fromRight>
      {Attrs.map((Attr, idx) => {
        return (
          <AttrMarqueeBox
            key={idx}
            image={Attr.image}
            text={Attr.text}
            metaText={Attr.metaText}
            directions={props.directions}
          />
        );
      })}
    </HorizontalScrollingList>
  );
};

export default BlackBlockMarquee;
