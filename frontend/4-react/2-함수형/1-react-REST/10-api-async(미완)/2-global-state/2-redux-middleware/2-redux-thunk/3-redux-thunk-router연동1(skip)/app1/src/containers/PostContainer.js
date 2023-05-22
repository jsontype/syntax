import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../modules/posts'
import Post from '../components/Post'

// 아래 파라미터 postId 값은 App.js에 적용된 라우터의 URL 파라미터(/:id)에서 props로 받아올 것이다.
function PostContainer ({ postId }) {
    const { data, loading, error } = useSelector(state => state.posts.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(postId))
    }, [postId, dispatch])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return <Post post={data} />
}

export default PostContainer
