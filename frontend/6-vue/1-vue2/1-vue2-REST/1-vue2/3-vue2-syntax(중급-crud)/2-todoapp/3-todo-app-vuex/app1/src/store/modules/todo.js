export default {
    // 모듈 네임스페이스를 사용하기 위함
    namespaced: true,

    // state, mutations, actions, getters를 store/index.js로부터 가져온다.

    // App.vue를 state로 옮겨서 관리해보도록 합시다.
    // state:는 vue파일 안의 data:와 비슷합니다. 
    // (바뀐) 데이터가 들어가는 부분입니다.
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
        ],

    },
    // 데이터를 실질적으로 쓸 수 있게 바꿔주는 부분
    // Vuex에서, state에 있는 데이터를 변경하고 싶으면,
    // mutations 안에서 사용하는 것이 규칙입니다.
    // 아래의 메소드들은 전부 App.vue에서 가져옵니다.
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
        }
    },
    // methods:와 비슷, 함수(메소드)가 들어가서 비동기적인 일을 처리하는 부분
    // setTimeout: 비동기로 실행시 여기가 실행
    // axios: 요쳥을 보내는 라이브러리, 프로미스로 요청을 받고 응답이 오면 그 때, 
        // "그 이하의 것들을 미리 실행하면서" axios.get의 응답오면 그때부터서야
        // .then이하의 코드가 실행되어 res.data를 처리함
    actions: {
        addTodo({ commit }, value) {
            setTimeout(function () {
                commit('ADD_TODO', value)
            }, 500) // 500: 0.5초뒤에 실행
        },
        toggleTodo({ commit }, payload) { // payload: 보통 데이터를 페이로드라고 많이 함
            setTimeout(function () {
                commit('TOGGLE_TODO', payload)
            }, 500)
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId)
            }, 500)
        },
    },
    // computed:와 비슷
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length
        }
    }
}