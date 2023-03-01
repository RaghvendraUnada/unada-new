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
      className={`${styles["circle-container"]}`}
      sx={{
        top: {
          sm: "-135px",
          xs: "-135px",
          md: "-100px",
          lg: "-100px",
          xl: "-60px",
        },
        left: {
          sm: "-120px",
          xs: "-120px",
          md: "-100px",
          lg: "-100px",
          xl: "-100px",
        },
        zIndex: "20",
        bgcolor: "transparent",
        position: "absolute",
        transform: "rotate(-60deg)",
      }}
    >
      {/* <video
          // className="videoTag"
          autoPlay
          loop
          muted
          style={{
            background: "transparent",
            height: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            width: "auto",
          }}
        > */}
      {/* <span className={`${styles["circle-img"]} ${styles["circle-icon-1"]}`}>
        U
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-2"]}`}>
        N
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-3"]}`}>
        A
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-4"]}`}>
        D
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-5"]}`}>
        A
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-6"]}`}>
        L
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-7"]}`}>
        A
      </span>
      <span className={`${styles["circle-img"]} ${styles["circle-icon-8"]}`}>
        B
      </span> */}
      <ReactCurvedText
        width={370}
        height={300}
        cx={190}
        cy={120}
        rx={100}
        ry={100}
        startOffset={60}
        reversed={false}
        text="U n a d a L a b"
        textProps={{
          style: {
            fontFamily: "MBFCanno",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "2rem",
          },
        }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      />

      {/* <Box className={`${styles["circle-center"]}`}></Box> */}
      {/* <img
        src={LogoVideo}
        // sx={{ filter: "invert" }}
        style={{
          background: "transparent",
          filter: "invert(1)",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
          width: "auto",
        }}
      /> */}
      {/* </video> */}
    </Box>
  );
};

export default VideoBox;
