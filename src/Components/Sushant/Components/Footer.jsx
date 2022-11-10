import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <Box bg='#faf1ed' p='30px'>
        <Flex  w='65%' margin='auto' justify='space-between'>
            <Flex textAlign='left'>
                <Box p='20px 50px 20px 20px' textAlign='left' >
                    <Text>About Tripadvisor</Text>
                    <Link>About Us</Link>  <br />
                    <Link>Press</Link> <br />
                    <Link>Resources and Policies</Link> <br />
                    <Link>Careers</Link> <br />
                    <Link>Trust & Safety</Link> <br />
                    <Link>Contact us</Link> <br />
                    <Link>Accessibility Statement</Link> <br />
                </Box>
                <Box p='20px 50px 20px 20px' >
                    <Text>Explore</Text>
                    <Link>Write a review</Link> <br />
                    <Link>Add a Place</Link> <br />
                    <Link>Join</Link> <br />
                    <Link>Travellers' Choice</Link> <br />
                    <Link>GreenLeaders</Link> <br />
                    <Link>Help Centre</Link> <br />
                    <Link>Travel Articles</Link> <br />
                </Box>
                <Box p='20px 50px 20px 20px' >
                    <Text>Do Business With Us</Text>
                    <Link>Owners & DMO/CVB</Link> <br />
                    <Link>Business Advantage</Link> <br />
                    <Link>Sponsored Placements</Link> <br />
                    <Link>Access our Content Api</Link> <br />
                    <Text>Get the App</Text>
                    <Link>iPhone App</Link> <br />
                    <Link>Android App</Link> <br />
                </Box>
            </Flex>
            <Box p='20px 70px 20px 20px' textAlign='left' >
                <Text>Tripadvisor Sites</Text>
                <Text>Book tours and attraction tickets on <Link> Viator</Link></Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Footer