import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./component.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import getData, {
  emptyData,
  hotelList,
} from "../../../Redux/DataHotel/data.action";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const img =
  "https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp";

const Searchbar = () => {
  const { isLoading, isError, debData } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState("");

  const handleChange = (e) => {
    let timer = setTimeout(() => {
      setQuery(e.target.value);
    }, 3000);
    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    if (query === "") {
      dispatch(emptyData());
    } else {
      dispatch(getData(query));
    }
  }, [query]);
  return (
    <>
      <Box
        pos={"relative"}
        w={{ base: "100%", md: "75%", lg: "62%" }}
        margin="auto"
        mt="30px"
        h={{ base: "200px", md: "340px" }}
        bgImg={img}
        bgRepeat="no-repeat"
        backgroundSize="cover"
        mb="50px"
        display="flex"
        align="center"
      >
        <Stack
          pos={"absolute"}
          top={{ base: "15%", md: "35%" }}
          left={"20%"}
          w="60%"
          m="auto"
        >
          <InputGroup>
            <InputLeftElement
              children={<Search2Icon fontSize="x-large" />}
              p="10px"
            />
            <Input
              type="search"
              onChange={handleChange}
              placeholder="Where to? Search Goa"
              outline="none"
              w="100%"
              padding="15px 50px"
              fontSize="large"
              bg="white"
              borderRadius="25px"
              border="none"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            />
          </InputGroup>
          <Box
            borderRadius={10}
            color={"black"}
            zIndex={100}
            className="suggestionBox"
          >
            {debData?.map((item) => {
              return (
                <Link
                  onClick={() => dispatch(hotelList(item.city))}
                  key={item._id}
                  to={"/hotels"}
                >
                  <Flex
                    justifyContent={"space-between"}
                    textTransform={"capitalize"}
                    textAlign={"left"}
                    p={2}
                  >
                    <Text fontWeight={"bold"}>
                      {item?.city +
                        ", " +
                        item?.state +
                        ", " +
                        item?.property_type}
                    </Text>
                    <Text>{}</Text>
                  </Flex>
                </Link>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Searchbar;
