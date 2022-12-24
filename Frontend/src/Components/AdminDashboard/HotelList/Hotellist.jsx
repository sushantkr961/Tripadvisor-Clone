import data from "../../../hotel.json";
import { Box, Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { HotelListCard } from "./HotelListCard";
import { useState, useEffect } from "react";
import { FcNumericalSorting21, FcNumericalSorting12 } from "react-icons/fc";
// import { HotelList } from "./Hotellist";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singleHotel } from "../../../Redux/DataHotel/data.action";

const HotelList = () => {
  const dispatch = useDispatch();

  const { dataofList } = useSelector((store) => store.data);
  console.log(dataofList);
  // destructuring The data
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(dataofList);
  }, []);
  // console.log(results)

  //Sorting Functionality HighTolow
  const sortListHighTolow = () => {
    let sortedData = dataofList.sort((a, b) => {
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
    let sortedData = dataofList.sort((a, b) => {
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

  return (
    <>
      <Box textAlign={"center"} color="Black">
        <Button m="2px" bg="white" onClick={sortListHighTolow}>
          High-To-low <FcNumericalSorting21 />
        </Button>
        <Button bg="white" onClick={sortListlowToHigh}>
          Low-To-High <FcNumericalSorting12 />
        </Button>
      </Box>
      <Box bg="#d7d7d7" w="100%" p={8} color="black" ml={"none"}>
        <Grid
          borderRadius={"8px"}
          mb={2}
          templateColumns="repeat(1, 1fr)"
          gap={{ base: "2", xs: "3", lg: "5px", xl: "6px" }}
          w={{ base: "100%", lg: "100%", xl: "70%" }}
          bg="white "
        >
          {/* map the hotelList card */}
          {dataofList?.map((e) => {
            return (
              <>
                <Link
                  onClick={() => dispatch(singleHotel(e._id))}
                  to={"/hotels/" + e._id}
                >
                  <HotelListCard data={e} />
                </Link>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HotelList;
