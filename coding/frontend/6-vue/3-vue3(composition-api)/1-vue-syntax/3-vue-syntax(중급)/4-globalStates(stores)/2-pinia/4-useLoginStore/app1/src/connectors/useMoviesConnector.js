import { ref } from "vue"
import { useMoviesStore } from "@/stores/movies/useMoviesStore"

export function useMoviesConnector() {
  const moviesStore = useMoviesStore()
  const loading = ref(false)
  const error = ref(null)

  const fetchMovies = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      )
      if (!response.ok) throw new Error("Failed to fetch movies")
      const json = await response.json()
      // 스토어 업데이트
      moviesStore.updateMoviesList(json.data.movies)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { loading, error, fetchMovies }
}
