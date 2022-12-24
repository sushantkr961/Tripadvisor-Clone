import {
  Heading,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserListpage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://travelgo-backend.vercel.app/user/getUsers")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const { users } = res;
        setUser(users);
      });
  }, []);

  return (
    <>
      <Box
        alignContent={"flex-start"}
        w="100%"
        h="100vh"
        bgColor={"black"}
        backgroundImage="url('https://wallpaperaccess.com/full/16677.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        m="auto"
      >
        <Button
          w={{ base: "70%", lg: "48%", xl: "48%" }}
          ml={{ base: "9%", lg: "18%", xl: "20%" }}
          mt="20px"
          bg="white"
        >
          {" "}
          <Heading color={"black"}>List of Users</Heading>
        </Button>
        <Box
          overflow={"scroll"}
          h="90%"
          ml={{ base: "2%", lg: "7%", xl: "9%" }}
        >
          <TableContainer
            w={{ base: "80%", lg: "80%", xl: "80%" }}
            fontSize={{ base: "12px", lg: "16px", xl: "24px" }}
            m="3%"
            mt="20px"
          >
            <Table variant="simple">
              <Thead>
                <Tr bg="blackAlpha.800">
                  <Th color={"Red"}>S.no</Th>
                  <Th color={"Red"}>User Name</Th>
                  <Th color={"Red"}>Click</Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.map((e, i) => {
                  return (
                    <>
                      <Tr>
                        <Td color={"white"} bg="blackAlpha.800">
                          {i + 1}
                        </Td>
                        <Td color={"white"} bg="blackAlpha.800">
                          {e.name}
                        </Td>
                        <Td bg="blackAlpha.800">
                          {" "}
                          <Link to={`/profile/admin/${e._id}`}>
                            {" "}
                            <Button m="5px" colorScheme="teal" size="sm">
                              More Details
                            </Button>{" "}
                          </Link>
                        </Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
