import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "./TravelGo.png";
import SignupModal from "./SignupModal";
const LoginForm = () => {
  return (
    <Box>
      <Image w={150} src={Logo} />
      <Text fontSize="4xl" as="b">
        Welcome to TravelGo!
      </Text>
      <Text fontSize={"md"}>
        Please Login/Register using your Email/Mobile to continue
      </Text>
      <FormControl
        w={{ base: "95%", lg: "50%" }}
        m={"auto"}
        boxShadow="xs"
        p="6"
        rounded="md"
        bg="white"
      >
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <Button
          _hover={{
            background: "rgb(247, 247, 249)",
            color: "black",
          }}
          rounded={"full"}
          w={"full"}
          mt={4}
          color="white"
          bg="black"
          type="submit"
        >
          Sign In
        </Button>
      </FormControl>
      <Box>
        <SignupModal />
      </Box>
    </Box>
  );
};

export default LoginForm;
