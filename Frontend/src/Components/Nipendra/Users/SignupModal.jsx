import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signup from "../../../Redux/Users/Signup/signup.action";
import PasswordInput from "./MyComponents/PasswordInput";
import SignupButton from "./MyComponents/SignupButton";
import SignupFooter from "./MyComponents/SignupFooter";
import SocialLogin from "./MyComponents/SocialLogin";

function SignupModal() {
  const dispatch = useDispatch();
  const toast = useToast();
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, isSignUp, errorMessage } = useSelector(
    (store) => store.signup
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(signup(user));
    }
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const handleToast = () => {
    if (
      errorMessage.status === 402 &&
      !errorMessage.idToken &&
      !isSignUp &&
      count === 0
    ) {
      toast({
        title: "Already have an account",
        status: "error",
        position: "bottom",
        isClosable: true,
      });
      setCount((prev) => prev + 1);

      return;
    }
    if (
      errorMessage.idToken &&
      errorMessage.status !== 402 &&
      isSignUp &&
      count === 0
    ) {
      toast({
        title: "Account Created Successfully",
        description: "Login to continue.",
        status: "success",
        position: "bottom",
        isClosable: true,
      });
      setCount((prev) => prev + 1);
      return;
    }
  };
  useEffect(() => {
    handleToast();
  }, [errorMessage]);

  return (
    <Box w={{ base: "95%", lg: "50%" }} m={"auto"} mt={4}>
      <SignupButton onOpen={onOpen} />
      <Modal size={"3xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"2xl"}>
            Join to unlock the best of TravelGo!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <Stack direction={"row"}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      placeholder={"Enter First Name"}
                      onChange={handleChange}
                      type="text"
                      name="firstName"
                      value={user.firstName}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      placeholder={"Enter Last Name"}
                      onChange={handleChange}
                      name="lastName"
                      value={user.lastName}
                      type="text"
                    />
                  </FormControl>
                </Stack>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder={"Enter Email"}
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <PasswordInput
                    name={"password"}
                    value={user.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <Checkbox mt={6}>
                  Yes, inform me on deals & new features. I can opt out at any
                  time.
                </Checkbox>
                <Button
                  isLoading={isLoading}
                  _hover={{
                    background: "rgb(247, 247, 249)",
                    color: "black",
                  }}
                  rounded={"full"}
                  w={"full"}
                  mt={6}
                  color="white"
                  bg="black"
                  type="submit"
                  onClick={handleToast}
                >
                  Join
                </Button>
              </FormControl>
            </form>
            <SignupFooter onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <SocialLogin />
    </Box>
  );
}
export default SignupModal;
