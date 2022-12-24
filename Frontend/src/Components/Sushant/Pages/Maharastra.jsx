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

const Maharashtra = () => {
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
            Unlock Maharastra
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
                Ahmednagar
              </chakra.h5>
              <Text mb={"50px"}>
              Ahmednagar, is a city located in the Ahmednagar district in the state of Maharashtra, India, about 120 km northeast of Pune and 114 km from Aurangabad. Ahmednagar takes its name from Ahmad Nizam Shah I, who founded the town in 1494 on the site of a battlefield where he won a battle against superior Bahamani forces. It was close to the site of the village of Bhingar. With the breakup of the Bahmani Sultanate, Ahmad established a new sultanate in Ahmednagar, also known as Nizam Shahi dynasty.
              </Text>
              <Link
                href="https://www.maharashtratourism.gov.in/web/mh-tourism"
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
                src="https://1.bp.blogspot.com/_vg0eO7Q5M9c/TB463qw2hMI/AAAAAAAAAA8/A8gfAXRZbxw/s1600/maharashtra-tourist-map.png"
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
          <Image src="https://www.maharashtratourism.gov.in/documents/38210/38346/shivaji-maharaj.png/7c6ca4dc-b796-7958-1759-ab774a8c5d52?t=1617347572104&download=true" />
          <Image src="https://www.mahatourism.in/images/header.jpg" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Maharashtra;
