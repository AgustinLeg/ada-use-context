import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addFav = (mov) => {
    const existMovie = movies.some((movie) => movie.id === mov.id);

    if (!existMovie) {
      setMovies([...movies, mov]);
    }
  };

  const removeFav = (mov) => {
    setMovies(movies.filter((movie) => movie.id !== mov.id));
  };

  const clearFav = () => setMovies([]);

  return (
    <MovieContext.Provider value={{ movies, addFav, removeFav, clearFav }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
