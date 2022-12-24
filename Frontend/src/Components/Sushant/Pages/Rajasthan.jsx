import React from "react";
import uttrakhand from "../assests/uk.mp4";
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

const Rajasthan = () => {
  return (
    <Box w={{ base: "100%", md: "70%" }} margin="auto">
      <AspectRatio ratio={16 / 9} mb="30px">
        <video src={uttrakhand} autoPlay loop muted />
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
            Unlock Rajasthan
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
                Jaisalmer
              </chakra.h5>
              <Text mb={"50px"}>
              Laser Water Show at Gadisar Lake is one of the first and largest Laser Water Show having water screen projection mapping using 3-chip DLP projectors of 25,000 lumens. Show depicts story of founders of Jaisalmer city, Jaisalmer fort, attacks of invaders on the fort & sacrifice of brave Rajput to save their land, glimpses of other tourist locations in Jaisalmer region e.g. Tanot Mata Temple, Lodruva Temple, Laxminarayan Temple, Longowala war scenes, etc.
              </Text>
              <Link
                href="https://www.tourism.rajasthan.gov.in/"
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
                src="https://th.bing.com/th/id/OIP.W1etyO6qh63VnXxaquouSAHaGg?w=209&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          <Image src="https://th.bing.com/th/id/OIP.bw6pQHaUFPKoxeVju4BG9wHaCp?w=307&h=124&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://www.mahatourism.in/images/header.jpg" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Rajasthan;
