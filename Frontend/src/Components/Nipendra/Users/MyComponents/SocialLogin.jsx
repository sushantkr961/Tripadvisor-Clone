import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const SocialLogin = () => {
  return (
    <Box w={"95%"} m={"auto"} mt={4}>
      <Stack variant="outline" w={"full"} direction="column" spacing={4}>
        <Button
          bg="white"
          border={"0.5px solid black"}
          rounded={"full"}
          leftIcon={<FcGoogle />}
        >
          Continue with Google
        </Button>

        <Button
          bg="white"
          border={"0.5px solid black"}
          rounded={"full"}
          leftIcon={<BsFacebook color="blue" />}
        >
          Continue with Facebook
        </Button>
      </Stack>
    </Box>
  );
};

export default SocialLogin;
