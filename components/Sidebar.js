import React, { useState } from "react";
import { Box, Heading, Image, Button } from "rebass";
import NextLink from "next/link";
import theme from "../styles/theme";

const Link = ({ href, text, color, path }) => (
  <Box width={1}>
    <NextLink href={href}>
      <Heading
        sx={{
          cursor: "pointer",
          padding: "1px 7px",
          "&:hover": {
            ...theme.text.highlight[color],
            mb: 2
          },
        }}
        {...(path === href && { variant: "highlight." + color })}
        fontSize={[15, 25]}
        mb={2}
      >
        {text}
      </Heading>
    </NextLink>
  </Box>
);

const links = [
  // { href: "/", text: "About", color: "pink" },
  { href: "/results", text: "View Results", color: "orange" },
  // { href: "/future", text: "3. Future", color: "purple" },
  // { href: "/comparisons", text: "4. Comparisons", color: "green" },
];

const Sidebar = ({ path }) => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "40%",
      boxShadow: "5px 80px 50px rgba(245, 0, 203, 0.22)",
      zIndex: 1000,
    }}
    px={5}
    py={6}
  >
    <Image sx={{ width: "150px", position: "absolute", top: "60px", left: "60px" }} src="/logo.png" />
    <Heading fontSize={[25, 40]} mt={5}>
      2020 <br /> Progressive <br />
      Tech Survey
    </Heading>
    <NextLink href="/results"><Button>View Results</Button></NextLink>
    <Box>


      {/* {links.map((data, index) => (
        <Link {...data} path={path} />
      ))} */}
    </Box>
  </Box>
);

export default Sidebar;
