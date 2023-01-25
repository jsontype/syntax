export default {
  SET_NEWS(state, news) {
    state.news = news
  },
  SET_ASK(state, ask) {
    state.ask = ask
  },
  DELETE_ASK(state, id) {
    const index = state.ask.findIndex((item) => item.id === id)
    state.ask.splice(index, 1)
  },
  DELETE_NEWS(state, id) {
    const index = state.news.findIndex((item) => item.id === id)
    state.news.splice(index, 1)
  },
}
