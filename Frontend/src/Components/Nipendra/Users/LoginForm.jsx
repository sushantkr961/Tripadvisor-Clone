import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Logo from "./TravelGo.png";
import SignupModal from "./SignupModal";
import PasswordInput from "./MyComponents/PasswordInput";
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
      <form>
        <FormControl
          w={{ base: "95%", lg: "50%" }}
          m={"auto"}
          mt={5}
          boxShadow="xs"
          p="6"
          rounded="md"
          bg="white"
        >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput />
          </FormControl>
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
      </form>
      <Box>
        <SignupModal />
      </Box>
    </Box>
  );
};

export default LoginForm;
