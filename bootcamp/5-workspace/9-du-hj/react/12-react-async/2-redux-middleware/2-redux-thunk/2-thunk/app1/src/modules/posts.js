import * as api from "../api/posts";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "./../lib/asyncUtils";

// 액션타입
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패
const GET_POST = "GET_POST"; // 요청 시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS"; // 요청 성공
const GET_POST_ERROR = "GET_POST_ERROR"; // 요청 실패

// 액션생성함수 -> Thunk생성함수로 대체
export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);
export const getPost = createPromiseThunk(GET_POST, api.getPostById);

// 초기값
const init = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리듀서
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
      const postReducer = handleAsyncActions(GET_POST, "post");
      return postReducer(state, action);
    default:
      return state;
  }
}
