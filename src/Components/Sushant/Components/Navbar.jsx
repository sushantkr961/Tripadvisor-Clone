import { Box, Flex, Img, Button, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react';
import React from 'react';
import logo from '../assests/Website_Logo.png';
import { TbPencil } from "react-icons/tb";
import { FiHeart } from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { IoIosBed, IoIosRestaurant } from 'react-icons/io';
import { MdHolidayVillage } from 'react-icons/md';
import { RiTodoFill } from 'react-icons/ri';
import { BiGlobe } from 'react-icons/bi';
import { TfiMoreAlt } from 'react-icons/tfi'


const Navbar = () => {
  return (
    <Box w='63%' margin='auto'>
        <Flex justify='space-between' alignItems='center' mb='50px' >
            <Box>
                <Img src={logo} width='200px' height='60px' />
            </Box>
            <Flex gap='15px' alignItems='center' fontWeight='bold' >
                <Box display='flex' cursor='pointer' ml='10px'><TbPencil fontSize='20px' /> Review</Box>
                <Box display='flex' cursor='pointer' ml='10px'><FiHeart fontSize='20px' /> Trips</Box>
                <Box display='flex' cursor='pointer' ml='10px'><AiOutlineBell fontSize='20px' /> Alerts</Box>
                <Button p='10px 15px' border='none' borderRadius='15px' cursor='pointer' bg='#000000' color='#FFFFFF' fontWeight='bold' >Sign in</Button>
                <Box display='flex' cursor='pointer' ml='10px'><BsCart3 fontSize='20px' /> Basket</Box>
            </Flex>
        </Flex>
        <Flex fontSize='16px' gap='15px' margin='auto'>
          <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Hotels <IoIosBed fontSize='20px' /> </Box>
          <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Holiday Homes <MdHolidayVillage fontSize='20px' /> </Box>
          <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Things to Do <RiTodoFill fontSize='20px' /> </Box>
          <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Restaurants <IoIosRestaurant fontSize='20px' /> </Box>
          <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Travel Stories <BiGlobe fontSize='20px' /> </Box>
          <Menu>
            <MenuButton display='flex' justifyContent='space-between' border='1px solid black' bg='#ffffff' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' textAlign='left' _hover={{ bg: '#000000', color: 'white'}} fontSize='16px' as={Button} rightIcon={<TfiMoreAlt fontSize='20px' /> } >More 
              <MenuList color='#000000' bg='#ffffff' border='1px solid red' borderRadius='12px'>
                <MenuItem border='none' p='5px 10px' color='#000000' bg='#ffffff' as={Button} cursor='pointer' _hover={{bg: '#00000'}}>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </MenuButton>
          </Menu>
        </Flex>
  
    </Box>
  )
}

export default Navbar