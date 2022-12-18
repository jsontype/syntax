export default {
    SET_NEWS (state, news) {
        state.news = news
    },
    SET_ASK (state, ask) {
        state.ask = ask
    },
    DELETE_ASK (state, id) {
        const index = state.ask.findIndex(v => v.id === id)
        console.log('Target Index: ', index)
        state.ask.splice(index, 1) // splice(index, 1) : index로부터 1개를 지운다.
    },
    ADD_NEWS (state, payload) { // payload 라는 이름을 주로 사용한다.
        state.news.push(payload) // 뒤에 추가된다.
        // state.news.unshift(payload) // 앞에 추가된다.
    },
    UPDATE_ASK (state, payload) {
        const index = state.ask.findIndex(v => v.id === payload.id)
        state.ask[index].title = payload.title
    },
    SET_NEWS_DETAIL (state, payload) {
        state.newsDetail = payload
    }
}