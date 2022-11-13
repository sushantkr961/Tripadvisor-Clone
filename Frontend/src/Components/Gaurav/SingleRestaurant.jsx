import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  Stack,
  UnorderedList,
  Image,
  Heading,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { IconName, MdPool, AiOutlineWifi } from "react-icons/ai";
import CaptionCarousel from "./Crousel";
import { BiBeer, BiBed, BiCameraMovie, BiDrink } from "react-icons/bi";
import Carousel from "./Crousel";
import { Link } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "af3366808dmshd45570fd8fdedb7p1db0fcjsn98d47937d773",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
};

const optionsI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
};

export const SingleRestaurant = () => {
  const [obj, setObj] = useState({});
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const getdata = () => {
    fetch(
      "https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details?adults_number=1&checkin_date=2022-11-26&locale=en_US&currency=USD&hotel_id=363464&checkout_date=2022-11-27&children_ages=4%2C0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setObj(response);
      })
      .catch((err) => console.error(err));
  };

  const getImage = () => {
    setLoading(true);
    fetch(
      "https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464",
      optionsI
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setImg(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getdata();
    getImage();
  }, []);

  if (loading) {
    return (
      <>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          "2xl": 2,
        }}
        spacing={5}
        width="80%"
        m="auto"
      >
        <Box
          fontFamily={"italic"}
          height="480px"
          fontSize={"2xl"}
          textAlign="left"
          pt="10"
          pl="5"
          boxShadow="2xl"
        >
          <Text>{obj.name}</Text>
          <Text>Star rating {obj.starRating}</Text>
          <Box mt="105">
            <Text>Popular Aminities</Text>
            <UnorderedList listStyleType={"none"}>
              <WrapItem>
                {" "}
                <BiDrink /> <ListItem> Food-Drinks</ListItem>{" "}
              </WrapItem>
              <WrapItem>
                {" "}
                <BiBeer /> <ListItem>Working away</ListItem>{" "}
              </WrapItem>
              <WrapItem>
                {" "}
                <BiBed /> <ListItem>Home Comfort</ListItem>{" "}
              </WrapItem>
              <WrapItem>
                {" "}
                <BiCameraMovie /> <ListItem>Be Entrtained</ListItem>{" "}
              </WrapItem>
              <WrapItem>
                {" "}
                <AiOutlineWifi /> <ListItem>Free Wifi</ListItem>{" "}
              </WrapItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box height="480px" boxSize={"-moz-fit-content"} boxShadow="2xl">
          <Box>
            <Image
              w="100%"
              src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker-orb.png%7C28.554933,77.121491&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=yzTjLBn7pAGGgzx7YNDyP7qIDQU="
            ></Image>
          </Box>
          <Box w="90%" m="auto" textAlign={"left"}>
            <UnorderedList mt="10" listStyleType={"none"}>
              {obj?.roomTypeNames?.map((e) => {
                return <ListItem>{e}</ListItem>;
              })}
            </UnorderedList>
          </Box>
        </Box>
        <Link to="">
          <Button colorScheme="pink">Book Now</Button>
        </Link>
      </SimpleGrid>

      <Heading mt="10"> Take a Tour</Heading>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          "2xl": 2,
        }}
        spacing={10}
        w="80%"
        m="auto"
        overflow={"scroll"}
        h="500px"
        mt="20"
        mb="10"
      >
        {img?.map((e) => {
          return (
            <>
              {" "}
              <Box
                height="250px"
                w="100%"
                boxShadow="2xl"
                borderTopRadius="30"
                borderBottomRadius="30"
              >
                <Image
                  borderTopRadius="30"
                  borderBottomRadius="30"
                  w="100%"
                  h="100%"
                  src={e.mainUrl}
                ></Image>
              </Box>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};
