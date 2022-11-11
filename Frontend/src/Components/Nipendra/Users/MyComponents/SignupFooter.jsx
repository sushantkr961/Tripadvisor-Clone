import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SignupFooter = ({ onClose }) => {
  return (
    <>
      <Stack mt={6} textAlign="center">
        <Text>Already a Member</Text>
        <Text>
          <Link as={"b"} onClick={onClose}>
            Login{" "}
          </Link>
          using TravelGo account
        </Text>
      </Stack>
    </>
  );
};

export default SignupFooter;
