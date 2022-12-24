import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { userInfo } = useSelector((store) => store.login);
  console.log(userInfo.User);
  return (
    <Box bg="#9DC4FB">
      <Flex>
        <Box
          lineHeight={10}
          fontSize={24}
          minH={"80vh"}
          w={"90%"}
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Flex gap={2}>
            <Text>First Name: </Text>
            <Text fontWeight={"bold"}> {userInfo?.User?.name}</Text>{" "}
          </Flex>
          <Flex gap={2}>
            <Text>Last Name </Text>{" "}
            <Text fontWeight={"bold"}>{userInfo?.User?.lname}</Text>
          </Flex>
          <Flex gap={2}>
            <Text>User ID: </Text>{" "}
            <Text fontWeight={"bold"}>{userInfo?.User?.name + "1234"}</Text>
          </Flex>
          <Flex gap={2}>
            <Text>Email: </Text>{" "}
            <Text fontWeight={"bold"}>{userInfo?.User?.email}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Account;
