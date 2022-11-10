import { Box, ListItem, SimpleGrid,Text,Stack  , UnorderedList,Image, Heading} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import CaptionCarousel from "./Crousel";
import Carousel from "./Crousel";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af4758d1c5msh4645d20fb50f9a0p1954bbjsn84321fedaf30',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

const optionsI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};




export  const SingleRestaurant =()=>{
const [obj,setObj]=useState({})
const [img,setImg]=useState([])
const [loading,setLoading]=useState(false)
const getdata=()=>{
    fetch('https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details?adults_number=1&checkin_date=2022-11-26&locale=en_US&currency=USD&hotel_id=363464&checkout_date=2022-11-27&children_ages=4%2C0', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    setObj(response)})
	.catch(err => console.error(err));
}

const getImage=()=>{
    setLoading(true)
    fetch('https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464', optionsI)
	.then(response => response.json())
	.then(response =>{ console.log(response)
    setImg(response)
    setLoading(false)
    })
	.catch(err => console.error(err));
}

useEffect(()=>{
    // getdata();
    // getImage()
},[])

if(loading){
    return <><Stack >
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
    </>

}

return <>
     <SimpleGrid  columns={ {
  sm: 1,
  md: 1,
  lg: 2,
  xl: 2,
  '2xl': 2,
}} spacing={5} width="80%" m="auto">
     <Box  bg='tomato' height='480px'  fontSize={"2xl"} textAlign="left" pt="10" pl="5"   boxShadow='2xl'>
        <Text>HOtel name is EHere</Text>
        <Text>Rating i Here</Text>
        <Box mt="10" >
            <Text>Popular Aminities</Text>
            <UnorderedList >
           <ListItem >Lorem ipsum dolor sit amet</ListItem>
           <ListItem>Consectetur adipiscing elit</ListItem>
           <ListItem>Integer molestie lorem at massa</ListItem>
           <ListItem>Facilisis in pretium nisl aliquet</ListItem>
           </UnorderedList>
        </Box>
     </Box>
     <Box bg='tomato' height='480px' boxSize={"-moz-fit-content"}  boxShadow='2xl'>
        <Box>
        <Image  w="100%" src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker-orb.png%7C28.554933,77.121491&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=yzTjLBn7pAGGgzx7YNDyP7qIDQU="></Image>
        </Box>
        <Box w="90%" m="auto" textAlign={"left"} >
        <UnorderedList >
           <ListItem >Lorem ipsum dolor sit amet</ListItem>
           <ListItem>Consectetur adipiscing elit</ListItem>
           <ListItem>Integer molestie lorem at massa</ListItem>
           
           </UnorderedList>
        </Box>
     </Box>


</SimpleGrid>
<Heading mt="10"> Take a Tour</Heading>
<SimpleGrid columns={{
  sm: 1,
  md: 2,
  lg: 2,
  xl: 2,
  '2xl': 2,
}} spacing={10} w="80%" m="auto" overflow={"scroll"} h="500px" mt="20" mb="10">
    {img?.map((e)=>{
        return <> <Box   height='250px' w="100%"  boxShadow='2xl' borderTopRadius="30"  borderBottomRadius="30"   >
        <Image  borderTopRadius="30"  borderBottomRadius="30"  w="100%" h="100%" src={e.mainUrl}></Image>
      </Box>
        </>
    })}
</SimpleGrid>
</>
}