import create from "zustand";

const useMovieStore = create((set, get) => ({
  movies: [],
  addFav: (mov) => {
    let movies = get().movies;
    const existMovie = movies.some((movie) => movie.id === mov.id);
    if (!existMovie) {
      set((state) => ({
        movies: [...state.movies, mov],
      }));
    }
  },
  removeFav: (mov) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== mov.id),
    })),
  clearFav: () => set({ movies: [] }),
}));

export default useMovieStore;
