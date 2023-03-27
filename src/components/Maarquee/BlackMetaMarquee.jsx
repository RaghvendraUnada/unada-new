import HorizontalScrollingList from "./HorizontalScrollingList";
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
    text: "Workplace",
    metaText:
      "The ultimate virtual workplace destination with collaboration in the virtual worlds.",
  },
  {
    image: Marqueeimg1,
    text: "Warehouse",
    metaText: "Store, view and manage your goods in the metaverse.",
  },
  {
    image: Marqueeimg1,
    text: "Hotels & Resorts",
    metaText: "Experience, relax and unwind in the ultimate virtual resort.",
  },
];

const BlackMetaMarquee = (props) => {
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

export default BlackMetaMarquee;
