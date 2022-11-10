import { Box, Button, Img, Text } from '@chakra-ui/react'
import Carousel from '@itseasy21/react-elastic-carousel';
import React from 'react'
import Card from './Carousel/Card'

const IndiaTour = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];

  return (
    <Box w='65%' margin='auto' mt='30px' border='1px solid black'>
      <Box w='89%' border='1px solid black' margin='auto'  mb='20px'>
        <Text textAlign='left'>Tour to India</Text>
      </Box>
      <Box border='1px solid black' display='flex'>
        <Carousel breakPoints={breakPoints}>
          <Card src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/40/48/d3/caption.jpg?w=300&h=300&s=1' name='cities of india' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
        </Carousel>
      </Box>
      <Box h='190px' display='flex' justifyContent='space-between' mt='50px' cursor='pointer'>
        <Box bg='#faf1ed' border='1px solid black' width='60%' textAlign='left' p='25px'>
          <Text>Get out there</Text>
          <Text>Best of the best tours, attractions and activites you won't want to miss</Text>
          <Button>See the list</Button>
        </Box>
        <Box>
          <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1' w='500px' h='190' />
        </Box>
      </Box>
      <Box border='1px solid black' display='flex' mt='50px'>
        <Carousel breakPoints={breakPoints}>
          <Card src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/40/48/d3/caption.jpg?w=300&h=300&s=1' name='cities of india' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
          <Card src='' name='' />
        </Carousel>
      </Box>
    </Box>
  )
}

export default IndiaTour