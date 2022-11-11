import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ name, value, onChange }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <InputGroup size="md">
        <Input
          name={name}
          value={value}
          pr="4.5rem"
          onChange={onChange}
          type={show ? "text" : "password"}
          placeholder="Enter Password"
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
