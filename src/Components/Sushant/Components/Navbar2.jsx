import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { IoIosBed, IoIosRestaurant } from 'react-icons/io'
import { MdHolidayVillage } from 'react-icons/md'
import { RiTodoFill } from 'react-icons/ri'
import { TfiMoreAlt } from 'react-icons/tfi'

const Navbar2 = () => {
  return (
    <Box w='62%' margin='auto' mt='30px'>
        <Flex fontSize='16px' gap='15px' margin='auto'>
            <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Hotels <IoIosBed fontSize='20px' /> </Box>
            <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Holiday Homes <MdHolidayVillage fontSize='20px' /> </Box>
            <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Things to Do <RiTodoFill fontSize='20px' /> </Box>
            <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Restaurants <IoIosRestaurant fontSize='20px' /> </Box>
            <Box display='flex' justifyContent='space-between' border='1px solid black' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' _hover={{ bg: '#000000', color: 'white'}}>Travel Stories <BiGlobe fontSize='20px' /> </Box>
            <Menu>
                <MenuButton display='flex' justifyContent='space-between' border='1px solid black' bg='#ffffff' p='15px 15px' w='150px' borderRadius='12px' cursor='pointer' alignItems='center' textAlign='left' _hover={{ bg: '#000000', color: 'white'}} fontSize='16px' as={Button} rightIcon={<TfiMoreAlt fontSize='20px' /> } >More 
                <MenuList color='#000000' bg='#ffffff' border='1px solid red' borderRadius='12px'>
                    <MenuItem border='none' p='5px 10px' color='#000000' bg='#ffffff' as={Button} cursor='pointer' _hover={{bg: '#00000'}}>Add a Place</MenuItem>
                    <MenuItem>Airlines</MenuItem>
                    <MenuItem>Car Hire</MenuItem>
                    <MenuItem>Flights</MenuItem>
                    <MenuItem>Cruises</MenuItem>
                    <MenuItem>Help Centre</MenuItem>
                    <MenuItem>Package Holidays</MenuItem>
                    <MenuItem>Travel Forums</MenuItem>
                    <MenuItem>Travells' Choice</MenuItem>
                </MenuList>
                </MenuButton>
            </Menu>
        </Flex>
    </Box>
  )
}

export default Navbar2