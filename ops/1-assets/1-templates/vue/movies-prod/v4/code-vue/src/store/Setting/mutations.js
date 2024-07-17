export default {

  authUserCommit (state, data) {
    state.authUser = data
  },
  miniSidebarCommit (state, data) {
    state.miniSidebarMenu = data
  },
  activePageCommit (state, data) {
    state.activePage = data
  }
}
