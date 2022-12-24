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
  AlertIcon,
  Alert,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupButton from "./SignupButton";
import SignupFooter from "./SignupFooter";
import SocialLogin from "./SocialLogin";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import signup from './../../../Redux/Users/Signup/signup.action';

function SignupModal() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
    tc: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, errorMessage, successMessage } = useSelector(
    (store) => store.signup
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    dispatch(signup(user));

    setUser({
      name: "",
      lname: "",
      email: "",
      password: "",
      password_confirmation: "",
      tc: true,
    });
  };

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
            <Box>
              {errorMessage ? (
                <Alert fontWeight={"bold"} status="error" bg={"transparent"}>
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              ) : null}
              {successMessage ? (
                <Alert fontWeight={"bold"} status="success" bg={"transparent"}>
                  <AlertIcon />
                  {successMessage}
                </Alert>
              ) : null}
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Stack direction={"row"}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      placeholder={"Enter First Name"}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={user.name}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      placeholder={"Enter Last Name"}
                      onChange={handleChange}
                      type="text"
                      name="lname"
                      value={user.lname}
                    />
                  </FormControl>
                </Stack>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder={"Enter Email"}
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder={"Enter Password"}
                      onChange={handleChange}
                      name="password"
                      value={user.password}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        type={showPassword ? "text" : "password"}
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="password_confirmation">
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder={"Enter Confirm Password"}
                      onChange={handleChange}
                      name="password_confirmation"
                      value={user.password_confirmation}
                      type={showPassword2 ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        type={showPassword2 ? "text" : "password"}
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword2((showPassword2) => !showPassword2)
                        }
                      >
                        {showPassword2 ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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
