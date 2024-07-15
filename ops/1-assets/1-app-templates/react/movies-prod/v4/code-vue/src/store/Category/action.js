export default {
  addCategoryAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addCategoryCommit', payload)
      resolve()
    })
  },
  removeCategoryAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeCategoryCommit', payload)
      resolve()
    })
  },
  updateCategoryAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('updateCategoryCommit', payload)
      resolve()
    })
  }
}
