import {     
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { Box,   Text } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";
import { FcDepartment } from "react-icons/fc";
import { FiMapPin } from "react-icons/fi";
import { useState } from 'react';
 
 
  export default function AdminAddHotel() {
 
    let obj={
       title:"",
       images_large:[],
       max_price_in_usd:"",
       country:"",
       city:""
      }
      const [data,setData] = useState(obj);
     
      console.log(data)

      const OnChange=(e)=>{
      const {value,name}=e.target;
       setData({...data,[name]:value});
      };

      const OnChange11=(e)=>{
          const {value }=e.target;
         setData({...data,images_large:[...data.images_large,value]});
        }
  
      
      const formSubmit=(e)=>{
        e.preventDefault();
    
        fetch("http://localhost:8080/hotel/postHotel",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    
       }).then((res)=>{
        console.log(res)
        // return res.json()
       }).then((res)=>{
        console.log(res)
       })
      }

   

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'} bgColor="blackAlpha.400">
        
          <Stack spacing={4} w={'full'} maxW={'md'} >
  
         
            <FormControl id="email">
              <FormLabel>name</FormLabel>
              <Input bg="white" type="text" name='title' onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <FormControl id="">
              <FormLabel>country</FormLabel>
              <Input bg="white" type="text" name='country'  onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <FormControl id="">
              <FormLabel>image</FormLabel>
              <Input bg="white" type="text" name='images_large'  onChange={(e)=>OnChange11(e)}/>
            </FormControl>
            <FormControl id="">
              <FormLabel>image</FormLabel>
              <Input bg="white" type="text" name='images_large'  onChange={(e)=>OnChange11(e)}/>
            </FormControl>
            <FormControl id="">
              <FormLabel>price</FormLabel>
              <Input bg="white" type="number" name='max_price_in_usd'  onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <FormControl id="">
              <FormLabel>City</FormLabel>
              <Input bg="white" type="text" name='city'  onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}> 
              </Stack>
              <Button  type='submit' colorScheme={'blue'} variant={'solid'} onClick={(e)=>formSubmit(e)}>
                    submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}  bgColor="blackAlpha.400" mb={{base:'0px',sm:'0px',lg:'40px'}}  >
        <Box display={"flex"} borderBottom="2px solid grey"  bgColor="white" bgImage="url('https://www.turismmarket.com/wp-content/uploads/2012/06/trip-advisor-wp-1920x1080.jpg')" backgroundPosition="center"
  backgroundRepeat="no-repeat" w={{base:'100%'}}>
        <GridItem
          w={{ base: "100px", lg: "240px", xl: "240px" }}
          h={{ base: "100px", lg: "210px", xl: "210px" }}
          ml={"5px"}
          m={3}
        >
          <Image w="100%" h="100%" src={data?.images_large[0]} alt="PROVIDE PREVIEW IMAGE" />
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
          <Box mt={{ base: "1px", lg: "10px", xl: "10px" }} bg="white" color="black">
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
          <Box mt={{ base: "1px", lg: "10px", xl: "10px" }} bg="white" color="black">
            <Text
              fontWeight={400}
              lineHeight=""
              fontSize={{ base: "12px", sm: "14px", lg: "24px" }}
            >
               
              Price: {data.price}{" "}
            </Text>
          </Box>
        </GridItem>
      </Box>
        </Flex>
      </Stack>
    );
  }