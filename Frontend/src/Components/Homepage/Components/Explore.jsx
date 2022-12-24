import { Box, chakra, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

export default function Explore() {
  return (
    <Box
      maxW="6xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      w={{ base: "100%", md: "90%", lg: "71%" }}
    >
      <chakra.h1
        textAlign={"left"}
        fontSize={"24px"}
        py={0}
        fontWeight={"bold"}
      >
        More to explore
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Box px={{ base: 4, md: 8 }} py={"5"} rounded={"lg"}>
          <Image
            src="https://th.bing.com/th/id/OIP.IA_8XOfXtzMsigBywWmhfAHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            h="235px"
            w="364px"
          />
          <Link href="https://www.tripadvisor.com/Articles-lPcMIbudrFsY-Gorgeous_places_in_india_for_your_bucket_list.html">
            <Text fontSize="18px" fontWeight="bold">
              11 beautiful places in India that have to be seen to be believed
            </Text>
          </Link>
        </Box>

        <Box px={{ base: 4, md: 8 }} py={"5"} rounded={"lg"}>
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1"
            h="235px"
            w="364px"
          />
          <Link href="https://www.tripadvisor.com/Articles-li0M2AUf6tr4-Best_hill_stations_in_south_india.html">
            <Text fontSize="18px" fontWeight="bold">
              5 beautiful hill stations in South India
            </Text>
          </Link>
        </Box>

        <Box px={{ base: 4, md: 8 }} py={"5"} rounded={"lg"}>
          <Image
            src="https://th.bing.com/th/id/OIP.Aa40yh6BGh_-4c4LuDacuwHaDV?w=326&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            h="235px"
            w="364px"
          />
          <Link href="https://www.tripadvisor.com/Articles-lsgYPejlYTtE-Best_time_to_visit_dubai.html">
            <Text fontSize="18px" fontWeight="bold">
              Best time to visit Dubai for great weather and deals
            </Text>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
