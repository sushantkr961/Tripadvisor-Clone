import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
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
import login from "../../../Redux/Users/Login/login.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isAuth, token, noEmail, incorrectEmail } =
    useSelector((store) => store.login);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(login(user));
    }

    setUser({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <Box>
      <Text fontSize="4xl" as="b">
        Welcome to TravelGo!
      </Text>
      <Text fontSize={"md"}>
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
          {noEmail ? (
            <Alert bg="none" status="error">
              <AlertIcon />
              Email does not exists. Please Register.
            </Alert>
          ) : incorrectEmail ? (
            <Alert bg="none" status="warning">
              <AlertIcon />
              Incorrect email or password.
            </Alert>
          ) : null}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Email"
              name="email"
              value={user.email}
              type="email"
              onChange={handleChange}
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
