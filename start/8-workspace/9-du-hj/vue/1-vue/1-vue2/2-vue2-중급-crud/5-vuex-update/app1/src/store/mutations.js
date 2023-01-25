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
  CREATE_NEWS(state, payload) {
    state.news.unshift(payload) // push는 배열 뒤에, unshift는 앞에 추가
  },
  CREATE_ASK(state, payload) {
    state.ask.unshift(payload) // push는 배열 뒤에, unshift는 앞에 추가
  },
  UPDATE_ASK(state, payload) {
    const index = state.ask.findIndex((item) => item.id === payload.id)
    state.ask[index].title = payload.title
  },
  UPDATE_NEWS(state, payload) {
    const index = state.news.findIndex((item) => item.id === payload.id)
    state.news[index].title = payload.title
  },
}
