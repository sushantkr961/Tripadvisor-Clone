import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import SignupModal from "./SignupModal";
import PasswordInput from "./PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import login from "../../../Redux/Users/Login/login.action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth, errorMessage, successMessage } = useSelector(
    (store) => store.login
  );
  // let info = localStorage.getItem("token");
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(user));

    setUser({
      email: "",
      password: "",
    });
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <Text fontSize={{ base: "2xl", md: "4xl" }} as="b">
        Welcome to TravelGo!
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }}>
        Please Login/Register using your Email/Mobile to continue
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl
          w={{ base: "95%", lg: "50%" }}
          m={"auto"}
          mt={5}
          boxShadow="xs"
          p="6"
          rounded="md"
          bg="white"
        >
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
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              placeholder="Enter Email"
              name="email"
              value={user.email}
              type="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput
              onChange={handleChange}
              name={"password"}
              value={user.password}
            />
          </FormControl>
          <Button
            isLoading={isLoading}
            loadingText={"Signing you in"}
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
