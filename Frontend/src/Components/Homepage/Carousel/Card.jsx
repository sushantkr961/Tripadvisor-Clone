import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ src, name }) => {

  return (
    <Box h='fit-content'>
        <Img src={src} w='250px' h='250px' border='1px solid gray' cursor='pointer' />
        <Text fontSize='24px' fontWeight='bold' cursor='pointer'>{name}</Text>
    </Box>
  )
}

export default Card;

// bg='#e3f0e3'