import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import { Login } from "./Login";

export const ModalAuth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Iniciar Sesion
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar Sesion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
