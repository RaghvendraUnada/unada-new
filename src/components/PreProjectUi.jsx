import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import pre1 from "../assets/Images/cara/Frame_1.webp";
import pre2 from "../assets/Images/cara/Frame_2.webp";
import pre3 from "../assets/Images/cara/Frame_3.webp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import styles from "../pages/Services/Service.module.css";
import Fade from "react-reveal/Fade";
import { useRef } from "react";
import preStyles from "./preproject.module.scss";
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
const PreProjectUi = () => {
  const [icon1, setIcon1] = useState("black");
  const [icon2, setIcon2] = useState("black");
  const boxRef = useRef();
  const scollToRef = useRef();
  useEffect(() => {
    scollToRef?.current?.scroll(
      scollToRef?.current?.scrollLeft +
        boxRef?.current?.offsetWidth / 2 +
        convertRemToPixels(3.5),
      0
    );
  }, [boxRef]);

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        paddingBottom: "60px",
        height: "100%",
        position: "relative",
      }}
    >
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          paddingLeft: {
            xl: "3.5rem",
            lg: "3.5rem",
            md: "2rem",
            sm: "0rem",
            xs: "0rem",
          },
          textAlign: {
            xl: "start",
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          marginTop: {
            xl: "2rem",
            lg: "2rem",
            md: "0rem",
          },
        }}
      >
        <Fade top duration={1000}>
          <Typography sx={mainText}>Previous Projects</Typography>
        </Fade>
      </Grid>

      <Grid
        container
        sx={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* <Box
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "flex",
              xs: "none",
            },
          }}
        >
          <Box
            sx={{
              marginLeft: "auto",
              position: "absolute",
              left: {
                xs: "1%",
              },
              bottom: {
                xs: "10%",
                lg: "7%",
              },
              transform: "rotate(180deg)",
              cursor: "pointer",

              zIndex: "10",
            }}
          >
            <Box
              className={styles.CarouselArrowImg}
              onMouseOut={() => setIcon1("black")}
              onMouseOver={() => setIcon1("white")}
              onClick={() => {
                scollToRef?.current?.scroll(
                  scollToRef?.current?.scrollLeft -
                    boxRef?.current?.offsetWidth +
                    convertRemToPixels(-3.5),
                  0
                );
              }}
            >
              <EastSharpIcon fontSize="large" sx={{ color: icon1 }} />
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              position: "absolute",
              right: {
                xs: "1%",
              },
              bottom: {
                xs: "10%",
                lg: "7%",
              },
              cursor: "pointer",
              zIndex: "10",
            }}
          >
            <Box
              className={styles.CarouselArrowImg}
              onMouseOut={() => setIcon2("black")}
              onMouseOver={() => setIcon2("white")}
              onClick={() => {
                scollToRef?.current?.scroll(
                  scollToRef?.current?.scrollLeft +
                    boxRef?.current?.offsetWidth +
                    convertRemToPixels(3.5),
                  0
                );
              }}
            >
              <EastSharpIcon fontSize="large" sx={{ color: icon2 }} />
            </Box>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "raw",
            overflowY: "scroll",
            position: "relative",
            scrollBehavior: "smooth",
            gap: {
              xl: "3.5rem",
              lg: "3.5rem",
              md: "3.5rem",
              sm: "1.8rem",
              xs: "1rem",
            },
            marginTop: "2rem",
            marginLeft: {
              xl: "0px",
              lg: "0px",
              md: "-250px",
              sm: "-90px",
              xs: "-90px",
            },
          }}
          id="abc"
          ref={scollToRef}
        >
          <Box class={preStyles.hover03} ref={boxRef}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre1} />
            </figure>
          </Box>
          <Box class={preStyles.hover03}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre2} />
            </figure>
          </Box>
          <Box class={preStyles.hover03}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre3} />
            </figure>
          </Box>

          <Box class={preStyles.hover03}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre1} />
            </figure>
          </Box>
          <Box class={preStyles.hover03}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre2} />
            </figure>
          </Box>
          <Box class={preStyles.hover03}>
            <figure>
              <Box component="img" className={preStyles.imgs} src={pre3} />
            </figure>
          </Box>
        </Box>
      </Grid>
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <Box
          sx={{
            marginLeft: "auto",
            position: "absolute",
            left: {
              xs: "1%",
            },
            bottom: {
              xs: "5%",
              lg: "1%",
            },
            transform: "rotate(180deg)",
            cursor: "pointer",

            zIndex: "10",
          }}
        >
          <Box
            className={styles.CarouselArrowImg}
            onMouseOut={() => setIcon1("black")}
            onMouseOver={() => setIcon1("white")}
            onClick={() => {
              scollToRef?.current?.scroll(
                scollToRef?.current?.scrollLeft - boxRef?.current?.offsetWidth,
                0
              );
            }}
          >
            <EastSharpIcon fontSize="large" sx={{ color: icon1 }} />
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            position: "absolute",
            right: {
              xs: "1%",
            },
            bottom: {
              xs: "5%",
              lg: "1%",
            },
            cursor: "pointer",
            zIndex: "10",
          }}
        >
          <Box
            className={styles.CarouselArrowImg}
            onMouseOut={() => setIcon2("black")}
            onMouseOver={() => setIcon2("white")}
            onClick={() => {
              scollToRef?.current?.scroll(
                scollToRef?.current?.scrollLeft + boxRef?.current?.offsetWidth,
                0
              );
            }}
          >
            <EastSharpIcon fontSize="large" sx={{ color: icon2 }} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PreProjectUi;

const mainText = {
  width: "100%",
  fontFamily: "LGRegular",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: {
    xl: "4.8rem",
    lg: "4.8rem",
    md: "4.2rem",
    sm: "3.2rem",
    xs: "3.2rem",
  },

  letterSpacing: 0.42,

  color: "#000",
  paddingBottom: {
    xl: "2rem",
    lg: "2rem",
    md: "2rem",
    sm: "2rem",
    xs: "0rem",
  },
  marginTop: "6rem",
};
