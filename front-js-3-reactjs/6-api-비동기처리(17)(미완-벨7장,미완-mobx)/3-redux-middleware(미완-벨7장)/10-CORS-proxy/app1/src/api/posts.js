/*
    package.json에서 Webpack DevServer proxy를 http://localhost:4000로 설정한 다음에는, 
    api/posts.js 파일을 열어서 http://localhost:4000/posts 대신에 /posts URL로 요청을 하도록 하면 된다.
*/

// axios 임포트 : REST API Client
import axios from 'axios'

// post 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    const response = await axios.get('/posts')
    return response.data
}

// ID로 post를 조회하는 비동기 함수
export const getPostById = async id => {
    const response = await axios.get(`/posts/${id}`)
    return response.data
}
