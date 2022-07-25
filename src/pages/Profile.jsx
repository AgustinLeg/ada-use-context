import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { useUserContext } from "../context/user/UserContext";

export const Profile = () => {

  const { user, logout } = useUserContext();
    
  return (
    <Container>
      <Heading>Datos del usuario</Heading>
      <Text fontSize="xl">
        Nombre de usuario:
        <Text as="span" fontWeight="bold">
          {user?.name}
        </Text>
      </Text>
      <Text fontSize="xl">
        Email:
        <Text as="span" fontWeight="bold">
          {user?.email}
        </Text>
      </Text>
      <Button colorScheme="red" onClick={logout}>
        Cerrar Sesion
      </Button>
    </Container>
  );
};
