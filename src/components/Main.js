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
import { getLatestRelease } from "@/modules/GithubModule.js";
import PaypalDonateButton from "./PaypalDonateButton.js";
export default function Main(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [latestRelease, setLatestRelease] = React.useState(null);
  const [downloadUrl, setDownloadUrl] = React.useState("");
  const [arm64DownloadUrl, setArm64DownloadUrl] = React.useState("");
  const [platform, setPlatform] = React.useState("");
  useEffect(() => {
    const isMac = window.navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const isWindows =
      window.navigator.platform.toUpperCase().indexOf("WIN") >= 0;
    if (isMac) {
      setPlatform("Mac");
    } else if (isWindows) {
      setPlatform("Windows");
    }
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const _getLatestRelease = async () => {
      const release = await getLatestRelease();
      const exeAsset = release.assets.find((asset) => {
        return asset.name.endsWith(".exe");
      });
      const dmgX64Asset = release.assets.find((asset) => {
        return asset.name.endsWith(".dmg") && asset.name.includes("x64");
      });
      const dmgArm64Asset = release.assets.find((asset) => {
        return asset.name.endsWith(".dmg") && asset.name.includes("arm64");
      });
      // setDownloadUrl(dmgX64Asset.browser_download_url);
      setArm64DownloadUrl(dmgArm64Asset.browser_download_url);
      setDownloadUrl(exeAsset.browser_download_url);

      setLatestRelease(release);
    };
    _getLatestRelease();
  }, []);

  const renderDownloadButton = () => {
    if (platform === "Windows") {
      return (
        <Grid item container wrap="wrap" spacing={1} marginTop={2}>
          <Grid item>
            <Button
              onClick={() => {
                if (downloadUrl.length > 0) {
                  window.open(downloadUrl);
                }
              }}
              color="secondary"
              variant="contained"
              style={{ padding: 10, textTransform: "none" }}
              className="download-button"
            >
              Download for Windows
            </Button>
            {latestRelease && (
              <Grid item>
                <Typography color="grey" variant="body2">
                  Current Version: {latestRelease?.tag_name.replace("v", "")}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      );
    } else if (platform === "Mac") {
      return (
        <Grid item container wrap="wrap" spacing={1} marginTop={2}>
          <Grid item container direction="row" spacing={1}>
            <Grid item>
              <Button
                onClick={() => {
                  if (arm64DownloadUrl.length > 0) {
                    window.open(arm64DownloadUrl);
                  }
                }}
                color="secondary"
                variant="contained"
                style={{
                  padding: 10,
                  textTransform: "none"
                }}
                className="download-button"
              >
                Download for Mac (Apple Silicon)
              </Button>
            </Grid>
            {/* <Grid item>
              <Button
                onClick={() => {
                  if (downloadUrl.length > 0) {
                    window.open(downloadUrl);
                  }
                }}
                color="secondary"
                variant="contained"
                style={{ padding: 10, textTransform: "none" }}
                className="download-button"
              >
                Download for Mac (Intel)
              </Button>
            </Grid> */}
          </Grid>
          {latestRelease && (
            <Grid item>
              <Typography color="grey" variant="body2">
                Current Version: {latestRelease?.tag_name.replace("v", "")}
              </Typography>
            </Grid>
          )}
        </Grid>
      );
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "rgb(22,28,36)",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
      <Grid container flex={1} padding={smallScreen ? 0 : 10}>
        <Grid
          xs={12}
          md={6}
          spacing={2}
          container
          item
          alignItems={"center"}
          justifyContent="center"
        >
          <Grid item>
            <Grid item wrap="wrap">
              <Typography color="secondary" variant="h2">
                Control Your {platform === "Mac" ? "Mac" : "PC"} From Any Device
              </Typography>
            </Grid>
            <Grid item container wrap="wrap" marginTop={2}>
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
            <Grid item container wrap="wrap" marginTop={2}>
              <Typography color="secondary.dark" variant="body1">
                Project Hub is currently in development. We are working hard to
                bring you the best experience possible. Stay tuned for updates!
              </Typography>
            </Grid>
            {renderDownloadButton()}
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
              src={"/main_hero.png"}
              width={windowWidth / 3}
              height={windowWidth / 3 / 1.5869}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
