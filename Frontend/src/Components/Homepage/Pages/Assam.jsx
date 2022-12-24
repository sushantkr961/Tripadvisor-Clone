import React from "react";
import jammu from "../assests/jammu.mp4";
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

const Assam = () => {
  return (
    <Box w={{ base: "100%", md: "70%" }} margin="auto">
      <AspectRatio ratio={16 / 9} mb="30px">
        <video src={jammu} autoPlay loop muted />
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
            Unlock Kerala
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
                Kaziranga National Park (KNP)
              </chakra.h5>
              <Text mb={"50px"}>
                Kaziranga National Park (KNP) is located in the floodplain of
                the Brahmaputra River in the Nagoan, Golaghat and Sonitpur
                districts of Assam, India sprawl over an area of 1030 square
                kilometers and it is the largest protected region on southern
                bank of the Brahmaputra River. As far as the terrain of the park
                is concerned it is flat (approx 55-75 above sea level) with an
                east to west inclination. Since the park area is the part of the
                floodplain of the Brahmaputra River the soil of the park is rich
                in alluvial deposits (sandy loam to clay).Almost after many
                decades of efforts and experiments, Kaziranga National Park has
                become a well-known example of the success of wildlife
                conservation. As a outcome of sustained conservation endeavor,
                the estimated number of rhinoceros has significantly increased
                from just 40 in 1911 to more than 2400 in the year 2018
                according to the census which was jointly conducted by the
                forest department of the Government of the Assam and some
                recognized wildlife NGOs. The sad part of the story are floods
                that occurs annually which is spread over Nagoan, Golaghat and
                Sonitpur districts of Assam and covers an area of little more
                than a thousand square kilometers (482 square kilometers of core
                zone and 548 square kilometers of buffer zone).
              </Text>
              <Link
                href="https://assamtourism.gov.in/"
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
                src="https://th.bing.com/th/id/OIP.lS1UmKE2uaTtp99ta5mivQHaFP?w=269&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          mt={"50px"}
        >
          Social Feed
        </chakra.h3>
        <Flex mt="15px" p={"1.5"}>
          <Image src="https://th.bing.com/th/id/OIP.gPJoAJlew7ILtp4OMUCaRQHaEc?w=308&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.rJo_CiYtsAO4KUwTpBKFnAHaFt?w=239&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.-7EQM4pff0SFRP7g2pJuvAHaEL?w=282&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.j605gJQmOvLSZ68pPQnTBgHaFs?w=244&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Assam;
