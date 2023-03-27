import Marquee from "react-fast-marquee";

const HorizontalScrollingListBoxOurClient = ({ children, fromRight }) => {
  return (
    <Marquee
      gradient={false}
      speed={10}
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
