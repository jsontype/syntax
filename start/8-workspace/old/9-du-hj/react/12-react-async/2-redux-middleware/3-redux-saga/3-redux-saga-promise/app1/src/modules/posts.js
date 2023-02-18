import * as api from "../api/posts"

import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "./../lib/asyncUtils"
import { takeEvery } from "redux-saga/effects"

// 액션타입
const GET_POSTS = "GET_POSTS" // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS" // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR" // 요청 실패
const GET_POST = "GET_POST" // 요청 시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS" // 요청 성공
const GET_POST_ERROR = "GET_POST_ERROR" // 요청 실패

// 액션생성함수
export const getPosts = () => ({ type: GET_POSTS })
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id }) // payload는 파라미터로 쓸거고, meta는 리듀서의 id로 쓸 거다.

// Saga 생성함수를 통해서 saga 함수 생성
const getPostsSaga = createPromiseSaga(GET_POSTS, api.getPosts)
const getPostSaga = createPromiseSagaById(GET_POST, api.getPostById)

// 루트 사가
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga)
  yield takeEvery(GET_POST, getPostSaga)
}

// 초기값
const init = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
}

// 리듀서
export default function posts(state = init, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, "posts")
      return postsReducer(state, action)
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActionsById(GET_POST, "post")
      return postReducer(state, action)
    default:
      return state
  }
}

// // 홈 복귀 함수
// export const goToHome = (navigate) => (dispatch, getState) => {
//   navigate("/")
// }
