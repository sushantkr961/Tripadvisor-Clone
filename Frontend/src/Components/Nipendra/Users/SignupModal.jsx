import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import signup from "../../../Redux/Users/Signup/signup.action";
import SocialLogin from "./MyComponents/SocialLogin";

function SignupModal() {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(signup(user));
    }
  };

  return (
    <Box w={{ base: "95%", lg: "50%" }} m={"auto"} mt={4}>
      <Box fontSize={"md"}>
        <Text>New to TravelGo</Text>
        <Link fontSize={"md"} onClick={onOpen} as="b" color="black">
          Join Now
        </Link>{" "}
        to unlock the best of TravelGo!
      </Box>
      <Divider mt={3} />
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
                      onChange={handleChange}
                      type="text"
                      name="firstName"
                      value={user.firstName}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
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
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      onChange={handleChange}
                      name="password"
                      value={user.password}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        rounded="full"
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                      >
                        {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Checkbox mt={6} defaultChecked>
                  Yes, inform me on deals & new features. I can opt out at any
                  time.
                </Checkbox>
                <Button
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
            <Stack mt={6} textAlign="center">
              <Text>Already a Member</Text>
              <Text>
                <Link as={"b"} onClick={onClose}>
                  Login{" "}
                </Link>
                using TravelGo account
              </Text>
            </Stack>
          </ModalBody>
          {/* <ModalFooter>
            
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      <SocialLogin />
    </Box>
  );
}
export default SignupModal;
