import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Intro(props) {
  return (
    <Container
      maxWidth={false}
      style={{
        width: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        // backgroundColor: "#008080",
        backgroundColor: "rgb(22,28,36)",
        display: "flex"
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
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography variant="h2" color="white">
            1-click to open programs
          </Typography>
          <Typography variant="body2" color="white">
            Tired of cluttered icons on your desktop?
          </Typography>
          <Typography variant="body2" color="white">
            Had enough of the frustration of not being able to find your
            programs?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
