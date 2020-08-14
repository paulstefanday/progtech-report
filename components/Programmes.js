import React from "react";
import { Box, Heading, Text, Button } from "rebass";
import Link from 'next/link';

import Bg from './Bg';

const Programmes = () => {
    const props = {
      p: [4, 5],
      textAlign: "center",
    };
    // test2
    return (
      <>
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test1" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.green">Share tools & code</Heading>
            <Text variant="p">
              Our ambitious movements need the best tools we can get - but often, 
              we end up build the same tools over and over, reinventing the wheel in 
              isolation from each other. We’re starting a shared library of tech - 
              including tools like custom metrics for Nationbuilder, website themes, and 
              code for integrations between common platforms.
            </Text>
            {/* <Link href="/sharecode"><Button variant="primary">Get Involved</Button></Link> */}
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-4.jpg" opacity="1" />
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test7" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.orange">Mentorship program</Heading>
            <Text variant="p">
              The next round of ProgTech's mentorship program is open for applications 
              - providing practical support for women, non binary people, and BIPOC campaigners 
              in building tech skills for progressive campaigning work, as well as demystifying 
              careers in tech.
            </Text>
            <Link href="/mentorship"><Button variant="primary">Learn More</Button></Link>
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/4.jpg" opacity="1" />
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test3" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.pink">Skill-shares and trainings</Heading>
            <Text variant="p">
              We're gearing up to launch a series of trainings for progressive campaigners,
              organisers, comms whizzes, and techies - from Excel tips for
              organisers online sessions, through to coding fellowships. Watch
              this space - we'll launch the program on August 27th!
            </Text>
            {/* <Link href="/events"><Button variant="primary">Learn more</Button></Link> */}
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-2.jpg" opacity="1" />
        </Box>
      </>
    );
  };

  export default Programmes
