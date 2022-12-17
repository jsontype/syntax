// thunk -> saga로 변경하기 : saga를 사용하면 순수 액션 객체만을 디스패치해서 비동기 작업을 처리하게 된다.
// api/posts.js 안의 모든 함수들을 임포트
import * as postsAPI from '../api/posts'
// lib/asyncUtils 안의 리팩토링용 함수들을 임포트
import {
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById,
    createPromiseSaga,
    createPromiseSagaById
} from '../lib/asyncUtils'
import { takeEvery } from 'redux-saga/effects'

// 액션타입
const GET_POSTS = 'GET_POSTS' // 포스트 여러개 조회 => 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패
const GET_POST = 'GET_POST' // 포스트 한개 조회 => 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR' // 요청 실패

// 액션타입함수를 Thunk 함수에서 Saga 함수로 대체한다.
export const getPosts = () => ({ type: GET_POSTS })
export const getPost = id => ({ type: GET_POST, payload: id, meta: id }) // payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
// ↑ meta를 통해 id를 알아야하는 이유는, 이전에 만들었던 handleAsyncActionsById를 호환시키기 위한 용도이다. (사용하지 않는다면 meta를 생략해도 된다.)

// getPostsSaga와 getPostSaga 함수를 asyncUitls.js에서 정의된 함수로 생성
// redux-thunk로 구현할 때에는 getPosts와 getPost는 thunk 함수이지만,
// redux-saga로 구현할 때에는 순수 액션 객체를 반환하는 "액션 생성" 함수이다.
const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts)
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById)
// ↑ getPostSaga의 경우엔 액션을 파라미터로 받아와서 해당 액션의 id값을 참조할 수 있다.
// ↑ 예를 들어, dispatch({ type: GET_POST, payload: 1, meta: 1 })이란 코드가 실행 되면 액션에서 action.payload값을 추출하여 API를 호출 할 때 인자로 넣어서 호출한다.

// saga 함수들을 합치기 : 이후 modules/index.js의 rootSaga에 postsSaga를 등록할 것이다.
export function* postsSaga () {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_POST, getPostSaga)
}

// 초기값 : 여기도 반복되는 코드를 initial() 함수를 사용해서 리팩토링한다.
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

// ★ 리듀서
export default function posts (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action)
        default:
            return state
    }
}

// 홈으로 돌아가는 thunk 함수 : navigate 함수는 컨테이너에서 디스패치하면서 프롭으로 넘겨받을 예정이다.
export const goToHome = (navigate) => (dispatch, getState) => {
    navigate("/")
}
