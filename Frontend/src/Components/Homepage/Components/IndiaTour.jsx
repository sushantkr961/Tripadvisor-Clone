import { Box, Text } from "@chakra-ui/react";
import Carousel from "@itseasy21/react-elastic-carousel";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Homepage/Carousel/Card";

const IndiaTour = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Box w={{ base: "100%", md: "90%", lg: "71%" }} margin="auto" mt="30px">
      <Box w="89%" margin="auto" mb="10px">
        <Text textAlign="left" fontSize="24px" fontWeight="bold">
          Ways to tour India
        </Text>
      </Box>
      <Box display="flex">
        <Carousel breakPoints={breakPoints}>
          <Link to={"/bihartourism"}>
            <Card
              src="https://www.logolynx.com/images/logolynx/c5/c508832e9a1fd735dc92e2283f2cecac.jpeg"
              name="Bihar"
            />
          </Link>
          <Link to={"/maharastratourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.Pu4TqFupXsp3gkeVhf_d-AHaD_?w=326&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Maharastra"
            />
          </Link>
          <Link to={"/rajasthantourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.ORVdhng2XKPWo_pOTbX98QHaD_?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Rajasthan"
            />
          </Link>
          <Link to={"/madhyapradeshtourism"}>
            <Card
              src="https://www.mptourism.com/images/logo.png"
              name="Madhya Pradesh"
            />
          </Link>
          <Link to={"/kerelatourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.7Ja_Nnw___GR1LKRw80fnwFUC3?w=331&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Kerala"
            />
          </Link>
          <Link to={"/assamtourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.2_lSktvcojtcavUdnYbrJAHaD_?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Assam"
            />
          </Link>
          <Link to={"/uttrakhandtourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.6S6W7SJBuxLqsrio9OHliwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Uttrakhand"
            />
          </Link>
          <Link to={"/jammutourism"}>
            <Card
              src="https://i.pinimg.com/736x/dc/fa/c1/dcfac102e24c433cc120dbf062568380.jpg"
              name="Jammu Kashmir"
            />
          </Link>
          <Link to={"/uttarpradeshtourism"}>
            <Card
              src="https://th.bing.com/th/id/OIP.0keeTk6pZmb4v5z5jHZ9NQHaEJ?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              name="Uttar Pradesh"
            />
          </Link>
        </Carousel>
      </Box>
    </Box>
  );
};

export default IndiaTour;
