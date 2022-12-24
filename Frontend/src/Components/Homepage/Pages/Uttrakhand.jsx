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

const Uttrakhand = () => {
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
            Unlock Uttrakhand
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
                KUMBH MELA: LEAP OF FAITH
              </chakra.h5>
              <Text mb={"50px"}>
                One of the largest human gatherings in the world, Kumbh Mela is
                a congregation of millions of people who assemble at the banks
                of the sacred Ganges to take a dip in its holy waters. While
                some believe it will wash away their sins, others consider it to
                be the biggest celebration of life. Recognizing the festival's
                importance, UNESCO included the Kumbh Mela on its Intangible
                Cultural Heritage of Humanity list in December 2017. The four
                venues where Kumbh Mela is held on a rotational basis are
                Haridwar, Ujjain, Prayagraj, and Nashik. Held every four years,
                each of these venues witnesses the mela once in 12 years. The
                Ardh Kumbh, taking place once in six years, is held in Prayagraj
                and Haridwar. We tell you what makes visiting a Kumbh Mela
                once-in-a-lifetime opportunity.The main purpose of people coming
                to Kumbh Mela is for the scared bath. While the whole period is
                considered auspicious, there are certain days said to be royal
                and scared than others. On these days, be ready to brace the
                crowd as thousands of devotees from across cities flock to
                Haridwar for a holy dip.
              </Text>
              <Link
                href="https://uttarakhandtourism.gov.in/"
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
                src="https://th.bing.com/th/id/OIP.0WKzsfE98K06TbyKkP6JhQHaGL?w=229&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7"
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
          <Image src="https://uttarakhandtourism.gov.in/sites/default/files/2021-01/check-this-out-2.jpg" />
          <Image src="https://uttarakhandtourism.gov.in/sites/default/files/2021-08/chardham.png" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Uttrakhand;
