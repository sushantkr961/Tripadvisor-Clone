import React,{useEffect, useState} from "react";
import {
    Badge,
    Box,StackDivider,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VStack,
    Container,
    Textarea,
  } from '@chakra-ui/react';
import Card from "./Card";

 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af3366808dmshd45570fd8fdedb7p1db0fcjsn98d47937d773',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

const onAdd=(e)=>{
console.log(e)
localStorage.setItem("book",JSON.stringify(e))
}


export const HotelListG=()=>{
//  const [obj,setObj]=useState({})   
const [state,setState]=useState([ ])

const getdata=()=>{
    fetch('https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?latitude=51.509865&currency=USD&longitude=-0.118092&checkout_date=2022-11-27&sort_order=STAR_RATING_HIGHEST_FIRST&checkin_date=2022-11-26&adults_number=1&locale=en_US&guest_rating_min=4&star_rating_ids=3%2C4%2C5&children_ages=4%2C0%2C15&page_number=1&price_min=10&accommodation_ids=20%2C8%2C15%2C5%2C1&theme_ids=14%2C27%2C25&price_max=500&amenity_ids=527%2C2063', options)
	.then(response => response.json())
	.then(response =>{ console.log(response)
     setState(response.searchResults.results
        );
    })
	.catch(err => console.error(err)); 
}

useEffect(()=>{
    //  getdata()
     
},[])
console.log(state)

    return <>
    <div>
    
 
 
    <SimpleGrid columns={1} spacing={10}   >
 
        {state?.map((e)=>{

            return   <Box      h='240px' boxShadow='dark-lg' p='6' w="75%" m="auto" rounded='md' bg='white' overflow="hidden" display={"flex"} >
            <Box mr={10}  boxShadow='dark-lg'  borderRightRadius="00 ">
                <Image  w="100%" h="100%" src={e.optimizedThumbUrls.srpDesktop} alt=""  />
            </Box> 
   
            <Container fontStyle={"italic"} borderRightRadius="1200" boxShadow='dark-lg' color={"black"} fontSize={{
  xs:"10px" ,
  sm: '10px',
  md: '15px',
  lg: 'lg',
  xl: 'lg',
  '2xl': 'lg',
}}    p="5">
              <Text color={"pink.800"}  fontSize={{
  xs:"10px" ,
  sm: '10px',
  md: '15px',
  lg: 'lg',
  xl: '2xl ',
  '2xl': '2xl ',
}}>{e.name}</Text>
              <Text textAlign={"left"} >Country : {e.address?.countryName}</Text><Text>{e.address?.locality?.countryName}</Text>
              <Text textAlign={"left"}>StreetAddress : {e.address?.streetAddress}</Text>
              <Text textAlign={"left"}>Rating : {e.starRating}</Text>
              <Text>Price : $ {e.ratePlan?.price?.exactCurrent}</Text>
            <Button color={"black"} onClick={()=>onAdd(e)} bg="pink">Reserve</Button>
            </Container>
          </Box>

        })}
       </SimpleGrid>
   
    </div>
    </>
}

