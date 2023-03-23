import HorizontalScrollingList from "./HorizontalScrollingList";
import { Box } from "@mui/system";
import Marqueeimg1 from "../../assets/Images/MetaVerse/MarqueeImg1.svg";

import AttrMarqueeBox from "../AttrMarqueeBox";

const Attrs = [
  {
    image: Marqueeimg1,
    text: "Real Estate",
    metaText: "Visualize weekend homes, corporate parks in AR/VR",
  },
  {
    image: Marqueeimg1,
    text: "E-Commerce",
    metaText:
      "How convenient would it be if you could try your apparel on you using AR",
  },
  {
    image: Marqueeimg1,
    text: "Gaming",
    metaText: "The next generation of gaming in AR/VR",
  },
  {
    image: Marqueeimg1,
    text: "Corporate Training",
    metaText: "Use AR to augment industrial and equipment training",
  },
  {
    image: Marqueeimg1,
    text: "Education",
    metaText: "Leverage the power of education using AR/VR",
  },
];

const BlackArVrMarquee = (props) => {
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

export default BlackArVrMarquee;
