import React, { useState } from "react";
import { Box, Flex, Link, Image, Button, Heading } from "rebass";
import NextLink from "next/link";
import Bg from "../components/Bg";

const GraphHeading = ({ text, subheading }) => (
//   <Box width={1} bg="black" color="white" px={5} py={4}>
//     <Heading fontSize={[25, 35]} sx={{ maxWidth: "500px" }} m={0}>
//       {text}
//     </Heading>
//   </Box>

<Box color="black" width={1}>
{/* <Bg url="/images/2.jpg" greyscale={true} /> */}
<Box
  p={[4, 5]}
  // py={[5, 6]}
  width={1}
  sx={{
    zIndex: 1,
    position: "relative",
  }}
>
<Heading fontSize={[30, 50]} maxWidth={"250px"} my={[0, 5]}>
          {text}
        </Heading>
        {subheading && <p>{subheading}</p>}
</Box>
</Box>
);

export default GraphHeading;
