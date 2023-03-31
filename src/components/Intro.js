import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import Image from "next/image";
import React from "react";
export default function Intro(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      maxWidth={false}
      style={{
        // backgroundColor: "#008080",
        backgroundColor: "rgb(22,28,36)",
        display: "flex",
        height: "100vh"
      }}
    >
      <Grid
        container
        flex={1}
        padding={10}
        justifyContent="space-between"
        alignItems={"center"}
        spacing={2}
      >
        {!smallScreen && (
          <Grid item container xs={6} justifyContent="center">
            <Image
              src={"/Project-Website/audio_control.png"}
              width={400}
              height={150}
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
        </Grid>
      </Grid>
    </Container>
  );
}
