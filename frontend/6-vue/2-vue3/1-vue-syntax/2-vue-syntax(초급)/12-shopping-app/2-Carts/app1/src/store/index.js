import { createStore } from 'vuex'

// 스토어의 선언
export default createStore({
  // 1. 변수의 선언
  state() {
    return {
      cartItem: [],
      // 여기에 계속 변수를 추가할 수 있음
      // user: {
      //   name: '김철수',
      //   age: 30
      // },
      // team: '회계',
      // ...
    }
  },
  // 2. 변수를 변경하는 로직
  mutations: {
    addToCart(state, payload) {
      state.cartItem.push(payload)
    },
    increment(state) {
      state.cartItem.count++
    }
  },
  // 3. 변수를 변경하는 로직을 불러오는 함수
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    increment({ commit }) {
      commit('increment')
    }
  },
  // 4. 변수의 값을 가져오는 함수
  getters: {
    cartItem: state => state.cartItem
  }
})
