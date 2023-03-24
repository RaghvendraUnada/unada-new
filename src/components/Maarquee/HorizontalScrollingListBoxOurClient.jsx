import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";
import ICLWhite from "../../assets/images/clients/icl-white.svg";

const HorizontalScrollingListBoxOurClient = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={10}
      // pauseOnHover={true}
      pauseOnClick={true}
      style={{
        height: "auto",
      }}
    >
      {children}
    </Marquee>
  );
};
export default HorizontalScrollingListBoxOurClient;
