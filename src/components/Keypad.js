import React from "react";
import { Button as MUIButton, Grid } from "@mui/material";
export default function keypad(props) {
  const buttonLabels = [
    {
      label: "7",
      keyName: "NumPad7"
    },
    {
      label: "8",
      keyName: "NumPad8"
    },
    {
      label: "9",
      keyName: "NumPad9"
    },
    {
      label: "4",
      keyName: "NumPad4"
    },
    {
      label: "5",
      keyName: "NumPad5"
    },
    {
      label: "6",
      keyName: "NumPad6"
    },
    {
      label: "1",
      keyName: "NumPad1"
    },
    {
      label: "2",
      keyName: "NumPad2"
    },
    {
      label: "3",
      keyName: "NumPad3"
    },
    {
      label: "0",
      keyName: "NumPad0"
    },
    {
      label: ".",
      keyName: "Period"
    }
  ];
  const Button = (props) => {
    function addOpacityToColor(color, opacity) {
      if (!color || color === undefined) {
        return "rgba(255,255,255,0.2)";
      }
      // Check if color is in hex format
      if (color[0] === "#") {
        // Convert hex color to RGB format
        const hex = color.substring(1);
        const rgb = parseInt(hex, 16);
        const red = (rgb >> 16) & 0xff;
        const green = (rgb >> 8) & 0xff;
        const blue = rgb & 0xff;

        // Return RGB color with opacity
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
      }

      // Check if color is in RGB format
      if (color.startsWith("rgb")) {
        // Split RGB values into an array
        const rgbArray = color.match(/\d+/g);

        // Return RGB color with opacity
        return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${opacity})`;
      }

      // If color format is not recognized, return the original color
      return color;
    }
    return (
      <MUIButton
        {...props}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 15,
          backgroundColor: addOpacityToColor(props.backgroundColor, 0.8),
          // border: "1px solid #BBBBBB",
          backdropFilter: "blur(5px)"
        }}
      />
    );
  };

  const buttons = buttonLabels.map((key) => (
    <Grid xs={key.label === "0" ? 8 : 4} key={key.label} item>
      <Button variant="contained">{key.label}</Button>
    </Grid>
  ));

  const renderRightButtons = () => {
    const buttons = [
      {
        label: "+",
        keyName: "Add"
      },
      {
        label: "Enter",
        keyName: "Enter",
        backgroundColor: "rgb(225, 163, 91)"
      }
    ];
    return (
      <Grid container xs direction="column" item>
        {buttons.map((key) => {
          return (
            <Grid xs key={key.keyName} item>
              <Button
                variant="contained"
                backgroundColor={
                  key.backgroundColor ? key.backgroundColor : undefined
                }
              >
                {key.label}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderTopButtons = () => {
    const buttons = [
      {
        label: "Backspace",
        keyName: "Backspace"
      },
      {
        label: "/",
        keyName: "Divide"
      },
      {
        label: "*",
        keyName: "Multiply"
      },
      {
        label: "-",
        keyName: "Minus"
      }
    ];
    return (
      <Grid container item xs={1}>
        {buttons.map((key) => {
          return (
            <Grid xs={3} key={key.keyName} item>
              <Button
                variant="contained"
                backgroundColor={
                  key.backgroundColor ? key.backgroundColor : undefined
                }
              >
                {key.label}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Grid container item xs={12} direction="column" height="100%">
      {renderTopButtons()}
      <Grid container item xs direction="row">
        <Grid container item xs={9}>
          {buttons}
        </Grid>
        <Grid item container xs={3}>
          {renderRightButtons()}
        </Grid>
      </Grid>
    </Grid>
  );
}
