import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Explore = () => {
  return (
    <Box mt='50px' bg='#faf1ed' pt='20px' pb='20px' mb='50px' >
        <Box  w='63%' margin='auto'>
            <Text textAlign='left' fontSize='24px' fontWeight='bold'>More to explore</Text>
            <Flex>
                <Box w='364px' h='360px' mr='15px'>
                    <Img src='https://th.bing.com/th/id/OIP.IA_8XOfXtzMsigBywWmhfAHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' w='364px' h='235px'/>
                    <Text fontSize='16px' fontWeight='bold'>From Tripadvisor</Text>
                    <Text fontSize='18px' fontWeight='bold'>11 beautiful places in India that have to be seen to be believed</Text>
                </Box>
                <Box w='364px' h='360px' mr='15px'>
                    <Img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1' h='235px' w='364px' />
                    <Text fontSize='16px' fontWeight='bold'>From Tripadvisor</Text>
                    <Text fontSize='18px' fontWeight='bold'>5 beautiful hill stations in South India</Text>
                </Box>
                <Box w='364px' h='360px'>
                    <Img src='https://th.bing.com/th/id/OIP.Aa40yh6BGh_-4c4LuDacuwHaDV?w=326&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7' h='235px' w='364px' />
                    <Text fontSize='16px' fontWeight='bold'>From Tripadvisor</Text>
                    <Text fontSize='18px' fontWeight='bold'>Best time to visit Dubai for great weather and deals</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Explore