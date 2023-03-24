import React from "react";
import { Grid, Typography, Box, Paper, Stack } from "@mui/material";
const StackList = ({ headerName, imgUrlLogo }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        marginTop: "0.5rem",
      }}
    >
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={mainText}>{headerName}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Paper
        elevation={0}
        sx={{
          marginTop: "1rem",
          marginBottom: "2rem",
          borderTop: "0.5px solid rgba(163, 163, 163, 0.3)",
        }}
      >
        <Grid
          container
          mt={5}
          spacing={2}
          sx={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xl={2} lg={2} md={2} sm={2} xs={4}>
            <img
              src={imgUrlLogo}
              alt="andriod"
              style={{ height: "auto", width: "10rem" }}
            />
          </Grid>
        </Grid>
      </Paper>
      <hr
        style={{
          borderBottom: "4px solid rgba(245, 245, 245, 1)",
          marginTop: "4rem",
        }}
      />
    </Paper>
  );
};

export default StackList;

const mainText = {
  fontSize: { xl: "5rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  background: "linear-gradient(90.12deg, #2340FF 0.2%, #0ABFBC 79.48%)",
  backgroundSize: " 100%",
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  textFillColor: "transparent",
  p: "2rem",
  fontWeight: 500,
  fontFamily: "LGMedium",
  lineHeight: { xl: "6rem", lg: "5rem", md: "4rem", sm: "3rem", xs: "3rem" },
  marginTop: { xl: "0rem", lg: "0rem", md: "0rem", sm: "4rem", xs: "4rem" },
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
};
