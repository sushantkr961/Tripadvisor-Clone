import { Box, Img, Link, Text } from "@chakra-ui/react";
import Carousel from "@itseasy21/react-elastic-carousel";
import React from "react";
import Card from "../../Homepage/Carousel/Card";
import winner from "../assests/winners.jpeg";

const Temple = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Box mb="100px">
      <Box
        w={{ base: "100%", md: "90%", lg: "71%" }}
        margin="auto"
        mt="50px"
        mb="70px"
      >
        <Box w="89%" margin="auto" mb="10px">
          <Text textAlign="left" fontSize="24px" fontWeight="bold">
            Most Popular Temples to visit in India
          </Text>
        </Box>
        <Box display="flex">
          <Carousel breakPoints={breakPoints}>
            <Link href="https://en.wikipedia.org/wiki/Venkateswara_Temple">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2018/06/Tirumala-Venkateswara-Temple.jpg"
                name="Tirumala Venkateswara"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Ramanathaswamy_Temple">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Ramanathaswamy-Temple.jpg"
                name="Ramanathaswamy"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Somnath_temple">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Somnath-and-Dwarka-Temple.jpg"
                name="Somnath and Dwarka"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Jagannath">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Jagannath-Temple.jpg"
                name="Jagannath"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Vaishno_Devi">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/vaishno-devi-temple.jpg"
                name="Vaishno Devi"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Meenakshi">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2018/06/meenakshi-temple-madurai.jpg"
                name="Meenakshi Amman"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Kedarnath_Temple">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Kedarnath-Temple.jpg"
                name="Kedarnath"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Gangotri">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Gangotri-Temple.jpg"
                name="Gangotri"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Badrinath">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/Badrinath-Temple.jpg"
                name="Badrinath"
              />{" "}
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Golden_Temple">
              <Card
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/06/golden-temple.jpg"
                name="Golden Temple"
              />{" "}
            </Link>
          </Carousel>
        </Box>
      </Box>
      <Box bg="#004f32">
        <Img src={winner} />
      </Box>
    </Box>
  );
};

export default Temple;
