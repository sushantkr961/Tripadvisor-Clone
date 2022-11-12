import { Box, Flex, Hide, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import logo from "../assests/Website_Logo.png";

const Footer = () => {
  let style = {
    fontSize: "14px",
    color: "#000000",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <Box bg="#faf1ed" p="30px">
      <Flex w="65%" margin="auto" justify="space-between">
        <Flex textAlign="left">
          <Box p="20px 50px 20px 20px" textAlign="left">
            <Text fontSize="16px" color="#333333">
              About Tripadvisor
            </Text>
            <Link style={style}>About Us</Link> <br />
            <Link style={style}>Press</Link> <br />
            <Link style={style}>Resources and Policies</Link> <br />
            <Link style={style}>Careers</Link> <br />
            <Link style={style}>Trust & Safety</Link> <br />
            <Link style={style}>Contact us</Link> <br />
            <Link style={style}>Accessibility Statement</Link> <br />
          </Box>
          <Box p="20px 50px 20px 20px">
            <Text fontSize="16px" color="#333333">
              Explore
            </Text>
            <Link style={style}>Write a review</Link> <br />
            <Link style={style}>Add a Place</Link> <br />
            <Link style={style}>Join</Link> <br />
            <Link style={style}>Travellers' Choice</Link> <br />
            <Link style={style}>GreenLeaders</Link> <br />
            <Link style={style}>Help Centre</Link> <br />
            <Link style={style}>Travel Articles</Link> <br />
          </Box>
          <Hide below="md">
            <Box p="20px 50px 20px 20px">
              <Text fontSize="16px" color="#333333">
                Do Business With Us
              </Text>
              <Link style={style}>Owners & DMO/CVB</Link> <br />
              <Link style={style}>Business Advantage</Link> <br />
              <Link style={style}>Sponsored Placements</Link> <br />
              <Link style={style}>Access our Content Api</Link> <br />
              <Text fontSize="16px" color="#333333">
                Get the App
              </Text>
              <Link style={style}>iPhone App</Link> <br />
              <Link style={style}>Android App</Link> <br />
            </Box>
          </Hide>
        </Flex>
        <Hide below="md">
          <Box p="20px 70px 20px 20px" textAlign="left">
            <Text fontSize="16px" color="#333333">
              Tripadvisor Sites
            </Text>
            <Text fontSize="16px" color="#333333">
              Book tours and attraction tickets on{" "}
              <Link style={style}> Viator</Link>
            </Text>
          </Box>
        </Hide>
      </Flex>
      <Hide></Hide>
      <Box w="65%" margin="auto">
        <Img src={logo} w={100} />
        <Box fontSize="12px" w="75%" m="auto">
          <Text>© 2022 Tripadvisor LLC All rights reserved.</Text>
          <Text>
            This is the version of our website addressed to speakers of English
            in India. If you are a resident of another country or region, please
            select the appropriate version of Tripadvisor for your country or
            region in the drop-down menu. more
          </Text>
        </Box>
        <Box display="flex" gap="5px" w="100px" m="auto">
          <Link href="">
            <FaFacebook color="#000000" fontSize="20px" />
          </Link>
          <Link href="">
            <IoLogoTwitter color="#000000" fontSize="20px" />
          </Link>
          <Link href="">
            <FaPinterest color="#000000" fontSize="20px" />
          </Link>
          <Link href="">
            <FaInstagram color="#000000" fontSize="20px" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
