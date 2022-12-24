import { Box, Divider, Link, Text } from "@chakra-ui/react";
import React from "react";

const SignupButton = ({ onOpen }) => {
  return (
    <>
      <Box fontSize={"md"}>
        <Text>New to TravelGo</Text>
        <Link fontSize={"md"} onClick={onOpen} as="b" color="black">
          Join Now
        </Link>{" "}
        to unlock the best of TravelGo!
      </Box>
      <Divider mt={3} />
    </>
  );
};

export default SignupButton;
