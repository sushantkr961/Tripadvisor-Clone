import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Address = () => {
  return (
    <Box mt={2} textAlign={"center"}>
      <Image
        m={"auto"}
        bg={"white"}
        src={
          "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        }
      />
      <Text fontWeight={"bold"} fontSize={26}>
        Nothing in cart Book Hotels and Packages<Link href={"/"}> Here</Link>
      </Text>
    </Box>
  );
};

export default Address;
