import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export const SingleUser = () => {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = useState([
    {
      email: "rsoni2843@gmail.com",
      name: "Nipendra",
      password: "$2b$14$goQ6GovLNmbGT8uGdWDcTOfW8uvuvSkXGO575.51.i2RiTXw48Osi",
      role: "admin",
    },
  ]);
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/user/getUsers/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      <Box
        bg="black"
        w="100%"
        h="100vh"
        backgroundImage="url('https://wallpaperaccess.com/full/16677.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box mt="22px">
          <Heading
            mt={{ base: "22px" }}
            color="red"
            ml={{ base: "25%", sm: "28%", lg: "36%" }}
          >
            USER DETAILS
          </Heading>
        </Box>
        {user.map((user, i) => {
          return (
            <>
              <Box
                boxShadow="lg"
                color={"white"}
                bg="blackAlpha.400"
                w={{ base: "90%", sm: "90%" }}
                m="auto"
                ml={{ base: "5px", sm: "10px", lg: "60px" }}
                mt="8%"
                key={i}
                fontSize="20px"
              >
                <List spacing={3} color="white">
                  <ListItem
                    color={"white"}
                    bg="blackAlpha.800"
                    textShadow="0 0 20px white"
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User ID :{user._id} Temporary
                  </ListItem>
                  <ListItem color={"white"} bg="blackAlpha.800">
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User Name :{user.name}
                  </ListItem>
                  <ListItem color={"white"} bg="blackAlpha.800">
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User email :{user.email}
                  </ListItem>
                  <ListItem color={"white"} bg="blackAlpha.800">
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    User role :{user.role}
                  </ListItem>
                </List>

                <Link to="/Listofusers">
                  <Button ml="40%" bg="blue" color="white">
                    GO Back
                  </Button>
                </Link>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
