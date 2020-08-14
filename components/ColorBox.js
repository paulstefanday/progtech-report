import React, { useState } from "react";
import { Box, Text, Heading } from "rebass";
import NextLink from "next/link";
import theme from "../styles/theme";

const getColor = (index) => {
  const current = (index + 1) / 4;
  const justDecimal = current - Math.floor(current);
  if (justDecimal === 0.25) {
    return "pink";
  } else if (justDecimal === 0.5) {
    return "orange";
  } else if (justDecimal === 0.75) {
    return "green";
  } else {
    return "purple";
  }
};

const {
  colors,
  text: { highlight },
} = theme;

const styles = {
  green: {
    background: colors.greenLight,
    color: colors.greenDark,
    "& h2": { ...highlight.green, color: "black" },
    "& .bar": {
      background: colors.green,
    },
  },
  pink: {
    background: colors.pinkLight,
    color: colors.pinkDark,
    "& h2": { ...highlight.pink, color: "black" },
    "& .bar": {
      background: colors.pink,
    },
  },
  purple: {
    background: colors.purpleLight,
    color: colors.purpleDark,
    "& h2": { ...highlight.purple, color: "black" },
    "& .bar": {
      background: colors.purple,
    },
  },
  orange: {
    background: colors.orangeLight,
    color: colors.orangeDark,
    "& h2": { ...highlight.orange, color: "black" },
    "& .bar": {
      background: colors.orange,
    },
  },
};

const ColorBox = ({
  index,
  children,
  width = 1,
  p = 5,
  pt = 6,
  end = false,
}) => (
  <Box sx={{ ...styles[getColor(index)] }} p={p} pt={pt} width={width}>
    {children}
    {end && (
      <Box sx={{
        marginBottom:"-240px", //[0, "-240px", "-360px"],
        zIndex: 11,
        position: "relative",
      }}>
        <svg
          // style={}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={colors[getColor(index) + "Light"]}
            fill-opacity="1"
            d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,138.7C672,128,768,160,864,160C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>
    )}
  </Box>
);

export default ColorBox;
