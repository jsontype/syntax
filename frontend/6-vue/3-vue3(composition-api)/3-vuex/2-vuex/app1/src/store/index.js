import { createStore } from 'vuex'

// 스토어의 선언
export default createStore({
  // 1. 변수의 선언
  state() {
    return {
      count: 0,
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
    increment(state) {
      state.count++
    }
  },
  // 3. 변수를 변경하는 로직을 불러오는 함수
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  // 4. 변수의 값을 가져오는 함수
  getters: {
    count: state => state.count
  }
})
