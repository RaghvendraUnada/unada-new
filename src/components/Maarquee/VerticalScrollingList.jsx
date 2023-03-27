import { Box, Stack } from "@mui/system";
import Marquee from "react-fast-marquee";

const VerticalScrollingList = ({ children, fromRight }) => {
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
        }}
      >
        {children}
      </Marquee>
    </Box>
  );
};
export default VerticalScrollingList;
