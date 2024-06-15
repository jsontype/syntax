import { defineStore } from "pinia"

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    moviesList: [],
  }),
  actions: {
    updateMoviesList(newList) {
      this.moviesList = newList
    },
  },
  getters: {
    movies: (state) => state.moviesList,
  },
})
