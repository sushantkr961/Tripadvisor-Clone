import React from 'react'
import { Text } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';


import {
    Image,Box,Grid,
    Input,Checkbox,
    FormControl,FormLabel,
    InputLeftAddon,InputGroup,Button,
  } from '@chakra-ui/react';
import "./PaymentDetails.css"; 
import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';



function TravellerDetails() {
const [form,setForm]=useState({gmail:""})
const [userData,setUserData]=useState([])
const {gmail}= form

function handleForm(){

setUserData([...userData,form])
}

let handleChange=(e)=>{
  const {type,value,id,checked}=e.target;
  const inputValue= type==="checkbox" ? checked : value;
setForm({...form,[id]:inputValue})
}

return (
   
    <div className='page1'>
      <div padding={"30px"}>
    <Text fontSize="30px">TravellerDetails</Text>
    <hr/>
    <Text fontSize="9px">Back to Basket</Text>
    
    <br/>
    <br/>
    <Text as='b'>Secure Checkout</Text>
    <Container maxW='xl' bg='#eafaf4' color='black' padding={"5px"}>
    <Text fontSize="12px">Checkout securely - takes only a few minutes</Text>
    
  </Container>
  </div>

   <br/>
    <div className='box1'>

    <div className='ContactDetails'>

    
   <form>
    <Text as='b'>Contact Details</Text>
    <br/>
    <br/>
    <SimpleGrid columns={2} spacing={10}>
        
        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>Gmail</FormLabel>
        <Input size='xs' type="text" id="Gmail" value={gmail} onChange={handleChange}/>
        </FormControl> 

        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>Phone Number</FormLabel>
        <InputGroup size='xs'>
        <InputLeftAddon  children='+91' />
        <Input size='xs' type='number' />
        </InputGroup>
        </FormControl>
        </SimpleGrid>
        <br/>
        <Checkbox ><Text fontSize={"10px"}>You will receive text message updates about your booking.</Text></Checkbox>
        <br/>
        <br/>

        <Text as='b'  marginBottom="50px" >Traveller Details</Text>
        
      
        
        <Text fontSize="10px" fontWeight={"500"} marginBottom="10px" >Lead Traveller</Text>
     
        <SimpleGrid columns={2} spacing={10}>

        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>First name</FormLabel>
        <Input size='xs' />
        </FormControl> 

        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>Last name</FormLabel>
        <Input size='xs'  />
        </FormControl> 
        </SimpleGrid>
        <br/>
        <Text fontSize="10px" fontWeight={"500"} marginBottom="10px" >Traveller 2</Text>
        <SimpleGrid columns={2} spacing={10}>
        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>First name</FormLabel>
        <Input size='xs'  />
        </FormControl> 

        <FormControl isRequired>
        <FormLabel fontSize={"10px"}>Last name</FormLabel>
        <Input size='xs'  />
        </FormControl> 
        </SimpleGrid>
     <br/>
        <Text as='b'  marginBottom="50px" >Tour specifics</Text>
        <Text fontSize="10px" fontWeight={"500"} marginBottom="10px" >Hotel Pickup </Text>
        <Text fontSize={"8px"}>The provider offers pickup from select hotels. Meet the provider at one of the listed hotels.</Text>
        <Input size='xs' fontSize={"10px"} marginTop={"10px"} placeholder='Enter your pickup location' />
        <br/>
        <br/>
        <Text as='b'  marginBottom="50px" >Promo Code</Text>
        <hr></hr>
        <Text fontSize="10px" fontWeight={"500"} marginBottom="10px">Enter Promo Code</Text>
        <br/>
        <br/>
        <Button colorScheme='red' width={"90%"} onClick={handleForm}>Next</Button>
        <br/>
        <br/>
        <Text fontSize={"8px"}>© 2022 TripAdvisor LLC All rights reserved. Tripadvisor Terms of Use and Privacy Policy.</Text>
        </form>
       

    </div>
    <div className='ReviewOrderDetails'>
      <div className='smbox'>
      <Text as='b'>Review Order Details</Text>
      <hr></hr>
    <Box  boxSize='150px' width={"100%"} height={"50%"} border={"2px solid black"}>
  <Image height={"50%"} width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  </Box>
  <Text  as='b' fontSize={"10px"}>Full-Day Bodh Gaya Private Tour from Patna</Text>
  <Text   fontSize={"9.5px"}>Full-Day Bodh Gaya Private Tour from Patna - 7:30 am
           Saturday, 12 November, 2022
           2 Adults
           Non-refundable
  </Text>
<Box marginTop={"10px"} marginRight={"-100px"}>
<Grid templateColumns='repeat(2, 1fr)' gap={1.8} >
<Text fontSize={"9px"}>Booking Fee</Text>
<Text fontSize={"9px"}>₹0.00</Text>
<Text fontSize={"9px"}>Subtotal:</Text>
<Text fontSize={"9px"}>₹12,488.74</Text>
<Text fontSize={"9px"} fontWeight={"bold"}>Total:</Text>
<Text fontSize={"9px"} fontWeight={"bold"}>₹12,488.74</Text>
</Grid>
</Box>
  
</div>

      <div className='smbox'>
      <Text as='b'>Book with confidence</Text>
      <hr></hr>
  
      <Box marginTop={"9px"}>
        <Text fontSize={"12px"} fontWeight={"bold"}>Lowest price guarantee</Text>
        <Text fontSize={"10px"}>Find it cheaper? We'll refund the difference</Text>
      </Box>
      
      <Box  marginTop={"9px"}>
        <Text fontSize={"12px"} fontWeight={"bold"}>Privacy protection</Text>
        <Text fontSize={"10px"}>We use SSL encryption to keep your data secure</Text>
      </Box>
      <Box  marginTop={"9px"}>
        <Text fontSize={"12px"} fontWeight={"bold"}>24/7 global support</Text>
        <Text fontSize={"10px"}>Get the answers you need, when you need them</Text>
      </Box>
      <Box  marginTop={"9px"}>
        <Text fontSize={"12px"} fontWeight={"bold"}>Give us a call</Text>
        <Text fontSize={"10px"}>We’d be happy to help you out with your booking
</Text>
<Text fontSize={"10px"}>Call now: 000-0800-100-6999</Text>
      </Box>
    </div>
    </div>
    </div>

    <div>
        <div className='TourSpecific'>
        
        </div>
        <div className='BookWithConfidence'></div>
    </div>
    </div>
    
  )
}

export default TravellerDetails

