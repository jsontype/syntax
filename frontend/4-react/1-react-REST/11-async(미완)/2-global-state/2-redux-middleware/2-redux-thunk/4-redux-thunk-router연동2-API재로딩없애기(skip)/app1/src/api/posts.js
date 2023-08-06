// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n))

// 더미 post 목록 데이터
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.'
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!'
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅시다',
        body:
            '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.'
    }
]

// post 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(500) // 0.5초 쉬고
    return posts // posts 배열을 리턴한다.
}

// ID로 post를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(500) // 0.5초 쉬고
    return posts.find(post => post.id === id) // id가 일치하는 post를 반환한다.
}
