import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiGlobe } from "react-icons/bi";
import { IoIosBed, IoIosRestaurant } from "react-icons/io";
import { MdHolidayVillage } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { TfiMoreAlt } from "react-icons/tfi";

const Navbar2 = () => {
  return (
    <Box w="62%" margin="auto" mt="30px">
      <Flex fontSize="16px" gap="15px" margin="auto">
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid black"
          as={Button}
          p="15px 15px"
          w="150px"
          borderRadius="12px"
          cursor="pointer"
          alignItems="center"
          _hover={{ bg: "#000000", color: "white" }}
        >
          Hotels <IoIosBed fontSize="20px" />{" "}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid black"
          p="15px 15px"
          w="150px"
          as={Button}
          borderRadius="12px"
          cursor="pointer"
          alignItems="center"
          _hover={{ bg: "#000000", color: "white" }}
        >
          Holiday Homes <MdHolidayVillage fontSize="20px" />{" "}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid black"
          p="15px 15px"
          as={Button}
          w="150px"
          borderRadius="12px"
          cursor="pointer"
          alignItems="center"
          _hover={{ bg: "#000000", color: "white" }}
        >
          Things to Do <RiTodoFill fontSize="20px" />{" "}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid black"
          p="15px 15px"
          w="150px"
          as={Button}
          borderRadius="12px"
          cursor="pointer"
          alignItems="center"
          _hover={{ bg: "#000000", color: "white" }}
        >
          Restaurants <IoIosRestaurant fontSize="20px" />{" "}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid black"
          p="15px 15px"
          w="150px"
          as={Button}
          borderRadius="12px"
          cursor="pointer"
          alignItems="center"
          _hover={{ bg: "#000000", color: "white" }}
        >
          Travel Stories <BiGlobe fontSize="20px" />{" "}
        </Box>
        <Menu>
          <MenuButton
            display="flex"
            justifyContent="space-between"
            border="1px solid black"
            bg="#ffffff"
            p="15px 15px"
            w="150px"
            borderRadius="12px"
            cursor="pointer"
            alignItems="center"
            textAlign="left"
            _hover={{ bg: "#000000", color: "white" }}
            _expanded={{ bg: "#000000", color: "white" }}
            fontSize="16px"
            as={Button}
            rightIcon={<TfiMoreAlt fontSize="20px" />}
          >
            More
            <MenuList
              color="#000000"
              bg="#ffffff"
              borderRadius="10px"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p="20px"
            >
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Add a Place
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Airlines
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Car Hire
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Flights
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Cruises
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Help Centre
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Package Holidays
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Travel Forums
              </MenuItem>
              <MenuItem
                border="none"
                color="#000000"
                bg="#ffffff"
                p="10px 15px"
                mb="5px"
                textAlign="left"
                fontSize="16px"
              >
                Travells' Choice
              </MenuItem>
            </MenuList>
          </MenuButton>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar2;
