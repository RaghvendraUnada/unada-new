import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";
import ICLWhite from "../../assets/images/clients/icl-white.svg";

const HorizontalScrollingList = ({ children, fromRight }) => {
  // console.log("fromRight",fromRight)
  return (
    <Marquee
      gradient={false}
      speed={60}
      direction={fromRight ? "left" : "right"}
      style={{ height: "130px" }}
    >
      {children}
    </Marquee>
  );
};
export default HorizontalScrollingList;
