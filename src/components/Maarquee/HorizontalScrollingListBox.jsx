import Marquee from "react-fast-marquee";

const HorizontalScrollingListBox = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={60}
      pauseOnHover={true}
      pauseOnClick={true}
      direction={fromRight ? "left" : "right"}
      style={{
        height: "auto",
      }}
    >
      {children}
    </Marquee>
  );
};
export default HorizontalScrollingListBox;
