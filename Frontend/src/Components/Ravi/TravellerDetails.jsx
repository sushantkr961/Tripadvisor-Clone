import React from "react";
import "./Traveller.css";
import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import { ImUser } from "react-icons/im";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { MdSmartphone, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function TravellerDetails() {
  return (
    <Box
      className="formbox"
      width={["100%", "100%", "100%", "100%", "60%"]}
      padding={{ base: "10px", sm: "50px", md: "50px", lg: "70px" }}
    >
      <Flex gap="3%" alignItems="center">
        <CgUserlane size="10%" />
        <Text
          fontSize={{ base: "30px", sm: "40px", md: "60px", lg: "60px" }}
          fontWeight="500"
        >
          Traveller Details
        </Text>
      </Flex>

      <Box mt="40px" textAlign="center">
        <Text fontSize="150%" fontWeight="bold">
          Secure Checkout
        </Text>
        <Text fontSize="xl" bgColor="teal.100">
          Checkout securely - takes only a few minutes
        </Text>
      </Box>

      <Flex className="flex1">
        <GrContactInfo size="45px" />
        <Text fontSize="180%" fontWeight="500">
          Contact Details
        </Text>
      </Flex>
      <br />

      <Flex
        gap="40%"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box padding="10px">
          <Flex className="flex2">
            <SiGmail className="icons" />
            <Text className="Text1">Gmail</Text>
          </Flex>
          <Input placeholder="Enter Gmail Here" w="100%" />
        </Box>
        <Box padding="10px">
          <Flex className="flex2">
            <MdSmartphone className="icons" />
            <Text className="Text1">Phone No.</Text>
          </Flex>
          <Input placeholder="Enter Gmail Here" w="100%" />
        </Box>
      </Flex>

      <Flex className="flex1">
        <BiMessageAltDetail size="45px" />
        <Text fontSize="180%" fontWeight="500">
          Traveller Details
        </Text>
      </Flex>
      <br />

      <Text ml="1%" as="u" fontWeight="500">
        Travler 1
      </Text>
      <Flex
        gap="40%"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box padding="10px">
          <Flex className="flex2">
            <MdOutlineDriveFileRenameOutline className="icons" />
            <Text className="Text1">First name</Text>
          </Flex>
          <Input placeholder="First Name" w="100%" />
        </Box>
        <Box padding="10px">
          <Flex className="flex2">
            <MdOutlineDriveFileRenameOutline className="icons" />
            <Text className="Text1">Last Name</Text>
          </Flex>
          <Input placeholder="Last Name" w="100%" />
        </Box>
      </Flex>
      <br />
      <Text as="u" ml="1%" fontWeight="500">
        Travler 2
      </Text>
      <Flex
        gap="40%"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box padding="10px">
          <Flex className="flex2">
            <MdOutlineDriveFileRenameOutline className="icons" />
            <Text className="Text1">First Name</Text>
          </Flex>
          <Input placeholder="First Name" w="100%" />
        </Box>
        <Box padding="10px">
          <Flex className="flex2">
            <MdOutlineDriveFileRenameOutline className="icons" />
            <Text className="Text1">Last Name</Text>
          </Flex>
          <Input placeholder="Last Name" w="100%" />
        </Box>
      </Flex>

      <br />
      <Box>
        <Text fontSize="150%" fontWeight="bold" textAlign="center">
          Tour Specific
        </Text>
        <Text fontSize="100%" fontWeight="500" textAlign="center">
          Hotel Pickup
        </Text>
        <br />
        <Text fontSize="90%" fontWeight="300" textAlign="center">
          The provider offers pickup from select hotel Meet the provider at one
          of the listed hotels
        </Text>
        <Input className="input1" placeholder="Enter Pickup Location" />
        <Link to={"/payment"}>
          <Button className="button">Next</Button>
        </Link>
      </Box>
    </Box>
  );
}
