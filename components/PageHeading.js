import React from "react";
import { Box, Flex, Heading, Button } from "rebass";
import Container from "./Container";
import Bg from "./Bg";

const Jumbotron = ({ heading, image = "/images/2.jpg" }) => (
  <Box
    className="gradient"
    width={1}
    sx={{ position: "relative", overflow: "hidden" }}
  >
    <Bg url={image} />
    <Box
      px={[4, 5]}
      pt={[6]}
      pb={[4]}
      width={1}
      sx={{
        zIndex: 1,
        position: "relative",
      }}
    >
      <Container maxWidth={1200}>
        <Heading fontSize={[25, 50]} sx={{ maxWidth: "500px" }}>
          {heading}
        </Heading>
      </Container>
    </Box>
  </Box>
);

export default Jumbotron;
