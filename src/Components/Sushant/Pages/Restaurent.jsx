import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

const Restaurent = () => {
    const [data, setData] = useState([]);

    const getRestaurnet =() => { fetch(
        "https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US",
        options2
      )
        .then((response) => response.json())
        .then((response) => {
            console.log('result:',response.data);
            setData(response.data);
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getRestaurnet();
    }, [])

  return (
    <Box>
        <Box>
            {data?.map((e) => {
                return (
                    <Box></Box>
                )
            })}
        </Box>
    </Box>
  )
}

export default Restaurent