import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import React, { useEffect } from "react";
import AppBar from "./AppBar.js";
import Image from "next/image";
import { useTheme } from "@mui/styles";

export default function Main(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);
  console.log("theme", theme);
  return (
    <Container
      maxWidth={false}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(22,28,36)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <AppBar />
      <Grid container flex={1} padding={10}>
        <Grid
          xs={12}
          md={6}
          spacing={2}
          container
          item
          direction={"column"}
          alignItems={"flex-end"}
          justifyContent="center"
        >
          <Grid item container wrap="wrap">
            <Typography color="secondary" variant="h2">
              Control Your PC From Any Device
            </Typography>
          </Grid>
          <Grid item container wrap="wrap">
            <Typography color="secondary" variant="h4">
              Your are only{" "}
              <p1
                style={{
                  background: "linear-gradient(45deg, #f6d365, #fda085);",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                1-click{" "}
              </p1>
              away from what you need
            </Typography>
          </Grid>
          <Grid item container wrap="wrap">
            <Typography color="secondary.dark" variant="body1">
              Project Hub is currently in development. We are working hard to
              bring you the best experience possible. Stay tuned for updates!
            </Typography>
          </Grid>
          <Grid item container wrap="wrap" spacing={1}>
            <Grid item>
              <Button
                onClick={() => {
                  window.open(
                    "https://github.com/hysasuke/Project-Hub/releases/latest/download/x64.zip"
                  );
                }}
                color="secondary"
                variant="contained"
                style={{ padding: 10 }}
              >
                Download for Windows(64-bit)
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  window.open(
                    "https://github.com/hysasuke/Project-Hub/releases/latest/download/ia32.zip"
                  );
                }}
                color="secondary"
                variant="contained"
                style={{ padding: 10 }}
              >
                Download for Windows(32-bit)
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {!smallScreen && (
          <Grid
            xs={6}
            md={6}
            alignItems={"center"}
            display={"flex"}
            justifyContent="center"
          >
            <Image
              src={"/Project-Website/main_hero.png"}
              width={windowWidth / 3}
              height={windowWidth / 3 / 1.5869}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
