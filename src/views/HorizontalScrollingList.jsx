import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";

const HorizontalScrollingList = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={10}
      // pauseOnHover={true}
      // pauseOnClick={true}
      direction={fromRight ? "left" : "right"}
      style={{
        height: "400px",
      }}
    >
      {children}
    </Marquee>
  );
};
export default HorizontalScrollingList;
