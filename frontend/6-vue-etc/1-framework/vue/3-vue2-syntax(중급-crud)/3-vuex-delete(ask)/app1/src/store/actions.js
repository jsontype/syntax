import axios from "axios"

export default {
    FETCH_NEWS ({ commit }) {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
            .then((response) => {
                console.log(response.data)
                commit('SET_NEWS', response.data)
            })
    },
    FETCH_ASK ({ commit }) {
        axios.get('https://api.hnpwa.com/v0/ask/1.json')
            .then((response) => {
                console.log(response.data)
                commit('SET_ASK', response.data)
            })
    }
}
