import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackdropExample() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        width="70%"
        ml="15%"
        mt="10%"
      >
        Next
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xx-large">Yore Hotel booking Successfull</Text>
            <FaHotel fontSize="200px" fontWeight="500" color="red" />
          </ModalBody>
          <ModalFooter>
            <Link to={"/"}>
              <Button onClick={onClose}>Close</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
