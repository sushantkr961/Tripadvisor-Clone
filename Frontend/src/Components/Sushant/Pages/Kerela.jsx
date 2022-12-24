import React from "react";
import ker from "../assests/jammu.mp4";
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

const Kerela = () => {
  return (
    <Box w={{ base: "100%", md: "70%" }} margin="auto">
      <AspectRatio ratio={16 / 9} mb="30px">
        <video src={ker} autoPlay loop muted />
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
                Aralam Wildlife Sanctuary
              </chakra.h5>
              <Text mb={"50px"}>
              There are a number of popular wildlife sanctuaries in Kerala housing exotic and rare species of flora and fauna. Nestled in the elaborate forest of the majestic Western Ghats or Sahyadri Ranges in Kerala are  fourteen wildlife sanctuaries and two tiger reserves. Kerala also has six national parks containing protected and endangered species like the Indian Sloth-Bear, Lion-Tailed Macaque, Indian Bison, Bengal Tiger, Nilgiri Tahr etc.Spread over a 55 sq. km area of forests on the Western Ghats, the Aralam Wildlife Sanctuary is among the finest of its kind in Kerala. It plays host to an exotic array of flora and fauna and is among the most picturesque locations in Kannur district. The entire area is covered in tropical and semi-evergreen forests and is a truly riveting sight.One can catch sight of herds of elephants, gaur, sambar, spotted deer, barking deer, Nilgiri Langur, Hanuman Langur and the Malabar Giant Squirrel. It is also famous for the vast amount of butterfly species found here. Most of these are endemic to the Western Ghats. The forest is peaceful and many trekking options are available as well
              </Text>
              <Link
                href="https://www.keralatourism.org/"
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
                src="https://th.bing.com/th/id/OIP.kBqawVXKCHVzzDW8xxhskQHaKb?w=192&h=271&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          <Image src="https://th.bing.com/th/id/OIP.shf24SL9K5MLTEaOO7IFggHaDo?w=334&h=172&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th?q=Colash+of+Kerala+Tourism&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" />
          <Image src="https://th.bing.com/th?q=Kerala+Tourism+Board&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" />
          <Image src="https://th.bing.com/th?q=Kerala+Tourism+Painting&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Kerela;
