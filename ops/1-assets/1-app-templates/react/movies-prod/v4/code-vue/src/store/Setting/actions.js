export default {
  authUserAction (context, payload) {
    context.commit('authUserCommit', payload)
  },
  miniSidebarAction (context, payload) {
    return new Promise((resolve, reject) => {
      if (context.state.miniSidebarMenu) {
        context.commit('miniSidebarCommit', false)
        resolve(false)
      } else {
        context.commit('miniSidebarCommit', true)
        resolve(true)
      }
    })
  },
  activePageAction (context, payload) {
    context.commit('activePageCommit', payload)
  }
}
