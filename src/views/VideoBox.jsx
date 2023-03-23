import { Box } from "@mui/material";
// import LogoVideo from "../../src/assets/Videos/LogoGif.gif";
// import glass from "../assets/glasses.png";
// import layer from "../assets/layers.png";
import akar from "../assets/akar-icons_vr-ar.png";
import ETH from "../assets/ETH.png";
import Etherium from "../assets/Ethereum-icon-purple.png";
import layers from "../assets/layers-1320568243494671052.png";
import styles from "./Video.module.css";
import ReactCurvedText from "react-curved-text";

const VideoBox = () => {
  return (
    <Box
      className={`${styles["torotateinlinear"]}`}
      sx={{
        // top: {
        //   sm: "-135px",
        //   xs: "-135px",
        //   md: "-100px",
        //   lg: "-100px",
        //   xl: "-100px",
        // },
        // left: {
        //   sm: "-120px",
        //   xs: "-120px",
        //   md: "-100px",
        //   lg: "-100px",
        //   xl: "-100px",
        // },
        zIndex: "100",
        position: "absolute",
        // display: "flex",
        // justifyContent: "end",
        // alignItems: "end",
      }}
    >
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <ReactCurvedText
          width={300}
          height={300}
          cx={95}
          cy={100}
          rx={100}
          ry={100}
          startOffset={80}
          reversed={false}
          text="U  N  A  D  A  L  a  b  s"
          textProps={{ style: { fontSize: 19, letterSpacing: 9 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </Box>
    </Box>
  );
};

export default VideoBox;
