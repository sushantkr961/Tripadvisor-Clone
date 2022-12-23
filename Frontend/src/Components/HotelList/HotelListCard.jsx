import { Box, Image, Text } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";
import { FcDepartment } from "react-icons/fc";
import { FiMapPin } from "react-icons/fi";

export const HotelListCard = ({ data }) => {
  // destucture the Data coming through parent
  const { images_large, city, id, country_slug, title, max_price_in_usd } =
    data;
  // making the city string into capital letter
  let city1 = city.toUpperCase();
  return (
    <>
      <Box display={"flex"} borderBottom="2px solid grey">
        <GridItem
          w={{ base: "100px", lg: "240px", xl: "240px" }}
          h={{ base: "100px", lg: "210px", xl: "210px" }}
          ml={"5px"}
          m={3}
        >
          <Image w="100%" h="100%" src={images_large[0]} />
        </GridItem>

        <GridItem
          w={{ base: "150px", sm: "400px", lg: "600px", xl: "600px" }}
          m={3}
          textAlign={"left"}
        >
          <Text
            lineHeight="24px"
            fontWeight={"semibold"}
            fontSize={{ base: "16px", sm: "24px", lg: "24px" }}
            as="b"
          >
            {city1}
          </Text>
          <Box mt={{ base: "1px", lg: "10px", xl: "10px" }}>
            <Box
              display={"flex"}
              fontSize={{ base: "16px", sm: "16px", lg: "18px" }}
            >
              {" "}
              <TiStarFullOutline size={"24px"} />
              <TiStarFullOutline size={"24px"} />
              <TiStarFullOutline size={"24px"} />
              <TiStarFullOutline size={"24px"} />
              <TiStarHalfOutline size={"24px"} /> {id},<Text>reviews</Text>
            </Box>
            <Text
              mt={"4px"}
              textAlign="left"
              fontWeight={400}
              lineHeight="16px"
              fontSize={"20px"}
              color="#333333"
              display={"flex"}
            >
              {" "}
              <FiMapPin />
              {city} {country_slug}
            </Text>
          </Box>
          <Box mt={{ base: "1px", lg: "10px", xl: "10px" }}>
            <Text>...Mentions in {country_slug}</Text>
            <Text
              fontWeight={400}
              lineHeight="16px"
              fontSize={{ base: "12px", sm: "14px", lg: "14px" }}
              color="#333333"
              display={"flex"}
            >
              <FcDepartment size={"24px"} />
              {title}
            </Text>
          </Box>
          <Box mt={{ base: "1px", lg: "10px", xl: "10px" }}>
            <Text
              fontWeight={400}
              lineHeight="16px"
              fontSize={{ base: "12px", sm: "14px", lg: "17px" }}
            >
              {" "}
              Price: $ {max_price_in_usd}{" "}
            </Text>
          </Box>
        </GridItem>
      </Box>
    </>
  );
};
