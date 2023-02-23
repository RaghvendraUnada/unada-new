import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";
import ICLWhite from "../../assets/images/clients/icl-white.svg";

const VerticalScrollingList = ({ children, fromRight }) => {
  // console.log("fromRight",fromRight)
  return (
    <Box
      sx={{
        transform: "rotate(-90deg)",
      }}
    >
      <Marquee
        gradient={false}
        speed={100}
        direction={fromRight ? "left" : "right"}
        style={{
          height: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          // background: "red",
        }}
      >
        {children}
      </Marquee>
    </Box>
  );
};
export default VerticalScrollingList;
