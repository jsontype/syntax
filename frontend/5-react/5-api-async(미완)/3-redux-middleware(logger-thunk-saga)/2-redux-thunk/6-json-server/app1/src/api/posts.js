// axios 임포트 : REST API 문법(get, post, put, delete)으로 API를 요청하는 라이브러리
import axios from 'axios'

// post 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts')
    return response.data
}

// ID로 post를 조회하는 비동기 함수
export const getPostById = async id => {
    const response = await axios.get(`http://localhost:4000/posts/${id}`)
    return response.data
}
