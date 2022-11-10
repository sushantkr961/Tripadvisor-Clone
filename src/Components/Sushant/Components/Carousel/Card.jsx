import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Card = () => {

  return (
    <Box h='fit-content'>
        <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/87/ec/caption.jpg?w=300&h=300&s=1' w='250px' h='250px' />
        <Text>Cities of India</Text>
    </Box>
  )
}

export default Card