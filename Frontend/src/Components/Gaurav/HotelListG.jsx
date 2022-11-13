import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HotelListG = () => {
  const { dataofList, isLoading, isError } = useSelector((store) => store.data);

  console.log(dataofList);
  if (dataofList === []) {
    return <h1>Sorry Something went Wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error...</h1>;
  } else
    return (
      <>
        <div>
          <SimpleGrid columns={1} spacing={10}>
            {dataofList?.map((e) => {
              return (
                <Box
                  key={e.latitude}
                  h="240px"
                  boxShadow="dark-lg"
                  p="6"
                  w="75%"
                  m="auto"
                  rounded="md"
                  bg="white"
                  overflow="hidden"
                  display={"flex"}
                >
                  {/* {console.log(e.photo?.images.medium.url)} */}
                  <Box mr={10} boxShadow="dark-lg" borderRightRadius="00 ">
                    <Image
                      w="100%"
                      h="100%"
                      src={e.photo?.images.medium.url}
                      alt=""
                    />
                  </Box>

                  <Container
                    fontStyle={"italic"}
                    borderRightRadius="1200"
                    boxShadow="dark-lg"
                    color={"black"}
                    fontSize={{
                      xs: "10px",
                      sm: "10px",
                      md: "15px",
                      lg: "lg",
                      xl: "lg",
                      "2xl": "lg",
                    }}
                    p="5"
                  >
                    <Text
                      color={"pink.800"}
                      fontSize={{
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "lg",
                        xl: "2xl ",
                        "2xl": "2xl ",
                      }}
                    >
                      {e.name}
                    </Text>
                    <Text textAlign={"left"}>
                      Country : {e.location_string}
                    </Text>
                    <Text>{e.location_string}</Text>
                    <Text textAlign={"left"}>Ranking : {e.ranking}</Text>
                    <Text textAlign={"left"}>Rating : {e.starRating}</Text>
                    <Flex justifyContent={"space-between"}>
                      <Text>Price : $ {e.price}</Text>
                      <Link to={"/hotelPage"}>
                        <Button colorScheme={"pink"} mr={10}>
                          Reserve
                        </Button>
                      </Link>
                    </Flex>
                  </Container>
                </Box>
              );
            })}
          </SimpleGrid>
        </div>
      </>
    );
};
