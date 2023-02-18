import React from "react"
import PostList from "../components/PostList"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../modules/posts"

export default function PostListContainer() {
  // state 조회
  // const data = useSelector((state) => state.posts.posts.data);
  // const loading = useSelector((state) => state.posts.posts.loading);
  // const error = useSelector((state) => state.posts.posts.error);
  const { data, loading, error } = useSelector((state) => state.posts.posts)

  // action 조회
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  if (error) return <div>에러발생</div>
  if (loading) return <div>로딩중...</div>
  if (!data) return <div>데이터 없네...</div>

  return <PostList posts={data} />
}
