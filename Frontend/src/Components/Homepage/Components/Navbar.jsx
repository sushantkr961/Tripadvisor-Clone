import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function Navbar() {
  const { isAuth, userInfo } = useSelector((store) => store.login);
  // const dispatch = useDispatch();

  const handleAuth = () => {
    if (isAuth) {
      <Navigate to={"/"} />;
    }
  };

  return (
    <Flex
      justify="center"
      position={"sticky"}
      top="0"
      zIndex={"100"}
      bg={"#FFFFFF"}
    >
      <Box w={{ base: "100%", md: "100%", lg: "65%" }}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to={"/"}>
              <Image
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                w="200px"
              />
            </Link>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Text
              as={"button"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              <MdOutlineNotifications fontSize={30} />
            </Text>
            <Link to={"/login"}>
              <Button
                display={"inline-flex"}
                fontSize={"md"}
                fontWeight={700}
                bg={"white"}
                borderRadius={"20px"}
                onClick={handleAuth}
              >
                {isAuth ? (
                  <Link to={"/profile/account"}>
                    <Icon
                      mt={2}
                      w={6}
                      h={6}
                      fontWeight={"bold"}
                      as={
                        userInfo?.User?.role === "admin"
                          ? RiAdminFill
                          : FaUserAlt
                      }
                    />
                  </Link>
                ) : (
                  "Sign In"
                )}
              </Button>
            </Link>
            <Link to={"/profile/cart"}>
              <Text
                m={"auto"}
                mt={2}
                as={"button"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
              >
                <HiOutlineShoppingCart fontSize={30} />
              </Text>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
