import { types } from "../types";

const initialState = {
  movies: [],
  loading: true,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieAddFav:
      const existMovie = state.movies.some(
        (movie) => movie.id === action.payload.id
      );

      if (existMovie) return state;

      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case types.movieRemoveFav:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
    case types.movieClear:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
};
