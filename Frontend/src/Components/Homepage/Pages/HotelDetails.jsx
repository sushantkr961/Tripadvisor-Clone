import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  chakra,
  Image,
} from "@chakra-ui/react";
import {
  MdLocationPin,
  MdRateReview,
  MdFreeBreakfast,
  MdLocalAirport,
  MdWifi,
  MdBusinessCenter,
  MdHouse,
  MdFireplace,
  MdRoomService,
  MdSmokeFree,
  MdAirlineSeatIndividualSuite,
} from "react-icons/md";
import { FaParking, FaBabyCarriage, FaSnowflake } from "react-icons/fa";
import { GiVideoConference, GiWaterBottle } from "react-icons/gi";
import { SiSpringsecurity } from "react-icons/si";
import { BsSafeFill, BsFillDisplayFill } from "react-icons/bs";
import { RiVipFill } from "react-icons/ri";
import { useEffect } from "react";
import Reviews from "../Components/Reviews";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const { singleData, isLoading, isError } = useSelector((store) => store.data);
  console.log("data=", singleData);
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = singleData.lat;
    const lng = singleData.lng;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
  });

  return (
    <Box
      textTransform={"capitalize"}
      w={{ base: "100%", lg: "65%" }}
      h={{ base: "" }}
      margin={"auto"}
    >
      <Box px={5} py={5} w={{ base: "100%", md: "69%" }} textAlign={"left"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={30}
          textAlign={"left"}
          color={"black"}
          textTransform={"capitalize"}
        >
          {singleData?.title}
        </chakra.h3>
        <Flex>
          <MdRateReview fontSize={20} />
          <chakra.h5
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={15}
            ml={2}
            textAlign={"left"}
            color={"black"}
          >
            {singleData.score} reviews
          </chakra.h5>
        </Flex>
        <Flex>
          <MdLocationPin fontSize={20} />
          <chakra.h5
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={15}
            textAlign={"left"}
            color={"black"}
          >
            {singleData?.city}, {singleData?.state_slug},{singleData?.state},
            {singleData?.country}
          </chakra.h5>
        </Flex>
      </Box>
      <Flex flexDir={{ base: "column", md: "row", lg: "row" }}>
        <Box w={{ base: "100%", md: "70%" }} mr={"10px"}>
          <Carousel>
            {singleData.images_large?.map((el, i) => {
              return (
                <Box border={"2px"} h={"600px"}>
                  <img
                    src={el}
                    alt="images"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              );
            })}
          </Carousel>
        </Box>
        <Box
          ml={{ md: "10px" }}
          w={{ base: "100%", md: "30%" }}
          py={"50px"}
          px={"10px"}
        >
          <Box mb={"100px"} border={"1px"}>
            <Text textAlign={"right"}>Ad</Text>
            <Image src="https://www.bing.com/th/id/OGC.069d617dca720be2d65014963515d28e?pid=1.7&rurl=https%3a%2f%2fwww.paredro.com%2fwp-content%2fuploads%2f2015%2f05%2fsta2.gif&ehk=L0lKyyBMVuFO9E%2bPCd7N%2bd%2b5fRynrsVbQKjN8%2fNlpog%3d" />
          </Box>
          <Box
            px={"5px"}
            mb={"25px"}
            boxShadow={"lg"}
            borderRadius={5}
            p={2}
            borderLeft={"2px"}
            borderLeftColor={"teal"}
          >
            <chakra.h4
              fontFamily={"Work Sans"}
              fontWeight={"bold"}
              fontSize={20}
              textAlign={"left"}
              color={"black"}
              m={2}
            >
              Check in Date
            </chakra.h4>
            <Input
              placeholder="Check in Date"
              size="md"
              type="date"
              border={"none"}
              color="teal"
              _placeholder={{ color: "inherit" }}
              fontWeight={"semibold"}
            />
          </Box>
          <Box
            mb={"25px"}
            boxShadow={"lg"}
            borderRadius={5}
            p={2}
            borderLeft={"2px"}
            borderLeftColor={"tomato"}
          >
            <chakra.h4
              fontFamily={"Work Sans"}
              fontWeight={"bold"}
              fontSize={20}
              textAlign={"left"}
              color={"black"}
              m={2}
            >
              Check out Date
            </chakra.h4>
            <Input
              placeholder="CheckOut Date"
              size="md"
              type="date"
              border={"none"}
              color="tomato"
              _placeholder={{ color: "inherit" }}
              fontWeight={"semibold"}
            />
          </Box>
          <Link to={"/userdetails"}>
            <Button
              bgColor={"teal"}
              color={"white"}
              _hover={{ color: "teal", bgColor: "white", border: "2px" }}
            >
              Book Now
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={30}
          textAlign={"left"}
          color={"black"}
          m={2}
        >
          About
        </chakra.h3>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "55%" }}>
            <Box m={5}>
              <Text fontSize={"xl"}>
                {singleData.city_slug} Hotel truly yours, stands out from the
                others by offering a product tailor-made towards our customer's
                wellbeing. We provide a seamless experience of comfort for the
                21st century traveller, who is looking for the ease of home with
                the sophistication of an evolved, contemporary hospitality
                product.
              </Text>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "45%" }}>
            <Box>
              <Text fontSize={"large"} fontWeight={"semibold"}>
                Property amenities
              </Text>
              <Flex>
                <Box w={"50%"}>
                  <Flex mt={1}>
                    <FaParking fontSize={20} /> Free Parking
                  </Flex>
                  <Flex mt={1}>
                    <MdFreeBreakfast fontSize={20} /> Free breakfast
                  </Flex>
                  <Flex mt={1}>
                    <MdLocalAirport fontSize={20} /> Airport transportation
                  </Flex>
                  <Flex mt={1}>
                    <GiVideoConference fontSize={20} /> Conference facilities
                  </Flex>
                </Box>
                <Box>
                  <Flex mt={1}>
                    <MdWifi fontSize={20} /> Free High Speed WiFi
                  </Flex>
                  <Flex mt={1}>
                    <FaBabyCarriage fontSize={20} /> Babysitting
                  </Flex>
                  <Flex mt={1}>
                    <MdBusinessCenter fontSize={20} /> Bussiness Centre
                  </Flex>
                  <Flex mt={1}>
                    <SiSpringsecurity fontSize={20} /> 24-hour security
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box mt={2}>
              <Text fontSize={"large"} fontWeight={"semibold"}>
                Room Features
              </Text>
              <Flex>
                <Box w={"50%"}>
                  <Flex mt={1}>
                    <FaSnowflake fontSize={20} /> Air conditioning
                  </Flex>
                  <Flex mt={1}>
                    <MdHouse fontSize={20} /> Housekeeping
                  </Flex>
                  <Flex mt={1}>
                    <BsSafeFill fontSize={20} /> Safe
                  </Flex>
                  <Flex mt={1}>
                    <GiWaterBottle fontSize={20} /> Bottled water
                  </Flex>
                </Box>
                <Box>
                  <Flex mt={1}>
                    <MdFireplace fontSize={20} /> Fireplace
                  </Flex>
                  <Flex mt={1}>
                    <MdRoomService fontSize={20} /> Room service
                  </Flex>
                  <Flex mt={1}>
                    <RiVipFill fontSize={20} /> VIP room facilities
                  </Flex>
                  <Flex mt={1}>
                    <BsFillDisplayFill fontSize={20} /> Flatscreen TV
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box mt={2}>
              <Text fontSize={"large"} fontWeight={"semibold"}>
                Room types
              </Text>
              <Flex>
                <Box w={"50%"}>
                  <Flex mt={1}>
                    <MdSmokeFree fontSize={20} /> Non-smoking rooms
                  </Flex>
                </Box>
                <Box>
                  <Flex mt={1}>
                    <MdAirlineSeatIndividualSuite fontSize={20} /> Suites
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box>
          <chakra.h3
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={30}
            textAlign={"left"}
            color={"black"}
          >
            Location
          </chakra.h3>
          <Flex flexDir={{ base: "column", md: "row" }}>
            <Box w={{ base: "93%", md: "60%" }} m={3} h={"300px"}>
              <iframe
                id="iframeId"
                width={"99%"}
                height={"99%"}
                title="location"
              ></iframe>
            </Box>
            <Box m={3} border={"1px"}>
              <Text textAlign={"right"}>Ad</Text>
              <Image src="https://www.bing.com/th/id/OGC.08ad5208469647966c2afb98878457f7?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f08ad5208469647966c2afb98878457f7%2ftenor.gif%3fitemid%3d17419353&ehk=TMZV66pxKpOI0r9%2bVrufLZobDE58MIN0S00sd5NaW4w%3d" />
            </Box>
          </Flex>
        </Box>

        <Box mb={20}>
          <Reviews />
        </Box>
      </Box>
    </Box>
  );
};

export default HotelDetails;
