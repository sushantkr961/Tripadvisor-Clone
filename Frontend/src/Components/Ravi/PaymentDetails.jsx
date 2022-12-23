import React from 'react'
import "./Payment.css"
import {Box,Flex,Text} from "@chakra-ui/react"
import {GiReceiveMoney} from "react-icons/gi"
import { Input,Button } from '@chakra-ui/react'
import {AiFillIdcard} from "react-icons/ai"
import {HiCreditCard} from "react-icons/hi"
import {BsCalendar2DateFill,BsPinMapFill} from "react-icons/bs";
import {TbNumbers} from "react-icons/tb"
import {GiBlackFlag} from "react-icons/gi"
import {MdMapsHomeWork} from "react-icons/md"
import BackdropExample from "./Button"

export default function PaymentDetails() {
  return (
    <Box className='formbox' width={["100%","100%","100%","100%","60%"]}  padding={{base:"10px",sm:"50px",md:"50px",lg:"70px"}}>
      <Flex gap="3%" alignItems="center">
      <GiReceiveMoney size="10%" />
      <Text fontSize={{base:"30px",sm:"40px",md:"60px",lg:"60px"}} fontWeight="500">Payment Details</Text>
      </Flex>
        <br/>
      <Box  mt="40px" textAlign="center">
        <Text fontSize="180%" fontWeight="bold">Card Details</Text>
        <Text fontSize="xl" bgColor="teal.100" >This form is encrypted and your information is always guaranteed secure</Text>
      </Box>
  <br/>
  <br/>
      <Box>
        <Flex className='flex1'>
        <AiFillIdcard className='icons'/>
        <Text className="Text1">Cardholder Name</Text>
        </Flex>
        <Input placeholder='Cardholder Name' mt="8px"/>
        
        <Flex mt="80px"  className='flex1'>
        <HiCreditCard className='icons'/>
        <Text className="Text1" >Crdait/debit card number</Text>
        </Flex>
        <Input placeholder='Enter Card Number' mt="8px"/>
      </Box>

      <Flex mt="80px" gap="40%"  flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}>
          <Box>
            <Flex className='flex1'>
              <BsCalendar2DateFill className='icons'/>
              <Text className="Text1" >Card Expiry Date</Text>
            </Flex>
             <Input type="date" placeholder='Enter Gmail Here'className='inputbox'/>
          </Box>
          <Box>
            <Flex className='flex1'>
              <TbNumbers className='icons'/>
              <Text className="Text1">CVV Code </Text>
            </Flex>
             <Input placeholder='Enter Gmail Here' className='inputbox' />
          </Box>
          
        </Flex>

<br/>

<Flex  padding="5px" gap="15px" mt="30px">
          <MdMapsHomeWork size="45px" />
          <Text fontSize="180%" fontWeight="500">Billing Address</Text>
        </Flex>
       <br/>
       
        <Flex gap="40%"  flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}>
          <Box >
            <Flex className='flex1'>
              <GiBlackFlag className='icons'/>
              <Text className='Text1'>Country</Text>
            </Flex>
             <Input placeholder='Enter Gmail Here'className='inputbox'/>
          </Box>
          <Box>
            <Flex className='flex1'>
              <BsPinMapFill className='icons'/>
              <Text className='Text1'>Postal/ZipCode</Text>
            </Flex>
             <Input placeholder='Enter Gmail Here' className='inputbox'/>
          </Box>
          
        </Flex>

        {/* <Button className='button'>Next</Button> */}
        <BackdropExample />

    </Box>
  )
}
