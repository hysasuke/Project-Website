import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AppBar from "./AppBar.js";
import Image from "next/image.js";

export default function Main(props) {
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
      <Grid container flex={1}>
        <Grid
          xs={12}
          sm={6}
          spacing={2}
          container
          item
          direction={"column"}
          alignItems={"flex-end"}
          justifyContent="center"
        >
          <Grid item container wrap="wrap" style={{ width: "50%" }}>
            <Typography color="secondary" variant="h2">
              Control Your PC From Any Device
            </Typography>
          </Grid>
          <Grid item container wrap="wrap" style={{ width: "50%" }}>
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
          <Grid item container wrap="wrap" style={{ width: "50%" }}>
            <Typography color="secondary.dark" variant="body1">
              Project Hub is currently in development. We are working hard to
              bring you the best experience possible. Stay tuned for updates!
            </Typography>
          </Grid>
          <Grid item container wrap="wrap" style={{ width: "50%" }}>
            <Button
              color="secondary"
              variant="contained"
              style={{ padding: 10 }}
            >
              Download Alpha Version
            </Button>
          </Grid>
        </Grid>
        <Grid xs={6} sm={6} alignItems={"center"} display={"flex"}>
          <Image
            src={"/main_hero.png"}
            style={{ width: 2649 / 2, height: 2000 / 2 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
