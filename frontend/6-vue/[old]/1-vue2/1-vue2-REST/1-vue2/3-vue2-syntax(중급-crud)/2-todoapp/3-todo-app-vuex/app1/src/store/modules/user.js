import axios from "axios"

export default {
    // 모듈 네임스페이스를 사용하기 위함
    namespaced: true,

    // state, mutations, actions를 store/index.js로부터 가져온다.

    state: {
        users: []
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
    },
    // 비동기처리
    actions: {
        // 아래 콘솔로그의 주석을 풀면 이 밑의 콘솔로그가 먼저 실행이 되고, 
        // 그 뒤에, 비동기처리가 완료된 res.data의 콘솔로그가 뜸을 알 수 있음
        getUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data)
                // console.log(res.data)
            })
        // a = 1
        // console.log(a) // 위의 콘솔로그랑 뜨는 타이밍을 비교해보기        
        },
    }


}