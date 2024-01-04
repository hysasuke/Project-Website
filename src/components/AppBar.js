import React from "react";
import {
  AppBar as MUIAppBar,
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import Image from "next/image";
import PaypalDonateButton from "./PaypalDonateButton";
import PatreonButton from "./PatreonButton";
import GithubButton from "./GithubButton";
export default function AppBar(props) {
  return (
    <MUIAppBar
      style={{
        boxShadow: "none",
        backgroundColor: "rgba(22,28,36,0.5)",
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
          <Typography
            variant="h6"
            noWrap
            color="secondary"
            sx={{ flexGrow: 1 }}
          >
            Project Hub
          </Typography>
          <PaypalDonateButton />
          <PatreonButton />
          <GithubButton />
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}
