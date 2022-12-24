import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";
import { FcDepartment } from "react-icons/fc";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function AdminAddHotel() {
  let obj = {
    title: "",
    images_large: [],
    max_price_in_usd: "",
    country: "",
    city: "",
  };
  const [data, setData] = useState(obj);
  const [status, setStatus] = useState(false);
  console.log(data);

  const OnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const OnChange11 = (e) => {
    const { value } = e.target;
    setData({ ...data, images_large: [...data.images_large, value] });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("https://travelgo-backend.vercel.app/hotel/postHotel", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setStatus(true);
        }
        setTimeout(() => {
          setStatus(false);
        }, 6000);
        // return res.json()
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {!status ? null : (
        <Alert status="success">
          <AlertIcon />
          Successfully posted the postel
        </Alert>
      )}
      <Stack
        textTransform={"capitalize"}
        color={"white"}
        backgroundImage="url('https://wallpaperaccess.com/full/16677.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minH={"120vh"}
        w={"100%"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          border={"1px"}
          w={{ md: "30%", base: "100%" }}
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          bgColor="blackAlpha.400"
        >
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <FormControl id="email">
              <FormLabel>name</FormLabel>
              <Input
                color={"black"}
                bg="white"
                type="text"
                name="title"
                onChange={(e) => OnChange(e)}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>country</FormLabel>
              <Input
                color={"black"}
                bg="white"
                type="text"
                name="country"
                onChange={(e) => OnChange(e)}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>image</FormLabel>
              <Input
                bg="white"
                color={"black"}
                type="text"
                name="images_large"
                onChange={(e) => OnChange11(e)}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>image</FormLabel>
              <Input
                bg="white"
                color={"black"}
                type="text"
                name="images_large"
                onChange={(e) => OnChange11(e)}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>price</FormLabel>
              <Input
                bg="white"
                color={"black"}
                type="number"
                name="max_price_in_usd"
                onChange={(e) => OnChange(e)}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>City</FormLabel>
              <Input
                bg="white"
                type="text"
                name="city"
                color={"black"}
                onChange={(e) => OnChange(e)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                type="submit"
                colorScheme={"blue"}
                variant={"solid"}
                onClick={(e) => formSubmit(e)}
              >
                submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          pt={10}
          pb={24}
          w={{ md: "70%", base: "100%" }}
          flex={1}
          mb={{ base: "0px", sm: "0px", lg: "40px" }}
        >
          <Box
            display={"flex"}
            borderBottom="2px solid grey"
            w={{ base: "100%" }}
          >
            <GridItem
              w={{ base: "100px", lg: "240px", xl: "240px" }}
              h={{ base: "100px", lg: "210px", xl: "210px" }}
              ml={"5px"}
              m={3}
            >
              <Image
                w="100%"
                h="100%"
                src={data?.images_large[0]}
                fallbackSrc={
                  "data:image/jpeg;base64,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"
                }
                alt="PROVIDE PREVIEW IMAGE"
              />
            </GridItem>

            <GridItem
              w={{ base: "250px", sm: "400px", lg: "600px", xl: "600px" }}
              m={3}
              textAlign={"left"}
              color="white"
              as="b"
            >
              <Box bg="white" color="black">
                <Text
                  lineHeight="24px"
                  fontWeight={"semibold"}
                  fontSize={{ base: "16px", sm: "24px", lg: "24px" }}
                  as="b"
                >
                  Name :{data?.title}
                </Text>
              </Box>
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
                  <TiStarHalfOutline size={"24px"} /> <Text>reviews</Text>
                </Box>
                <Box bg="white" color="black">
                  <Text
                    mt={"4px"}
                    textAlign="left"
                    fontWeight={400}
                    lineHeight=""
                    fontSize={"20px"}
                    color="#333333"
                    display={"flex"}
                  >
                    {" "}
                    <FiMapPin />
                    City:{data.city}
                  </Text>
                </Box>
              </Box>
              <Box
                mt={{ base: "1px", lg: "10px", xl: "10px" }}
                bg="white"
                color="black"
              >
                <Text>...Mentions in {data.city} </Text>
                <Text
                  fontWeight={400}
                  lineHeight="16px"
                  fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                  display={"flex"}
                >
                  <FcDepartment size={"24px"} />
                  The best hotel in the {data?.country}
                </Text>
              </Box>
              <Box
                mt={{ base: "1px", lg: "10px", xl: "10px" }}
                bg="white"
                color="black"
              >
                <Text
                  fontWeight={400}
                  lineHeight=""
                  fontSize={{ base: "12px", sm: "14px", lg: "24px" }}
                >
                  Price: {data?.max_price_in_usd}{" "}
                </Text>
              </Box>
            </GridItem>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
