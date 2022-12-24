import React from "react";
import uk from "../assests/uk.mp4";
import {
  AspectRatio,
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const MadhyaPradesh = () => {
  return (
    <Box w={{ base: "100%", md: "70%" }} margin="auto">
      <AspectRatio ratio={16 / 9} mb="30px">
        <video src={uk} autoPlay loop muted />
      </AspectRatio>
      <Box>
        <Box>
          <chakra.h3
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={30}
            textAlign={"left"}
            color={"black"}
          >
            Unlock Madhya Pradesh
          </chakra.h3>
          <Text color={"purple.400"}>Extraordinary places to visit</Text>

          <Flex flexDir={{ base: "column", lg: "row" }} gap={5}>
            <Box w={{ base: "100%", md: "80%", lg: "90%" }}>
              <chakra.h5
                fontFamily={"Work Sans"}
                fontWeight={"bold"}
                fontSize={20}
                textAlign={"left"}
                color={"black"}
                mt={"10px"}
                mb={"10px"}
              >
                Majestic Orchha
              </chakra.h5>
              <Text mb={"50px"}>
              Exhibiting the wonderful Bundela-era legends, Orchha remains steadfast as the major historical site that has maintained the culture and legends of the rulers of the Bundela dynasty. Chieftain Rudra Pratap Singh founded Orchha on a piece of land along the Betwa river. This amazing town will fascinate you during your adventure, as it is a perfect destination to tour with friends and family. There are so many historical places to visit in Orchha and it is well connected to almost all the major towns of Madhya Pradesh.
              </Text>
              <Link
                href="https://www.mptourism.com/"
                _hover={{ textDecorationLine: "none" }}
              >
                <Button
                  bgColor={"teal"}
                  color={"white"}
                  _hover={{ color: "teal", bgColor: "white", border: "2px" }}
                >
                  Read More
                </Button>
              </Link>
            </Box>
            <Box>
              <Image
                src="https://th.bing.com/th/id/OIP.IHzYKQUnhrDeY1IL4qQMXQHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                w={"100%"}
                h={"100%"}
              />
            </Box>
          </Flex>
        </Box>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={30}
          textAlign={"left"}
          color={"black"}
          mt={'50px'}
        >
          Social Feed
        </chakra.h3>
        <Flex mt="15px" p={'1.5'}>
          <Image src="https://th.bing.com/th/id/OIP.8w3qnH_uJFDWYZ6DvASyOAHaD1?w=308&h=179&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.c0p7Aa8Niyd5JIT-d5AZPAHaFj?w=213&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.VwhjxcW1Lh1iKNwAt1oA2gHaE2?w=247&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.fG6qZ9QNGI7_1XEkNK78rQHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
        </Flex>
      </Box>
    </Box>
  );
};

export default MadhyaPradesh;
