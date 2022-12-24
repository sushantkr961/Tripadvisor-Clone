import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from "@chakra-ui/react";
import { logout } from "../../../Redux/Users/Login/login.action";
import { Navigate, useNavigate } from "react-router-dom";

const CheckPage = () => {
  const { isAuth, isLoading, isError, noEmail, incorrectEmail, token } =
    useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isAuth) {
      navigate("/login");
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Button onClick={handleAuth}>{isAuth ? "LOGOUT" : "LOGIN"}</Button>
      <Text>This is check page</Text>
    </>
  );
};

export default CheckPage;
