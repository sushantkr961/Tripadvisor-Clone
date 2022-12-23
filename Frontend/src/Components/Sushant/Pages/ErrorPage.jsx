import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Box textAlign="center" py={10} px={6} h={"80vh"} mt={'100px'}>
      <Heading
        display="inline-block"
        as="h2"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
        fontSize='9xl'
      >
        404
      </Heading>
      <Text fontSize='4xl' mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6} fontSize='2xl'>
        The page you're looking for does not seem to exist
      </Text>

      <Link to="/">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
