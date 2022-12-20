import axios from "axios"

export default {
  FETCH_MOVIE({ commit }) {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => {
        // setState 함수를 실행하여 store에 담는다.
        commit("SET_MOVIES", res.data.data.movies)
      })
  },
}
