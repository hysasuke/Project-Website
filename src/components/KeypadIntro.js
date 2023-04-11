import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useEffect } from "react";
import Keypad from "./Keypad";
export default function KeypadIntro(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "rgb(22,28,36)",
        display: "flex",
        minHeight: "100vh"
      }}
    >
      <Grid
        container
        flex={1}
        alignItems={"center"}
        spacing={2}
        padding={smallScreen ? 0 : 10}
      >
        <Grid item xs={12} md={6} justifyContent={"flex-end"}>
          <Typography variant="h2" color="white">
            Have TKL Keyboard?
          </Typography>
          <Typography color="white" variant="h3">
            Now, you can make your phone become a keypad.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={12} md={9} lg={4} height={500} minWidth={350}>
            <Keypad />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
