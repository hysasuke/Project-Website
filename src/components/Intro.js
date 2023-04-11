import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import Image from "next/image";
import React, { useEffect } from "react";
export default function Intro(props) {
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
        height: "100vh"
      }}
    >
      <Grid
        container
        flex={1}
        padding={smallScreen ? 0 : 10}
        justifyContent="space-between"
        alignItems={"center"}
        spacing={2}
      >
        {!smallScreen && (
          <Grid item container xs={6} justifyContent="center">
            <Image
              src={"/system_control_intro.png"}
              width={windowWidth / 3}
              height={(windowWidth / 3) * 0.6603}
            />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="white">
            Easily Control Your System
          </Typography>
          <Typography color="secondary.dark" variant="body1">
            Control your system from any device with a web browser. You can{" "}
            <p1
              style={{
                background: "linear-gradient(45deg, #f6d365, #fda085);",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              change the volume, shutdown / restart your PC,
            </p1>{" "}
            and more to come.
          </Typography>
          <Typography color="gray" variant="body2">
            Note: Not all features are available on all platforms.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
