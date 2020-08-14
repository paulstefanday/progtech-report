import React from "react";
import { Box, Heading, Text, Button, Link } from "rebass";
import Container from './Container';
import Bg, { styles } from './Bg';
// import Link from 'next/link';

const SingleAction = () => (
    <>
      <Box sx={styles} width={[1, 1 / 3]}>
        <Bg url="/images/2.jpg" opacity="1" />
      </Box>
      <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test2">
        <Container justifyContent="center">
          <Heading variant="highlight.purple">Sector Consultation</Heading>
          <Text variant="p">
            For this project to work, we need to ensure we're identifying our common challenges, and the highest impact interventions we can collectively make with precision. That's why it's important that progressive organisations take part in this consultation in our founding stages - can you take the survey below on behalf of your organisation? Anonymised and aggregated analysis will be published in July - so we can all see the state of progressive tech in Australia.
          </Text>
          <Link target="_blank" href="https://form.typeform.com/to/C8Sthe"><Button variant="primary">Take the survey now</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default SingleAction
