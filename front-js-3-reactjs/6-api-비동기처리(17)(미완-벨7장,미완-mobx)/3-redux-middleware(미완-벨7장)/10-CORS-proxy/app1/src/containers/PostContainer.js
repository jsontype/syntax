import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, goToHome } from '../modules/posts'
import Post from '../components/Post'
// 2. useNavigate()를 임포트한다.
import { useNavigate } from "react-router-dom"

function PostContainer ({ postId }) {
    const { data, loading, error } = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null
    }
    const dispatch = useDispatch()
    // 3. useNaviagte()를 가져와, naviagte()에 담는다.
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch, postId])

    if (loading && !data) return <div>로딩중...</div> // 로딩중이고 데이터 없을때만
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return (
        <>
            {/* 4. thunk 함수인 goToHome()를 dispatch하는 곳에, naviagte()를 프롭으로 넘긴다. */}
            <button onClick={() => dispatch(goToHome(navigate))}>홈으로 이동</button>
            <Post post={data} />
        </>
    )
}

export default PostContainer
