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

const Jammu = () => {
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
            Unlock Jammu
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
                Skiing and Rafting
              </chakra.h5>
              <Text mb={"50px"}>
              The Himalayas provide an excellent skiing experience owing to their height which makes for long descents. One sprawling across a flat top in the Shivalik range of lower Himalayas and another like a cup shaped meadow surrounded by gigantic conifers, twin resorts of Patnitop (2024 metres – from sea level) and sanasar (2079 metres from sea level) provide an excellent skiing experience especially to beginners. The Jai Valley at a height of 7000 ft. located 32 Kms from Bhaderwah, and 232 kms (aaprox.) from Jammu is an extremely beautiful region spread over 6 kms receives ample snow to attract ski-lovers & Snow-boarding surfers.The skiing seasons in Jammu is between January & March.White water River Rafting gives you an adrenaline rush & washes your fear in the gushing waters of mighty river Chenab. The best time for White Water Rafting in Jammu is between April to June and from September to November. The Reasi- Dera Baba Banda Bahadur stretch of 12 kms (approx.) houses rapids upto 3rd grade and is ideal for amateurs and joy rides. Best part is that any one can go for White Water Rafting with proper protective gear; you don’t necessarily have to know swimming. However, the stretch between Thatri and Pul-Doda needs technical maneouvering and is perfect for professionals and experts.
              </Text>
              <Link
                href="http://jammutourism.gov.in/"
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
                src="https://th.bing.com/th/id/OIP.FC1fv5Ahag1otFs_9EtXsgAAAA?w=238&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          <Image src="http://jammutourism.gov.in/images/bannerAdventure.jpg" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Jammu;
