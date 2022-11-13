import {
  Box,
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
  console.log(hotelList);
  const [query, setQuery] = React.useState("");

  // const data = debData
  // console.log(data)
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
  console.log(debData);
  return (
    <>
      <Box
        w="62%"
        margin="auto"
        mt="30px"
        h="340px"
        bgImage={img}
        bgRepeat="no-repeat"
        mb="50px"
        display="flex"
        align="center"
      >
        <Stack w="60%" m="auto">
          <InputGroup>
            <InputLeftElement
              children={<Search2Icon fontSize="x-large" />}
              p="10px"
            />
            <Input
              type="search"
              onChange={handleChange}
              placeholder="Where to?"
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
                <Link to={"/hotelLists"}>
                  <Box
                    onClick={() =>
                      dispatch(hotelList(item.result_object.location_id))
                    }
                    key={item.result_object.longitude}
                  >
                    <Text>{item.result_object.name}</Text>
                  </Box>
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
