/*
    [배열객체 중급복사 - Destructuring(비구조화 할당)을 사용해 더 편하게 객체값을 가져오는 방법]

    "비구조화 할당"이라고도 한다.
    ES6의 유용한 기능중 하나로 객체로부터 보다 쉽게 값(보통은 일부의 값)을 가져올 수 있다.
    비구조화 할당 이후 값을 변경하면, 원본 값이 변하지 않는다. 즉 Deep copy기 된다.
    * 참조 : "Shallow copy" VS "Deep copy"
        Shallow copy (얉은 복사) : 주소 값을 복사한다. 이 경우 주소 값을 복사하기 때문에, 원본과 복사본이 참조하고 있는 실제 값은 같다.
        Deep copy (깊은 복사) : 실제값을 "새로운" 메모리 공간에 복사한다.     
*/

// 1. Array Destructuring : [0].. [3].. 인덱스대로 변수명 지정해서 값 설정
const arr = ["yang", "kang", "shin", "kim"]
const [user1,,,user4] = arr // arr의 배열에서, 인덱스[0]과 건너뛰어서(= ,,,) 인덱스[3]을 각각 user1, user4에 집어넣는다는 의미
console.log(user1, user4)

// 1. Object Destructuring : id.. name.. 키 이름대로 값 설정
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

// 1. Object Destructuring : myId, myName으로 키 이름 바꿔서 값 설정
// 비구조화 할당 : 아래 두 코드와 세번째 코드와 같다.
// const myId = obj.id
// const myName = obj.name
const {id: myId, userName: myName} = obj
console.log(myId, myName)
