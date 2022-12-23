import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg="#FAF1ED" color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                w="200px"
              />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Tripadvisor LLC All rights reserved.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link>Join</Link>
            <Link>Resources and Policies</Link>
            <Link>Trust & Safety</Link>
            <Link>Contact us</Link>
            <Link>Accessibility Statement</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
          <ListHeader></ListHeader>
            <Link href={"#"}>
              <FaFacebook color="#000000" fontSize="30px" />
            </Link>
            <Link href={"#"}>
              <IoLogoTwitter color="#000000" fontSize="30px" />
            </Link>
            <Link href={"#"}>
              <FaPinterest color="#000000" fontSize="30px" />
            </Link>
            <Link href={"#"}>
              <FaInstagram color="#000000" fontSize="30px" />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
