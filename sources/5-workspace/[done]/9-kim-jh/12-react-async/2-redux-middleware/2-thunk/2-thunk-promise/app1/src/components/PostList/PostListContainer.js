import React, { useEffect } from "react";

import PostList from "./PostList";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../modules/posts";

export default function PostListContainer() {
  // state 조회
  const { data, loading, error } = useSelector((state) => state.posts.posts);

  // action 조회
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생하였습니다!</div>;
  if (!data.length) return <div>데이터가 없습니다.</div>;

  return <PostList posts={data} />;
}
