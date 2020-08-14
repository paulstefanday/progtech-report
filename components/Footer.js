import React from "react";
import { Box, Flex, Heading, Text, Button, Link } from "rebass";
import { Input } from "@rebass/forms";

import JoinNewsletter from './JoinNewsletter';

const styles = {
  backgroundColor: "black",
  color: "white",
  a: {
    textDecoration: "none",
    color: "white",
    marginBottom: "10px",
    ":hover,:focus,.active": {
      color: "white",
      textDecoration: "underline",
    },
  },
  button: {
    minWidth: "160px",
  },
};

const Footer = () => (
  <Flex flexWrap="wrap" sx={styles}>
    <Flex flexWrap="wrap" p={[4,5]} width={[1, 2 / 3]}>
      {/* <Box width={1 / 2}>
        <Button variant="secondary">Login</Button>
      </Box>
      <Box width={1 / 2}>
        <Button variant="secondary">Sign up</Button>
      </Box> */}
      <JoinNewsletter />
      <p width={1} p={1}>
        ProgTech acknowledges the Traditional Custodians of the stolen lands on which
        we work. We pay respect to First Nations elders past, present and
        emerging - sovereignty has never been ceded, and the process of colonisation
        continues today. We are committed to supporting the leadership of Aboriginal 
        and Torres Strait Islander peoples in the progressive space.
      </p>
    </Flex>
    <Flex flexDirection="column" p={[4,5]} width={[1, 1 / 3]}>
      <Heading>Quick Links</Heading>
      <Link href="/overview">About</Link>
      {/* <Link href="/partners">Partners</Link> */}
      <Link href="/join">Become a Partner</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/privacy">Privacy Policy</Link>
    </Flex>
  </Flex>
);

export default Footer;
