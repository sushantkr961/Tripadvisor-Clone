import { Box, Flex, Img, Button } from '@chakra-ui/react';
import React from 'react';
import logo from '../assests/Website_Logo.png';
import { TbPencil } from "react-icons/tb";
import { FiHeart } from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';


const Navbar = () => {
  return (
    <Box borderBottom='1px solid gray' position='sticky' top='0' bg='white' >
      <Box w='63%' margin='auto'>
          <Flex justify='space-between' alignItems='center'>
              <Box>
                  <Img src={logo} w={100} height='60px' />
              </Box>
              <Flex gap='15px' alignItems='center' fontWeight='bold' >
                  <Box display='flex' cursor='pointer' ml='10px' p='10px 15px' border='none' borderRadius='15px' _hover={{bg: '#e3f0e3'}}><TbPencil fontSize='20px' /> Review</Box>
                  <Box display='flex' cursor='pointer' ml='10px' p='10px 15px' border='none' borderRadius='15px' _hover={{bg: '#e3f0e3'}}><FiHeart fontSize='20px' /> Trips</Box>
                  <Box display='flex' cursor='pointer' ml='10px' p='10px 15px' border='none' borderRadius='15px' _hover={{bg: '#e3f0e3'}}><AiOutlineBell fontSize='20px' /> Alerts</Box>
                  <Button p='10px 15px' border='none' borderRadius='15px' cursor='pointer' bg='#000000' color='#FFFFFF' fontWeight='bold' _hover={{bg: '#545454'}} >Sign in</Button>
                  <Box display='flex' cursor='pointer' ml='10px' p='10px 15px' border='none' borderRadius='15px' _hover={{bg: '#e3f0e3'}}><BsCart3 fontSize='20px' /> Basket</Box>
              </Flex>
          </Flex>
    
      </Box>
    </Box>
  )
}

export default Navbar;