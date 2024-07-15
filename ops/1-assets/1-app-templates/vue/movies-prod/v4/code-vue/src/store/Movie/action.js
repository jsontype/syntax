export default {
  addMovieAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addMovieCommit', payload)
      resolve()
    })
  },
  removeMovieAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeMovieCommit', payload)
      resolve()
    })
  },
  updateMovieAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('updateMovieCommit', payload)
      resolve()
    })
  }
}
