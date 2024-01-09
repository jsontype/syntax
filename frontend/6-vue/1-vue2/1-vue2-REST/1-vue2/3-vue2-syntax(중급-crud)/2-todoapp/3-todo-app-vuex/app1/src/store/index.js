import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

    // todo와 user 모듈을 등록해준다.

    modules: {
        // todo: todo,
        // user: user 
        // vuex 최신은 아래와같이 써도 된다.
        todo,
        user
    }
})