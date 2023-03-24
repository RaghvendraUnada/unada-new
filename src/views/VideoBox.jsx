import { Box } from "@mui/material";
import styles from "./Video.module.css";
import ReactCurvedText from "react-curved-text";

const VideoBox = () => {
  return (
    <Box
      className={`${styles["torotateinlinear"]}`}
      sx={{
        zIndex: "100",
        position: "absolute",
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
