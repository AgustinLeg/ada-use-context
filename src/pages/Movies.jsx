import {
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { movies } from "../assets/movies";
import { useMovieContext } from "../context/MovieContext";

export const Movies = () => {
  const { addFav } = useMovieContext();

  return (
    <Container maxW="4xl">
      <Heading>Movies list</Heading>
      <SimpleGrid columns={[1, null, 3]} gap={5}>
        {movies.map((movie) => (
          <VStack key={movie.id}>
            <Image src={movie.img} h="xs" />
            <Heading size="md">{movie.name}</Heading>
            <Button colorScheme="yellow" onClick={() => addFav(movie)}>
              Fav
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  );
};
