import { useStore } from "vuex"
import { computed } from "vue"

export function useMoviesStore() {
  const store = useStore()
  const moviesList = computed(() => store.state.movies.moviesList || [])

  const updateMoviesList = (newList) => {
    store.dispatch("movies/updateMoviesList", newList)
  }

  return {
    moviesList,
    updateMoviesList,
  }
}
