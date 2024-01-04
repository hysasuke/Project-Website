import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Intro from "@/components/Intro";
import AppBar from "@/components/AppBar";

import { useTheme } from "@mui/styles";
import KeypadIntro from "@/components/KeypadIntro";
import Script from "next/script";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#FFFFFF",
      light: "#E0E0E0",
      dark: "#BDBDBD",
      contrastText: "#000000"
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#FFFFFF"
    },
    donation: {
      main: "#FFC107",
      light: "#FFD54F",
      dark: "#FFA000",
      contrastText: "#000000"
    },
    patreon: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#FFFFFF"
    },
    github: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
      contrastText: "#FFFFFF"
    }
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Project Hub</title>
        <meta name="description" content="Download Project Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <div
        style={{
          height: "100vh"
        }}
      >
        <Main />
        <Intro />
        <KeypadIntro />
      </div>
      <Script src="https://buttons.github.io/buttons.js"></Script>
    </ThemeProvider>
  );
}
