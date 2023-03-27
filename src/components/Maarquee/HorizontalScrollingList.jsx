import Marquee from "react-fast-marquee";

const HorizontalScrollingList = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={60}
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
