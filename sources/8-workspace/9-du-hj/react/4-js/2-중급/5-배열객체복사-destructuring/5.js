const arr = ['yang', 'kang', 'du', 'shin']

const [a,,,b] = arr

arr[0] = 'kim'

console.log(a)
console.log(b)

const obj = {
    id: "yang123",
    pw: "1324yasdf",
    item: 1123,
    level: 123213,
    userName: "yang"
}

const { id, userName } = obj // 리액트에서 자주 씀
// let id = obj.id
// let pw = obj.pw

// console.log(obj.id) // 이런거 써도 되는데 고수되면 잘 안쓴다.
console.log(id)
console.log(userName)

// 키 이름으로 안쓰고 싶을 때 / 쓰면 안될 때 (변수명 중복 등으로)
const {id: myId, userName: myName} = obj
console.log(myId)
console.log(myName)


// 1. JS가 웹브라우저에서 동작하는 원리
//     웹브라우져는 다음과 같은 공간들이 있다.
//         Heap : i = { age: 20 }, j = { name: 'kim' } 과 같이 변수를 담아두는 공간이다.
//         대기실 : 대기시간이 끝나면, que라는 대기실로 넘겨준다.
//             대기실 보내는 코드들 : async function (ajax api 호출요청코드, io, setTimeout 등 비동기 함수들과, 이벤트리스너 함수들)
//         Que(ue) : 대기실에서 "처리가 완료된" 코드 스텝들을 줄을 세워서 Que에 세운 뒤, stack으로 하나씩 올려보내준다.
//             Que(ue) 보내는 코드들 : async function (ajax api 호출요청코드, io, setTimeout 등 비동기 함수들과, 이벤트리스너 함수들)
//             단, stack이 비어있을 때만 올려보낸다.
//         Stack : 코드를 실행해주는 곳. 단, 코드 한줄씩만 들어간다. (그래서 js는 보통 single threaded language라고 한다.)
//             즉, 여기서, setTimeout 이하의 함수는 1초 뒤에 실행을 해줘야 하기 때문에 stack에 넣지 않고 대기실로 보낸다.
