import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button rounded="full" h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <AiFillEyeInvisible /> : <AiFillEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PasswordInput;
