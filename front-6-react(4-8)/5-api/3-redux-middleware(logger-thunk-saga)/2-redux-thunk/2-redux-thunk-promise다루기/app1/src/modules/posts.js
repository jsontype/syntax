/* 
    [프로미스를 다루는 리덕스 모듈 만들기]

    * 프로미스를 다루는 리덕스 모듈을 다룰 때의 고려사항은 다음과 같다.
        1. 액션타입 생성 : 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경해주어야 한다.
        2. 액션타입함수 생성 : 각 프로미스(posts, post)마다 각각 다른 thunk 함수를 만들어주어야 한다.
        3. 리듀서 생성: 프로미스가 시작, 성공, 실패했을때 각각 다른 액션을 디스패치 해야 한다.
*/

// api/posts.js 안의 모든 함수들을 임포트
import * as postsAPI from '../api/posts'
// lib/asyncUtils 안의 리팩토링용 함수들을 임포트
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions
} from '../lib/asyncUtils'

// 액션타입
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS' // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패
// 포스트 하나 조회하기
const GET_POST = 'GET_POST' // 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR' // 요청 실패

// ★ 액션타입함수를 Thunk 함수로 대체 : 액션타입함수를 생성하는 대신 Thunk 함수를 생성한다. 
// lib/asyncUtils.js를 createPromiseThunk() 함수를 통해 심플하게 중복제거 리팩토링 된 코드이다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById)

// ★ 초기값 : 초기값를 asyncUtils 함수를 통해 생성하기
// lib/asyncUtils.js의 initial() 함수를 통해 심플하게 중복제거 리팩토링 된 코드이다.
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
            // return handleAsyncActions(GET_POSTS, 'posts')(state, action) // 아래 리턴과 동일하다.
            const postsReducer = handleAsyncActions(GET_POSTS, 'posts')
            return postsReducer(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            // return handleAsyncActions(GET_POST, 'post')(state, action) // 아래 리턴과 동일하다.
            const postReducer = handleAsyncActions(GET_POST, 'post')
            return postReducer(state, action)
        default:
            return state
    }
}
