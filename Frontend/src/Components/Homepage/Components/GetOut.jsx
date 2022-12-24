import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import Card from "../../Homepage/Carousel/Card";
import Carousel from "@itseasy21/react-elastic-carousel";
import React from "react";

const GetOut = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Box w={{ base: "100%", md: "90%", lg: "71%" }} margin="auto" mt="30px">
      <Box
        bg="#faf1ed"
        display="flex"
        justifyContent="space-between"
        mt="50px"
        height={{ sm: "200px" }}
      >
        <Box width="65%" textAlign="left" p="20px">
          <Text fontSize="24px" fontWeight="bold">
            Get out there
          </Text>
          <Text mb="10px">
            Best of the best tours, attractions and activites you won't want to
            miss.
          </Text>
          <Link
            textDecoration="none"
            href="https://www.tripadvisor.in/Attractions-g293860-Activities-India.html"
          >
            <Button
              p="10px 15px"
              border="none"
              borderRadius="15px"
              cursor="pointer"
              bg="#000000"
              color="#FFFFFF"
              fontWeight="bold"
              _hover={{ bg: "#545454" }}
            >
              See the list
            </Button>
          </Link>
        </Box>

        <Box>
          <Image
            src="https://th.bing.com/th/id/OIP.sP9RtX_qphHskOup8F_gIAHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            w="400px"
            h="200px"
          />
        </Box>
      </Box>
      <Box w="89%" margin="auto" mt="50px">
        <Text textAlign="left" fontSize="24px" fontWeight="bold">
          Monuments in India
        </Text>
      </Box>
      <Box display="flex">
        <Carousel breakPoints={breakPoints}>
          <Link href="https://en.wikipedia.org/wiki/Taj_Mahal">
            <Card
              src="https://www.bing.com/th/id/OGC.de5cf6f9ea0a743acdd5dbabdd88a68b?pid=1.7&rurl=https%3a%2f%2fohfact.com%2fwp-content%2fuploads%2f2015%2f08%2fTaj-Mahal.gif&ehk=tA%2bIlUQggKPEmpaeu0ULuA7ssgsr28CpwzFiy4%2fPpZU%3d"
              name="The Taj Mahal"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/India_Gate">
            <Card
              src="https://th.bing.com/th/id/OIP.tTH3jF3k-JWfZdbe6cakdgHaFj?w=264&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="India Gate"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Hawa_Mahal">
            <Card
              src="https://static.toiimg.com/photo/60776678/.jpg"
              name="Hawa Mahal"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Gateway_of_India">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india2.png"
              name="Gateway of India"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Golden_Temple">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india4.png"
              name="Golden Temple"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Agra_Fort">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india8.png"
              name="Agra Fort"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india10.png"
              name="Victoria Memorial"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india11.png"
              name="Khajuraho Group of Monuments"
            />
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Lotus_Temple">
            <Card
              src="https://static.javatpoint.com/list/images/list-of-monuments-in-india14.png"
              name="Bahai Temple (Lotus Temple)"
            />
          </Link>
        </Carousel>
      </Box>
    </Box>
  );
};

export default GetOut;
