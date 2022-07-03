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
    }
}
