import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    // App.vue를 state로 옮겨서 관리해보도록 합시다.
    // state:는 vue파일 안의 data:와 비슷합니다. 
    // (바뀐) 데이터가 들어가는 부분입니다.
    state: {
        todos: [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'play games', checked: false },        
        ],
        users: []
    },
    // 데이터를 실질적으로 쓸 수 있게 바꿔주는 부분
    // Vuex에서, state에 있는 데이터를 변경하고 싶으면,
    // mutations 안에서 사용하는 것이 규칙입니다.
    // 아래의 메소드들은 전부 App.vue에서 가져옵니다.
    // 데이타를 받을 때는 this.$store.commit('메소드명', 데이터)로 올려보내 받는다.     
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id
            })
            state.todos[index].checked = checked
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId
            })
            state.todos.splice(index, 1)
        },
        SET_USERS(state, users) {
            state.users = users
        },
    },
  // methods:와 비슷, 함수(메소드)가 들어가서 비동기적인 일을 처리하는 부분
  // 처음 데이타로 context (= { commit })이 들어가고 두번째는 payload (=data)가 들어간다.
  // 데이타를 받을 때는 this.$store.dispatch('메소드명', 데이터)로 받는다. 
    // 비동기 처리에는 두가지 방법이 있다.
        // setTimeout(context, data) (fucntion() { commit('mutation method', data) }, wait time)
        // axios.get()..then(res => { commit('mutation method', data) })
    actions: {
        // 스케쥴 추가하기 (인풋에서 엔터칠 경우)
        addTodo({ commit }, value) {
            // console.log(value) // addTodo를 실행시(화면상에서 인풋창에서 엔터) 잘 들어오는 지 처음에 확인
            // setTimeout: 비동기로 실행시 여기가 실행. 여기가 실행이 끝나야 mutatin이 실행되고 state가 변경됩니다.
            setTimeout(function () {
                commit('ADD_TODO', value)
            }, 500) // 500: 0.5초뒤에 실행 (add를 눌렀을 때 0.5초가 지나야지 commit이 발생됨)
        },
        // 체크박스 클릭해서 complete로 바꾸기
        toggleTodo({ commit }, payload) { // payload: 보통 데이터를 페이로드라고 많이 함
            setTimeout(function () {            
                commit('TOGGLE_TODO', payload)
            }, 500)
        },
        // delete 버튼 눌러서 할일 삭제하기
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId)
            }, 500)
        },
        // 유저리스트 DB(가상)로부터 받기
        getUsers({ commit }) {
            // axios: 요쳥을 보내는 라이브러리, 프로미스로 요청을 받고 응답이 오면 그 때, 
                // "그 이하의 것들을 미리 실행하면서" axios.get의 응답오면 그때부터서야
                    // .then이하의 코드가 실행되어 res.data를 처리함
                // 아래 콘솔로그의 주석을 풀면 이 밑의 콘솔로그가 먼저 실행이 되고, 
                    // 그 뒤에, 비동기처리가 완료된 res.data의 콘솔로그가 뜸을 알 수 있음
                // 현재 DB가 없으니, get('https://jsonplaceholder.typicode.com/users')로부터 가상의 유저명단을 가져왔음.
                    // http://jsonplaceholder.typicode.com/ 에서 다양한 Resources를 참조할 수 있음.
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                // DB로딩을 요청한 뒤, 응답이 완료된 다음에야 뮤테이션 메소드를 실행해 스토어를 처리
                // 비동기처리에서 이렇게 하지 않으면 무슨 일이 발생? : DB 응답처리속도가 늦을 경우 스토어와 동기화가 안됨
                commit('SET_USERS', res.data)
                // console.log(res.data)
            })
        }
    },
    // getters에 넣어서 해당 기능을 다른 컴포넌트에서도 사용할 수 있도록 함
    getters: {
        // 완료된 수 가져오기
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length
        }
    }
})
