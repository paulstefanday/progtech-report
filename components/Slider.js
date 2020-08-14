import React, { useState } from "react";
import { Box, Heading, Text, Button } from "rebass";
import Container from './Container';
import Link from 'next/link';

const styles = {
  bg: "test2",
  px:6,
  py:5,
  width: "100%",
  height: "350px",
  textAlign: "center",
  position: "relative",
  "& .dot": {
    bg: "transpartent",
    border: "1px solid black",
    borderRadius: 99999,
    width: 10,
    height: 10,
    marginLeft: "5px",
    display: "inline-block",
    "&.active": {
      bg: "black"
    }
  },
};


const Dots = ({ current, content }) => (
    <Box justifyContent="center" flexDirection="row" width={1} sx={{ position: "absolute", bottom: 40, left: 0 }}>
      {content.map(({}, index) => (
        <Box className={`dot ${current === index ? "active":""}`}></Box>
      ))}
    </Box>
  );
  
  const Slider = ({ content }) => {
    const [current, updateCurrent] = useState(0);
    const { title, copy, buttonLink, buttonText } = content[current];
    return (
      <Box sx={styles}>
          {content.map(({ title, copy, buttonLink, buttonText }, index) => (
            <div className={`slider-box ${index === current ? "active" : ""}`}>
              <Container justifyContent="center">
              <Heading variant="highlight.purple">{title}</Heading>
              <Text variant="p">{copy}</Text>
              <Link href={buttonLink}><Button variant="primary">{buttonText}</Button></Link>
              </Container>
            </div>
          ))}
        <div
          className="arrows prev"
          onClick={() => updateCurrent(current === 0 ? content.length - 1 : current - 1)}
        ></div>
        <div
          className="arrows next"
          onClick={() => updateCurrent(current === content.length - 1 ? 0 : current + 1)}
        ></div>
        <Dots current={current} content={content} />
      </Box>
    );
  };

  export default Slider