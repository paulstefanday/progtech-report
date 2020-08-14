/* eslint no-unused-vars: 0 */
import React, { useState } from "react";
import { Flex, Heading, Button, Box, Text } from "rebass";
import { Input } from "@rebass/forms";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

import Link from "next/link";
import GraphHeading from "../components/GraphHeading";
import BarGraph from "../components/BarGraph";
import ColorBox from "../components/ColorBox";
import Jumbotron from "../components/Jumbotron";
import Sidebar from "../components/Sidebar";

const App = (props) => {
  return (
    <>



      <Head>
        <title>ProgTech Network Australia</title>
      </Head>
      <Sidebar path={props.router.pathname} />
      <Box
  sx={{
    // overflowY: "scroll",
    // overflowX: "hidden",
    // position: "fixed",
    // top: 0,
    // right: 0,
    // height: "100%",
    // width: "60%",
    marginLeft: "40%",
    position: "relative"
  }}
>
      {/* <GraphHeading text="About the survey" /> */}
      <ColorBox index={0}>
      <ScrollAnimation  animateIn="flipInX"><Heading fontSize={[20, 30]} mb={4}>
          Who are we?
        </Heading></ScrollAnimation>
 <p>
        ProgTech is a network of progressive member organisations committed to teaming up on tech to win.
        </p>
        <p>
        We want a world where progressive organisations and activists have the best tools possible, and the skills and support to use them.
        </p>
      </ColorBox>
      <ColorBox index={1}>
      <ScrollAnimation  animateIn="flipInX"><Heading fontSize={[20, 30]} mb={4}>
          Why we did this?
        </Heading></ScrollAnimation>
    <p>
        It’s hard enough to win progressive change. It’s harder when our tech doesn’t work for us, and when we’re trying to solve our common challenges in isolation.
</p><p>
This survey makes the challenges clear: organisations report that they’re constantly reinventing the wheel, operating in silos, using inadequate tools with insufficient skills, making do with minimal investment, that the tech space is exclusionary, that tech staff are often unsupported, and that we’re not doing the long-term movement-wide thinking on tech that we need.
</p><p>
It doesn’t have to be this way. Networks like the Progressive Coders Network (US), the Movement Cooperative (US) and the OPEN Tech Network (international) show us how much we have to gain from working and learning together on tech here in Australia.
</p><p>
But it will take organisations coming together as a network to build the relationships and trust needed for tech collaboration to take root.

        </p>
      </ColorBox>
      <ColorBox index={2}>
      <ScrollAnimation  animateIn="flipInX"><Heading fontSize={[20, 30]} mb={4}>
            The survey
          </Heading></ScrollAnimation>

          <p>This survey was completed by more than 50 leaders from across the progressive sector in Australia. Click below to see the results from the survey.</p>
          <Link href="/results"><Button>View results</Button></Link>
      </ColorBox>
      </Box>
    </>
  );
};

export default App;
