import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ src, name }) => {

  return (
    <Box h='fit-content'>
        <Img src={src} w='250px' h='250px' />
        <Text>{name}</Text>
    </Box>
  )
}

export default Card