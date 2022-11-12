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
    <Box w='65%' margin='auto' mt='30px'>
      <Box w='89%' margin='auto'  mb='10px'>
        <Text textAlign='left' fontSize='24px' fontWeight='bold'>Ways to tour India</Text>
      </Box>
      <Box display='flex'>
        <Carousel breakPoints={breakPoints}>
          <Card src='https://www.logolynx.com/images/logolynx/c5/c508832e9a1fd735dc92e2283f2cecac.jpeg' name='Bihar' />
          <Card src='https://th.bing.com/th/id/OIP.Pu4TqFupXsp3gkeVhf_d-AHaD_?w=326&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Maharastra' />
          <Card src='https://th.bing.com/th/id/OIP.ORVdhng2XKPWo_pOTbX98QHaD_?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Rajasthan' />
          <Card src='https://th.bing.com/th/id/OIP.tmORUNaiUZ0aY93N5FAWOgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Madhya Pradesh' />
          <Card src='https://th.bing.com/th/id/OIP.7Ja_Nnw___GR1LKRw80fnwFUC3?w=331&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Kerala' />
          <Card src='https://th.bing.com/th/id/OIP.2_lSktvcojtcavUdnYbrJAHaD_?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Assam' />
          <Card src='https://th.bing.com/th/id/OIP.6S6W7SJBuxLqsrio9OHliwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Uttrakhand' />
          <Card src='https://i.pinimg.com/736x/dc/fa/c1/dcfac102e24c433cc120dbf062568380.jpg' name='Jammu Kashmir' />
          <Card src='https://th.bing.com/th/id/OIP.0keeTk6pZmb4v5z5jHZ9NQHaEJ?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='Uttar Pradesh' />
        </Carousel>
      </Box>
      <Box bg='#faf1ed' h='200px' display='flex' justifyContent='space-between' mt='50px' cursor='pointer'>
        <Box width='65%' textAlign='left' p='20px'>
          <Text fontSize='24px' fontWeight='bold'>Get out there</Text>
          <Text mt='-10px'>Best of the best tours, attractions and activites you won't want to miss.</Text>
          <Button p='10px 15px' border='none' borderRadius='15px' cursor='pointer' bg='#000000' color='#FFFFFF' fontWeight='bold' _hover={{bg: '#545454'}}>See the list</Button>
        </Box>
        <Box>
          <Img src='https://th.bing.com/th/id/OIP.sP9RtX_qphHskOup8F_gIAHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' w='400px' h='200px' />
        </Box>
      </Box>
      <Box w='89%' margin='auto' mt='50px'>
        <Text textAlign='left' fontSize='24px' fontWeight='bold'>Monuments in India</Text>
      </Box>
      <Box display='flex' >
        <Carousel breakPoints={breakPoints}>
          <Card src='https://www.bing.com/th/id/OGC.de5cf6f9ea0a743acdd5dbabdd88a68b?pid=1.7&rurl=https%3a%2f%2fohfact.com%2fwp-content%2fuploads%2f2015%2f08%2fTaj-Mahal.gif&ehk=tA%2bIlUQggKPEmpaeu0ULuA7ssgsr28CpwzFiy4%2fPpZU%3d' name='The Taj Mahal' />
          <Card src='https://th.bing.com/th/id/OIP.tTH3jF3k-JWfZdbe6cakdgHaFj?w=264&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7' name='India Gate' />
          <Card src='https://static.toiimg.com/photo/60776678/.jpg' name='Hawa Mahal' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india2.png' name='Gateway of India' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india4.png' name='Golden Temple' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india8.png' name='Agra Fort' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india10.png' name='Victoria Memorial' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india11.png' name='Khajuraho Group of Monuments' />
          <Card src='https://static.javatpoint.com/list/images/list-of-monuments-in-india14.png' name='Bahai Temple (Lotus Temple)' />
        </Carousel>
      </Box>
    </Box>
  )
}

export default IndiaTour