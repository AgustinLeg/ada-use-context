import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMovieContext } from "../context/MovieContext";


export const Fav = () => {
  const { movies, clearFav, removeFav } = useMovieContext();

  return (
    <Container maxW="4xl">
      <HStack>
        <Heading>Fav list</Heading>

        <Button colorScheme="red" onClick={clearFav}>
          Clear
        </Button>
      </HStack>
      {!movies.length && <Text>No hay peliculas en favoritos</Text>}
      {!!movies.length && (
        <SimpleGrid columns={[1, null, 3]} gap={5}>
          {movies.map((movie) => (
            <VStack key={movie.id}>
              <Image src={movie.img} h="xs" />
              <Heading size="md">{movie.name}</Heading>
              <Button colorScheme="red" onClick={() => removeFav(movie)}>
                Remove Fav
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};
