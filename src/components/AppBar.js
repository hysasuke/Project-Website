import React from "react";
import {
  AppBar as MUIAppBar,
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import Image from "next/image";
export default function AppBar(props) {
  return (
    <MUIAppBar
      style={{
        boxShadow: "none",
        backgroundColor: "transparent",
        backdropFilter: "blur(5px)"
      }}
      // position="sticky"
    >
      <Container maxWidth={"xl"}>
        <Toolbar disableGutters>
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            style={{ marginRight: 10 }}
          />
          <Typography variant="h6" noWrap color="secondary">
            Project Hub
          </Typography>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}
