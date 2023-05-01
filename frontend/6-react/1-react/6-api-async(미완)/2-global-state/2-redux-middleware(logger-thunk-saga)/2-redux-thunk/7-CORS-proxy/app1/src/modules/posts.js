// api/posts.js 안의 모든 함수들을 임포트
import * as postsAPI from '../api/posts'
// lib/asyncUtils 안의 리팩토링용 함수들을 임포트
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../lib/asyncUtils'

// 액션타입
const GET_POSTS = 'GET_POSTS' // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패
const GET_POST = 'GET_POST' // 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR' // 요청 실패

// 액션타입함수를 Thunk 함수로 대체한다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts) // createPromiseThunkById 사용을 추가한다.
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById)

// 초기값을 asyncUtils 함수를 통해 생성한다.
const initialState = {
    posts: reducerUtils.initial(),
    post: {}
}

// ★ 리듀서
export default function posts (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            const postsReducer = handleAsyncActions(GET_POSTS, 'posts')
            return postsReducer(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            const postReducer = handleAsyncActionsById(GET_POST, 'post') // handleAsyncActionsById 사용을 추가한다.
            return postReducer(state, action)
        default:
            return state
    }
}

// 1. 홈으로 돌아가는 thunk 함수를 만든다. navigate 함수는 컨테이너에서 디스패치하면서 프롭으로 넘겨받을 예정이다.
export const goToHome = (navigate) => (dispatch, getState) => {
    // 지금은 단순히 다른 작업을 하지 않고 바로 홈으로 이동하게끔 했지만, 
    // 실제 프로젝트에서는 getState() 를 사용하여 현재 리덕스 스토어의 상태를 확인하여 조건부로 이동을 하거나,
    // 특정 API를 호출하여 성공했을 시에만 이동을 하는 형식으로 구현을 할 수 있다.
    navigate("/")
}
