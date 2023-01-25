// const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n))

// const posts = [
//   {
//     id: 1,
//     title: "안녕하세요 여기 맛있어요",
//     body: "신오쿠보 맛집 소개 블라블라",
//   },
//   { id: 2, title: "좋은 글 공유", body: "어쩌고" },
//   { id: 3, title: "미용실 어디좋음?", body: "파리미용실은 절대 안됨" },
// ]

// // Posts 목록 호출
// export const getPosts = async () => {
//   await sleep(500) // 0.5초 쉬고
//   return posts
// }

// // ID로 Post를 조회하는 비동기 함수
// export const getPostById = async (id) => {
//   await sleep(500) // 0.5초 쉬고
//   return posts.find((post) => post.id === id)
// }

/*
    package.json에서 Webpack DevServer proxy를 http://localhost:4000로 설정한 다음에는, 
    api/posts.js 파일을 열어서 http://localhost:4000/posts 대신에 /posts URL로 요청을 하도록 하면 된다.
    이렇게 요청하는 주소의 도메인이 생략된 경우엔 현재 페이지의 도메인(지금의 경우 http://localhost:3000)을 가르키게 된다.
    확인 방법은, 실행 후 "Network 탭"을 보면 localhost:4000가 아닌 localhost:3000으로 요청하는 것을 볼 수 있다.
*/

// axios 임포트 : REST API Client
import axios from "axios"

// post 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  const response = await axios.get("/posts")
  return response.data
}

// ID로 post를 조회하는 비동기 함수
export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`)
  return response.data
}
