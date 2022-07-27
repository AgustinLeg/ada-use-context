import { useRecoilValue, useSetRecoilState } from "recoil";

import moviesState from "../shared/movies";

const useMovie = () => {
  const setMovieState = useSetRecoilState(moviesState);
  const movies = useRecoilValue(moviesState);

  const addFav = (mov) => {
    const existMovie = movies.some((movie) => movie.id === mov.id);

    if (!existMovie) {
      setMovieState([...movies, mov]);
    }
  };

  const removeFav = (mov) => {
    setMovieState(movies.filter((movie) => movie.id !== mov.id));
  };

  const clearFav = () => {
    setMovieState([]);
  };

  return { movies, addFav, removeFav, clearFav };
};

export default useMovie;
