import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";
import ICLWhite from "../../assets/images/clients/icl-white.svg";

const HorizontalScrollingList = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={60}
      // pauseOnHover={true}
      // pauseOnClick={true}
      direction={fromRight ? "left" : "right"}
      style={{
        height: "130px",
      }}
    >
      {children}
    </Marquee>
  );
};
export default HorizontalScrollingList;
