import { Avatar, Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import testimonials from "../../../hotel.json";

function TestimonialCard(props) {
  console.log(testimonials)
  const { name, role, content, avatar } = props;
  return (
    <Flex
      // border={'1px'}
      boxShadow={"md"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"md"}
      p={5}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={30}
          textAlign={"left"}
          color={"black"}
        >
          Reviews
        </chakra.h3>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={15}
          textAlign={"left"}
          textTransform={"uppercase"}
          color={"purple.400"}
        >
          People love us
        </chakra.h3>
      </Box>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"5"} mt={5} mx={"auto"}>
        {testimonials.review.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
