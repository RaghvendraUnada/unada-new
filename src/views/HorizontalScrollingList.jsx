import Marquee from "react-fast-marquee";

const HorizontalScrollingList = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={10}
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
