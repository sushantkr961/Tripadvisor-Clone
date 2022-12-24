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

const Bihar = () => {
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
            Unlock Bihar
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
                Balmiki Tiger Reserve
              </chakra.h5>
              <Text mb={"50px"}>
                Balmiki Tiger Reserve forms the eastern most limit of the
                Himalayan Terai forests in India, and is the only tiger reserve
                of Bihar. Situated in the Gangetic Plains bio-geographic zone of
                the country, the forest has combination of bhabar and terai
                tracts. Valmiki Tiger Reserve lies in the north-westernmost West
                Champaran district of Bihar. Name of the district has been
                derived from two words Champa and Aranya meaning Forest of
                Champa trees. Wild mammals found in the forests of Valmiki Tiger
                Reserve are Tiger, Sloth bear, Leopard, Wild dog, Bison, Wild
                boar etc. Several species of deer and antelopes viz barking
                deer, spotted deer, hog deer, sambar and blue bull are also
                found here. In Madanpur forest block large number of Indian
                flying foxes can be sighted. The Reserve has rich avi-fauna
                diversity. Over 250 species of birds have been reported. Valmiki
                Sanctuary covers about 800 square kilometres (310 sq mi) of
                forest and was the 18th tiger reserve established in India...
              </Text>
              <Link
                href="https://tourism.bihar.gov.in/en/destinations/west-champaran/valmiki-tiger-reserve"
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
                src="https://th.bing.com/th/id/R.21d94e41e3f1097a086574fc7915c0f8?rik=uSSvQup61tHAMw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_Y-CUxvBqU_o%2fTHY88CQG0BI%2fAAAAAAAAAAg%2ff3FVkV0LB14%2fs1600%2fimage002.jpg&ehk=lFnhcLb8O2Rp%2fLmHgybf9xcordlF7KXGHbLTi8VaGQw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
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
        <Box mt="15px" p={'1.5'}>
          <Image src="https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/social-media-feed/social-feed-image.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Bihar;
