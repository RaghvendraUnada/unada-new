import HorizontalScrollingList from "./HorizontalScrollingList";
import { Box } from "@mui/system";
import Marqueeimg1 from "../../assets/Images/MetaVerse/MarqueeImg1.svg";

import AttrMarqueeBox from "../AttrMarqueeBox";

const Attrs = [
  {
    image: Marqueeimg1,
    text: "Games",
    metaText: "Automate your Merge Request workflow",
  },
  {
    image: Marqueeimg1,
    text: "Marketplace",
    metaText:
      "Create, search, and modify your issues from anywhere on your Mac",
  },
  {
    image: Marqueeimg1,
    text: "Real estate",
    metaText: "Automate your pull request workflow",
  },
  {
    image: Marqueeimg1,
    text: "Office",
    metaText: "Manage and respond to incidents directly in Slack",
  },
  {
    image: Marqueeimg1,
    text: "Community",
    metaText: "Automate your pull request workflow",
  },
  {
    image: Marqueeimg1,
    text: "Workplace",
    metaText: "Create and link issues with Sentry and automate issue creation",
  },
];
const BlackTMarqueeRev = (props) => {
  return (
    <HorizontalScrollingList>
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
export default BlackTMarqueeRev;
