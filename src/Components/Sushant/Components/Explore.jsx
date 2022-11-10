import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Explore = () => {
  return (
    <Box mt='50px' bg='#faf1ed' pt='20px'>
        <Box  w='63%' margin='auto'>
            <Text textAlign='left'>More to explore</Text>
            <Flex>
                <Box w='364px' h='360px' mr='15px'>
                    <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1' w='364px' h='235px'/>
                    <Text>From Tripadvisor</Text>
                    <Text>5 beautiful hill stations in South India</Text>
                </Box>
                <Box w='364px' h='360px' mr='15px'>
                    <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1' h='235px' w='364px' />
                    <Text>From Tripadvisor</Text>
                    <Text>5 beautiful hill stations in South India</Text>
                </Box>
                <Box w='364px' h='360px'>
                    <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1' h='235px' w='364px' />
                    <Text>From Tripadvisor</Text>
                    <Text>5 beautiful hill stations in South India</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Explore