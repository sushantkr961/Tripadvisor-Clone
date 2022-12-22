import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
} from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

export default function WithSubnavigation() {

  return (
    <Flex justify='center' position={'sticky'} top="0" zIndex={'100'} bg={'#FFFFFF'}>
      <Box w={{base:'100%', md:"100%", lg: "65%"}}>
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
            <Image
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              w='200px'
            />
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
              <FiHeart fontSize={25} />
            </Text>
            <Text
              as={"button"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              <MdOutlineNotifications fontSize={30} />
            </Text>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"md"}
              fontWeight={700}
              color={"white"}
              bg={"black"}
              href={"#"}
              borderRadius={'20px'}
              _hover={{
                bg: "white",
                color: "black",
                border: '1px'
              }}
            >
              Sign Up
            </Button>
            <Text
              as={"button"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              <HiOutlineShoppingCart fontSize={30} />
            </Text>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}