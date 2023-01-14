import axios from "axios"

export default {
  FETCH_NEWS({ commit }) {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then((res) => {
      const news = res.data
      commit("SET_NEWS", news)
    })
  },

  FETCH_ASK({ commit }) {
    axios.get("https://api.hnpwa.com/v0/ask/1.json").then((res) => {
      const ask = res.data
      commit("SET_ASK", ask)
    })
  },

  FETCH_NEWS_DETAIL({ commit }, id) {
    axios.get(`https://api.hnpwa.com/v0/item/${id}.json`).then((res) => {
      const newsDetail = res.data
      commit("SET_NEWS_DETAIL", newsDetail)
    })
  },
}
