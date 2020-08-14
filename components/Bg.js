import React from "react";
import { Box } from "rebass";

const Bg = ({ url, opacity = 0.1, greyscale = false }) => (
    <Box
      width={1}
      sx={{
        ...greyscale && { filter: "grayscale(100%)" },
        width: "100%",
        height: "100%",
        opacity,
        position: "absolute",
        zIndex: 0,
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    />
  );

  const styles = { position: "relative", overflow: "hidden" }

  export {
    styles
  };

  export default Bg;