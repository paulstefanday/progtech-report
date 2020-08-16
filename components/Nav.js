import React, { useState } from "react";
import { Box, Flex, Link, Image, Button } from "rebass";
import NextLink from "next/link";

const styles = {
  alignItems: "center",
  flexDirection: "row",
  zIndex: "100000",
  position: "fixed",
  width: "100%",
  transition: "background-color 200ms linear",
  top: 0,
  left: 0,
  p: 2,
  img: {
    width: ["100px", "150px"],
  },
  a: {
    variant: "buttons.primary",
    bg: "transparent",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: 0,
    mr: 3,
    transition: "background-color 200ms linear",
    color: "inherit",
    textDecoration: "none",
    ":hover,:focus,&.active": {
      bg: "black",
      color: "white",
    },
  },
  "& .logo": {
    ":hover,:focus": {
      bg: "transparent",
    },
  },
  "& .dropdown-content a": {
    width: "100%",
    textAlign: "left",
    color: "black",
    ":hover,:focus,&.active": {
      bg: "rgba(255,255,255,0.3)",
    },
  },
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    // { title: "About", href: "/overview" },
    // { title: "Mentorship", href: "/mentorship" },
    // { title: "Team", href: "/team" },
    // { title: "Join", href: "/join" },
    // { title: "Contact Us", href: "/contact" },
    {
      title: "Survey",
      href: "https://form.typeform.com/to/C8Sthe",
      target: "_blank",
    },
  ];

  if (!open)
    return (
      <>
      <Box mx="auto" />
        <Button onClick={() => setOpen(true)}>Menu</Button>
      </>
    );

  return (
    <Flex
      bg="white"
      flexDirection="column"
      p={5}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Button
        onClick={() => setOpen(false)}
        sx={{ position: "fixed", top: "15px", right: "10px" }}
      >
        Close
      </Button>
      {menu.map((item) =>
        item.target ? (
          <Link  width={1} {...item}>
            {item.title}
          </Link>
        ) : (
            <Box py={2}><Link width={1} {...item}>{item.title}</Link></Box>
        )
      )}
    </Flex>
  );
};

const DesktopNav = () => (
  <>
    <Box mx="auto" />
    
      <Link  href="https://progtech.net.au/join">
      join</Link>
    {/*
      <Box className="dropdown-content">
        <NextLink href="/overview">
          <a>Overview</a>
        </NextLink>
        <NextLink href="/team">
          <a>Team</a>
        </NextLink>
        <NextLink href="/contact">
          <a>Contact Us</a>
        </NextLink>
      </Box>
    </Link>
    <Link className="dropdown" href="#!">
      Programmes
      <Box className="dropdown-content">
        <NextLink href="/mentorship">
          <a>Mentorship</a>
        </NextLink>
      </Box>
    </Link>
    <NextLink href="/join">
      <a>Join</a>
    </NextLink> */}
    <Link
      target="_blank"
      className="active"
      href="https://progtech.typeform.com/to/ZAU0MgR5#source=survey-report"
    >
      Launch event
    </Link>
  </>
);

class Nav extends React.Component {
  state = { bg: "transparent" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 50) {
      if (this.state.bg === "transparent") {
        this.setState({ bg: "white" });
      }
    } else {
      if (this.state.bg === "white") {
        this.setState({ bg: "transparent" });
      }
    }
  };

  render() {
    return (
      <Flex
        sx={{
          ...styles,
          ...(this.state.bg === "white" && {
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.255)",
          }),
        }}
        bg={this.state.bg}
      >
        <Link className="logo" href="https://progtech.net.au">
          <Image src="/logo.png" />
        </Link>
        {this.props.isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    );
  }
}

export default Nav;
