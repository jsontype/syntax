import { ref, onMounted } from "vue"

export function useMoviesConnector() {
  const movies = ref([])
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
      movies.value = json.data.movies
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchMovies)

  return { movies, loading, error, fetchMovies }
}
