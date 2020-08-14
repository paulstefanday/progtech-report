import React, { useState } from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import { ToastContainer, toast } from 'react-toastify';


const JoinNewsletter = ({ inverse }) => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Join Newsletter");

  const submit = async (e) => {
    e.preventDefault();
    
    const body = {
      email,
      form: "NEWSLETTER",
    };
    const url = `${window.location.protocol}://${window.location.hostname}${
      window.location.port && ":" + window.location.port
    }`;
    setButtonText("Loading...");
    try {
      const res = await fetch(`/api/submission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setButtonText("Success");
      setEmail("");
    toast.dark("Thanks for your submission")
    } catch (error) {
      console.error(error);
      setButtonText("An Error Occured");
    }
  };
  return (
    <>
      <Input
        height="40px"
        width={[1, 3 / 5]}
        mb={0}
        sx={{
          bg: inverse ? "white" : "black",
          borderBottom: `1px solid ${inverse ? "black" : "white"}`,
        }}
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button
        onClick={submit}
        width={[1, 2 / 5]}
        variant={inverse ? "primary" : "secondary"}
        height="40px"
      >
        {buttonText}
      </Button>
    </>
  );
};

export default JoinNewsletter;
