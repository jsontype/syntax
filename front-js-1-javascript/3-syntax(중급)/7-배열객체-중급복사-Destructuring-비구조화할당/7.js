/*
    [배열객체 중급복사 - Destructuring]

    "비구조화 할당"이라고도 한다.
    ES6의 유용한 기능중 하나로 객체로부터 보다 쉽게 값(보통은 일부의 값)을 가져올 수 있다.
*/

// 1. Array Destructuring : [0].. [3].. 인덱스대로 변수명 지정해서 값 설정
const arr = ["yang", "kang", "hwang", "kim"]
const [user1,,,user4] = arr // arr의 배열에서, 인덱스[0]과 건너뛰어서(= ,,,) 인덱스[3]을 각각 user1, user4에 집어넣는다는 의미
console.log(user1, user4)

// 1. Object Destructuring : id.. name.. 키 이름대로 변수명 지정해서 값 설정
const obj = {
    id: "yang123",
    pw: "1324yasdf",
    userName: "yang"
}
// 비구조화 할당 : 아래 두 코드와 세번째 코드와 같다.
// const id = obj.id
// const name = obj.name
const {id, userName} = obj // 리액트에서 자주 씀
console.log(id, userName)

// 1. Object Destructuring : myId.. myName.. 키 이름 바꿔서 변수명 지정해서 값 설정
// 비구조화 할당 : 아래 두 코드와 세번째 코드와 같다.
// const myId = obj.id
// const myName = obj.name
const {id: myId, userName: myName} = obj
console.log(myId, myName)
