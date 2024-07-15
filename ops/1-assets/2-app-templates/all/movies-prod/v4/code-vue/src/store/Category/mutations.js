export default {
  addCategoryCommit (state, data) {
    state.categoryList.push(data)
    localStorage.setItem('categoryList', JSON.stringify(state))
  },
  removeCategoryCommit (state, data) {
    const category = state.categoryList.find(categoryList => categoryList.id === data.id)
    if (category !== undefined) {
      state.categoryList.splice(state.categoryList.indexOf(data), 1)
    }
  },
  updateCategoryCommit (state, data) {
    const record = state.categoryList.find(categoryList => categoryList.id === data.id)
    state.categoryList[record] = data
  }
}
