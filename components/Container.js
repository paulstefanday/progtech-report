import React from "react";
import { Flex } from "rebass";

const Container = ({ children, maxWidth = 712, justifyContent="inherit", flexWrap="wrap" }) => (
    <Flex
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      width={1}
      sx={{
        maxWidth,
        mx: "auto",
        px: [0, 3],
      }}
    >
      {children}
    </Flex>
  );

  export default Container