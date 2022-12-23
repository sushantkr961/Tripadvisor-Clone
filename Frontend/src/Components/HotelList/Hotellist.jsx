import data from "../../hotel.json";
import { Box, Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { HotelListCard } from "./HotelListCard";
import { useState, useEffect } from "react";
import { FcNumericalSorting21, FcNumericalSorting12 } from "react-icons/fc";

export const HotelList = () => {
  // destructuring The data
  const [list, setList] = useState([]);

  const { hotels } = data;

  useEffect(() => {
    setList(hotels);
  }, []);
  // console.log(results)

  //Sorting Functionality HighTolow
  const sortListHighTolow = () => {
    let sortedData = list.sort((a, b) => {
      if (a.max_price_in_usd < b.max_price_in_usd) {
        return 1;
      }
      if (a.max_price_in_usd > b.max_price_in_usd) {
        return -1;
      }
      return 0;
    });
    setList([...sortedData]);
  };
  //Sorting Functionality lowToHigh
  const sortListlowToHigh = () => {
    let sortedData = list.sort((a, b) => {
      if (a.max_price_in_usd < b.max_price_in_usd) {
        return -1;
      }
      if (a.max_price_in_usd > b.max_price_in_usd) {
        return 1;
      }
      return 0;
    });
    setList([...sortedData]);
  };

  if (list.length === 0) {
    return <>loading</>;
  }

  return (
    <>
      <Box color="Black">
        <Button m="2px" bg="white" onClick={sortListHighTolow}>
          High-To-low <FcNumericalSorting21 />
        </Button>
        <Button bg="white" onClick={sortListlowToHigh}>
          Low-To-High <FcNumericalSorting12 />
        </Button>
      </Box>
      <Box bg="#d7d7d7" w="100%" p={4} color="black" ml={"none"}>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap={{ base: "2", xs: "3", lg: "5px", xl: "6px" }}
          w={{ base: "100%", lg: "100%", xl: "70%" }}
          bg="white "
        >
          {/* map the hotelList card */}
          {list?.map((e) => {
            return (
              <>
                <HotelListCard data={e} />
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};