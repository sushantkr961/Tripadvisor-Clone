import { Box, Flex, Img, Button, Hide } from "@chakra-ui/react";
import React from "react";
import logo from "../assests/Website_Logo.png";
import { TbPencil } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Users/Login/login.action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.login);
  const handleAuth = () => {
    if (isAuth) {
      navigate("/");
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };
  return (
    <Box
      position={{ md: "static", lg: "sticky" }}
      top="0"
      bg="white"
      zIndex={100}
    >
      <Box w="63%" margin="auto">
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Link to={"/"}>
              <Img src={logo} mt={3} w={"100%"} height="60px" />
            </Link>
          </Box>
          <Flex gap="15px" alignItems="center" fontWeight="bold">
            <Box
              display="flex"
              cursor="pointer"
              ml="10px"
              p="10px 15px"
              border="none"
              borderRadius="15px"
              _hover={{ bg: "#e3f0e3" }}
            >
              <TbPencil fontSize="20px" /> Review
            </Box>
            <Hide below="md">
              <Box
                display="flex"
                cursor="pointer"
                ml="10px"
                p="10px 15px"
                border="none"
                borderRadius="15px"
                _hover={{ bg: "#e3f0e3" }}
              >
                <FiHeart fontSize="20px" /> Trips
              </Box>
              <Box
                display="flex"
                cursor="pointer"
                ml="10px"
                p="10px 15px"
                border="none"
                borderRadius="15px"
                _hover={{ bg: "#e3f0e3" }}
              >
                <AiOutlineBell fontSize="20px" /> Alerts
              </Box>
            </Hide>
            <Link to="/login">
              <Button
                onClick={handleAuth}
                p="10px 15px"
                border="none"
                borderRadius="15px"
                cursor="pointer"
                bg="#000000"
                color="#FFFFFF"
                fontWeight="bold"
                _hover={{ bg: "#545454" }}
              >
                {isAuth ? "Log Out" : "Sign In"}
              </Button>
            </Link>
            <Box
              display="flex"
              cursor="pointer"
              ml="10px"
              p="10px 15px"
              border="none"
              borderRadius="15px"
              _hover={{ bg: "#e3f0e3" }}
            >
              <BsCart3 fontSize="20px" /> Basket
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
