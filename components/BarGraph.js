import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Box, Text, Heading } from "rebass";
import NextLink from "next/link";
import theme from "../styles/theme";
import ColorBox from "../components/ColorBox";

const Bar = ({ text, percentage, description }) => (
  <>
  <Box
    mb={2}
    sx={{
      position: "relative",
      overflow: "hidden",
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.4)",
      height: "43px",
    }}
  >
    <Text
      sx={{ position: "absolute", top: "10px", right: "10px", zIndex: "100" }}
    >
      <b>{percentage}</b>
    </Text>
    <Text sx={{ whiteSpace: "nowrap" }} p={"10px 15px"}>
      {text}
    </Text>
    <Box
      className="bar"
      sx={{ position: "absolute", overflow: "hidden", top: 0, left: 0 }}
      width={percentage}
    >
      <Text
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        p={"10px 15px"}
      >
        {text}
      </Text>
    </Box>
 
  </Box>
       {description && <p>{description}</p>}
       </>
);

const BarGraph = ({ question, data, index, subheading, width, pt }) => {
  return (
    <ColorBox width={width} index={index} pt={[0 ,pt]}>
      <ScrollAnimation  animateIn="flipInX">
        <Heading fontSize={[20, 30]} mb={4}>
          {question}
        </Heading>
        {subheading && <p>{subheading}</p>}
      </ScrollAnimation>
      <Box width={1}>
        {data.map((record, index) => (
          <ScrollAnimation
            // delay={index * 200}
            // animateOut="fadeOut"
            animateIn="fadeIn"
          >
            <Bar {...record} index={index} />
          </ScrollAnimation>
        ))}
      </Box>
    </ColorBox>
  );
};

export default BarGraph;
