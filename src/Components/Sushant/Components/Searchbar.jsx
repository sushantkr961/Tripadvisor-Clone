import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import React from 'react'


const Searchbar = () => {
  return (
    <Box w='62%' margin='auto' mt='30px' h='340px' bgImage='https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp' bgRepeat='no-repeat' mb='50px' display='flex' align='center' >
        {/* <InputGroup w='75%' margin='auto' >
            <InputLeftElement pointerEvents='none' children={<FiSearch />} mt={135}/>
            <Input type='search' placeholder='Where to?' w='100%' outline='none' mt={135} />
        </InputGroup> */}
        <Stack w='60%' m='auto'>
          <InputGroup>
            <InputLeftElement  children={<Search2Icon fontSize='x-large' />} p='14px' />
            <Input type='search' placeholder='Where to?' outline='none' w='100%' padding='15px 50px' fontSize='large' borderRadius='25px' border='none' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' />
          </InputGroup>
        </Stack>
    </Box>
  )
}

export default Searchbar;