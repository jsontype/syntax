export const fetchMovies = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json")
  const data = await response.json()
  return data.data.movies
}

export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await response.json()
  return data.filter((item) => item.userId === 1)
}
