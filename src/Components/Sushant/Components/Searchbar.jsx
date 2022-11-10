import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <Box w='62%' margin='auto' mt='30px' h='340px' bgImage='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp' bgRepeat='no-repeat' mb='50px' >
        <InputGroup w='75%' margin='auto'>
            <InputLeftElement pointerEvents='none' children={<FiSearch />}/>
            <Input type='search' placeholder='Where to?' w='100%' outline='none' />
        </InputGroup>
    </Box>
  )
}

export default Searchbar;