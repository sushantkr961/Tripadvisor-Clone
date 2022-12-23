import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./profile.module.css";
import { FiSettings } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
// import { getUser, logout } from "../../../redux/User/Login/login.action";
import { useDispatch, useSelector } from "react-redux";
import MobileNav from "./MobileProfileComponent";
import { logout } from "../../../Redux/Users/Login/login.action";

const LinkItems = [
  { name: "Account", icon: FiSettings, href: "/profile/account" },
  { name: "Orders", icon: BsCart3, href: "/profile/orders" },
  { name: "Address", icon: FaUserEdit, href: "/profile/address" },
  { name: "Support", icon: BiSupport, href: "/profile/support" },
];

export default function SimpleSidebar({ children }) {
  //   const { isAuth } = useSelector((store) => store.login);
  //   const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const token = localStorage.getItem("token");

  //   useEffect(() => {
  //     if (isAuth) {
  //       dispatch(getUser(token));
  //     }
  //   }, []);
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        border={"1px"}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box border={"1px"} ml={{ base: 0, md: "28%" }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, children, ...rest }) => {
  const { isAuth } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isAuth) {
      dispatch(logout());
    }
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "28%" }}
      pos="absolute"
      {...rest}
    >
      <Box
        h="20"
        alignItems="center"
        mx="8"
        mt={20}
        justifyContent="space-between"
      >
        <Text
          color={"black"}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          User Information Here
          {/* {userInfo?.User?.name} */}
        </Text>
        {/* {userInfo?.User?.email} */}
      </Box>
      {LinkItems.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          to={link.href}
        >
          <Flex justifyContent={"space-between"} px={6} py={6}>
            <Text>{link.name}</Text>

            <Icon as={link.icon} />
          </Flex>
        </NavLink>
      ))}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.default
        }
      >
        <Flex
          onClick={handleAuth}
          justifyContent={"space-between"}
          px={6}
          py={6}
        >
          <Text color={"black"}>Log Out</Text>
          <Icon as={AiOutlinePoweroff} />
        </Flex>
      </NavLink>
    </Box>
  );
};
