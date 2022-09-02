/*
    [비동기, 동기]

    1. JavaScript는 동기식 언어이다.
        자바스크립트는 한 번에 하나의 작업을 수행한다.        
        이러한 동작을 단일 스레드(싱글 스레드), 동기(Synchronous)라고 부른다.
        그러나 JavaScript에서도 힙, 스택, 큐를 이용해 비동기 처리가 가능하다.

    1. 동기
        한 작업이 실행되는 동안 다른 작업은 멈춰 기다리고, "실행된 순서"대로 실행한다.
        JS에서는 Heap에서 변수, 함수등의 값을 담고, "실행된 순서"대로 Que에 올린 다음 Stack이 비었을 때 올려서 한줄씩 실행한다.

    1. 비동기
        한 작업이 실행되는 동안 다른 작업도 실행되고, "먼저 로딩된 순서"대로 실행한다.
        JS에서는 Heap에서 변수, 함수등의 값을 담고, "먼저 로딩된 순서"대로 Que에 올린 다음 Stack이 비었을 때 올려서 한줄씩 실행한다.

    * 테스트시, 아래 fetch 비동기 로직은 브라우저에서 열어서 실행해야하므로 주의!
*/

// 비동기 : 분명 동기보다 먼저 실행되지만 로딩 시간 동안 Que에 올라가므로 아래 동기처리보다 나중에 실행된다.
function getMovie (url) {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json.data.movies)
        })   
}
getMovie('https://yts.mx/api/v2/list_movies.json')

// 동기 : 아래의 출력 결과를 확인해보면 순서대로 "hi", "hello", "bye"가 찍히는 것을 확인할 수 있다.
console.log("hi")
console.log("hello")
console.log("bye")
