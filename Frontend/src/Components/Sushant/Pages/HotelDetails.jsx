import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from "../../../hotel.json";
import { Box, Button, Flex, Input, Text, chakra } from "@chakra-ui/react";
import { VscLocation } from "react-icons/vsc";
import { TbParking } from "react-icons/tb";
import { useEffect } from "react";
import Reviews from "../Components/Reviews";

const HotelDetails = () => {
  //   console.log(data.hotels[0].lng);
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = data.hotels[0].lat;
    const lng = data.hotels[0].lng;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
  });

  return (
    <Box
      w={{ base: "100%", md: "90%", lg: "68%" }}
      h={{ base: "" }}
      border={"1px"}
      margin={"auto"}
    >
      <Box border={"1px"}>
        <Text>{data.hotels[0].city_slug}</Text>
        <Text>{data.hotels[0].score}</Text>
        <Flex>
          <VscLocation />{" "}
          <Text>
            {" "}
            {data.hotels[0].city} {data.hotels[0].state},
            {data.hotels[0].country}
          </Text>
        </Flex>
      </Box>
      <Flex flexDir={{ base: "column", md: "row", lg: "row" }}>
        <Box w={"70%"} border={"1px"} mr={"10px"}>
          <Carousel>
            <div>
              <img src={data.hotels[0].images_large[1]} alt="images" />
            </div>
            <div>
              <img src={data.hotels[0].images_large[2]} alt="images" />
            </div>
            <div>
              <img src={data.hotels[0].images_large[3]} alt="images" />
            </div>
            <div>
              <img src={data.hotels[0].images_large[4]} alt="images" />
            </div>
          </Carousel>
        </Box>
        <Box ml={"10px"} w={"30%"} py={"50px"} px={"10px"}>
          <Box border={"1px"} px={"5px"} mb={"25px"}>
            CheckIn Date
            <Input
              placeholder="CheckIn Date"
              size="md"
              type="date"
              border={"none"}
            />
          </Box>
          <Box border={"1px"} mb={"25px"}>
            CheckOut Date
            <Input
              placeholder="CheckOut Date"
              size="md"
              type="date"
              border={"none"}
            />
          </Box>
          <Button>Book Now</Button>
        </Box>
      </Flex>
      <Box border={"1px"}>
        <Text>About</Text>
        <Flex>
          <Box border={"1px"} w={"55%"}>
            <Box>
              <Text>{data.hotels[0].score}</Text>
            </Box>
            <Box>
              <Text>
                {data.hotels[0].city_slug} Hotel truly yours, stands out from
                the others by offering a product tailor-made towards our
                customer's wellbeing. We provide a seamless experience of
                comfort for the 21st century traveller, who is looking for the
                ease of home with the sophistication of an evolved, contemporary
                hospitality product.
              </Text>
            </Box>
          </Box>
          <Box border={"1px"} w={"45%"}>
            <Box>
              <Text>Property amenities</Text>
              <Flex>
                <Box border={"1px"} w={"50%"}>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text>Room Features</Text>
              <Flex>
                <Box border={"1px"} w={"50%"}>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text>Room types</Text>
              <Flex>
                <Box border={"1px"} w={"50%"}>
                  <Flex>
                    <TbParking /> Free Parking
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <TbParking /> Free Parking
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
          <div>
            <iframe
              id="iframeId"
              width={"65%"}
              height={"250px"}
              title="location"
            ></iframe>
          </div>
        </Box>
        <Box>
          <Reviews />
        </Box>
      </Box>
    </Box>
  );
};

export default HotelDetails;
