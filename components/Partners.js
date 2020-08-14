import React from "react";
import { Box, Flex, Heading, Button, Image } from "rebass";
import Container from "./Container";
import Bg, { styles } from './Bg';
import Link from "next/link";

const list = [
  "/images/logo-raisely.jpg",
  "/images/logo-uwu.jpg",
  "/images/logo-vthc.jpg",
];

const Partners = () => (
  <Box width={1} py={5}>
    <Container maxWidth={1200}>
      <Flex mt={3} flexWrap="wrap" width={1}>
        <Heading mb={5} fontSize={30} width={1 / 2}>
          Meet the organisations who power our community for a progressive
          Australia
        </Heading>
        <Box width={1 / 2} textAlign="right">
          <Link href="/partners"><Button>All Partners</Button></Link>
        </Box>
        {list.map((url) => (
          <Box width={1 / 5} sx={styles} pr={[0, 5]}>
            <Image src={url} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Box>
);

export default Partners;
