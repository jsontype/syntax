// api/posts.js 안의 모든 함수들을 임포트
import { getPostsAll, getPostOne } from "../api/posts";

// lib/asyncUtils 안의 리팩토링용 함수들을 임포트
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtil.js";

/** 액션 타입 정의 */
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

/** Thunk 함수 정의 : 비동기처리 추가 (setTimeout를 사용하여 액션이 디스패치되는 것을 1초씩 딜레이시킨다.) */
export const getPosts = createPromiseThunk(GET_POSTS, getPostsAll);
export const getPost = createPromiseThunk(GET_POST, getPostOne);

/** 초기값 정의 */
const init = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

/** 리듀서 정의 */
export default function posts(state = init, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, "posts");
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActions(GET_POSTS, "posts");
      return postReducer(state, action);
    default:
      return state;
  }
}
