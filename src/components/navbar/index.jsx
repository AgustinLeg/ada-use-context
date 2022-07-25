import { Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useUserContext } from "../../context/user/UserContext";

import { ModalAuth } from "../auth";

export const Navbar = () => {
  const { user, isLogged, logout } = useUserContext();

  console.log(user, isLogged);
  
  return (
    <Flex justify="space-between" bg="gray.600" p={5} color="white">
      <HStack spacing={10} as="nav">
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="/profile">
          Profile
        </Link>
      </HStack>
      <HStack>
        {user ? (
          <>
            <Text>Usuario: {user.name}</Text>
            <Button colorScheme="red" onClick={logout}>
              Cerrar Sesion
            </Button>
          </>
        ) : (
          <ModalAuth />
        )}
      </HStack>
    </Flex>
  );
};
