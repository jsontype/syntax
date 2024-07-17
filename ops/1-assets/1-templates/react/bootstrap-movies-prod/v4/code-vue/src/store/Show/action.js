export default {
  addShowAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addShowCommit', payload)
      resolve()
    })
  },
  removeShowAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeShowCommit', payload)
      resolve()
    })
  },
  updateShowAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('updateShowCommit', payload)
      resolve()
    })
  },
  addEpisodeAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addEpisodeCommit', payload)
      resolve()
    })
  },
  removeEpisodeAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeEpisodeCommit', payload)
      resolve()
    })
  },
  updateEpisodeAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('updateEpisodeCommit', payload)
      resolve()
    })
  }
}
