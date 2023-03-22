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
    // <Box
    //   sx={{
    //     // top: {
    //     //   sm: "-135px",
    //     //   xs: "-135px",
    //     //   md: "-100px",
    //     //   lg: "-100px",
    //     //   xl: "-100px",
    //     // },
    //     // left: {
    //     //   sm: "-120px",
    //     //   xs: "-120px",
    //     //   md: "-100px",
    //     //   lg: "-100px",
    //     //   xl: "-100px",
    //     // },

    //   }}
    // >
    <div
      className={`${styles["torotateinlinear"]}`}
      style={{
        width: "200px",
        height: "200px",
        zIndex: "100",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <ReactCurvedText
        width={"300px"}
        height={"auto"}
        cx={100}
        cy={100}
        rx={95}
        ry={95}
        startOffset={50}
        reversed={false}
        text="U  n  a  d  a  L  a  b"
        textProps={{ style: { fontSize: 22 } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      />
    </div>
    // </Box>
  );
};

export default VideoBox;
