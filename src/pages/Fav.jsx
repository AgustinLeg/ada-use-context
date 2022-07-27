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
import { useDispatch, useSelector } from "react-redux";
import { types } from "../types";

export const Fav = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  return (
    <Container maxW="4xl">
      <HStack>
        <Heading>Fav list</Heading>

        <Button
          colorScheme="red"
          onClick={() => dispatch({ type: types.movieClear })}
        >
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
              <Button
                colorScheme="red"
                onClick={() =>
                  dispatch({ type: types.movieRemoveFav, payload: movie })
                }
              >
                Remove Fav
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};
