export default {
  addMovieCommit (state, data) {
    state.movieList.push(data)
    // localStorage.setItem('movieList', JSON.stringify(state.movieList))
  },
  removeMovieCommit (state, data) {
    const movie = state.movieList.find(movieList => movieList.id === data.id)
    if (movie !== undefined) {
      state.movieList.splice(state.movieList.indexOf(data), 1)
      // localStorage.setItem('movieList', JSON.stringify(state.movieList))
    }
  },
  updateMovieCommit (state, data) {
    const record = state.movieList.find(movieList => movieList.id === data.id)
    state.movieList[record] = data
    // localStorage.setItem('movieList', JSON.stringify(state.movieList))
  }
}
