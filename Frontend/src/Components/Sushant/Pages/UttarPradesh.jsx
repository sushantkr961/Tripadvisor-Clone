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

const UttarPradesh = () => {
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
            Unlock Uttar Pradesh
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
                AYODHYA
              </chakra.h5>
              <Text mb={"50px"}>
                Famed as the birth place of Lord Ram, it is an important
                pilgrimage centre situated on the right bank of the river Saryu,
                about 110 km from Lucknow.For centuries, it was the capital of
                the descendants of the Surya dynasty of which Lord Rama was the
                most renowned king. Ayodhya during ancient times was known as
                Kaushal Desh. Skand and some other Puranas rank Ayodhya as one
                of the seven most sacred cities of India.Ayodhya is
                pre-eminently a city of temples. Remnants of Hinduism, Buddhism,
                Jainism and Islam can still be found in Ayodhya.According to
                Jain tradition, five Tirthankaras were born at Ayodhya,
                including Adinath (Rishabhadeva) the 1st Tirthankar. Ramkot,
                Hanumangarhi,Kanak Bhawan and Suraj Kund appear to spring up
                from pages of history.The Saryu is a sacred river and finds
                mention in ancient scriptures. Hundreds of devotees come here to
                take a holy dip in Saryu throughout the year on various
                religious occasions.
              </Text>
              <Link
                href="https://uptourism.gov.in/en"
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
                src="https://th.bing.com/th/id/OIP.KUfk612_UrEr8HLGzjCnegHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          <Image src="https://th.bing.com/th/id/OIP.ZGONefKA_HX8379ZZQYrnwHaDJ?w=346&h=148&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.aXyh-sxJwLXL59DXQN8uTgHaFS?w=249&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.nI0acXto4m-e1i0kOpLxOgAAAA?w=193&h=129&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.wxBBjsaajN7rVtPpEpwgegHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
          <Image src="https://th.bing.com/th/id/OIP.cbuchG56SdPWJp-jYy8E1wAAAA?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
        </Flex>
      </Box>
    </Box>
  );
};

export default UttarPradesh;
