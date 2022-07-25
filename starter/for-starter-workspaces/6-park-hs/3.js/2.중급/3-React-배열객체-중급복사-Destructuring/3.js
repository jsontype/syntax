/*
    [배열객체 중급복사 - Destructuring]
    
    ES6의 유용한 기능중 하나로 객체로부터 보다 쉽게 값(보통은 일부의 값)을 가져올 수 있다.
    * 특히 객체쪽은 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

// 1. Array Destructuring : [0].. [3].. 인덱스대로 변수명 지정해서 값 설정
let arr = ["yang", "kang", "hwang", "kim"]
let [user1,,,user2] = arr // arr의 배열에서, 인덱스[0]과 건너뛰어서(= ,,,) 인덱스[3]을 각각 user1, user2에 집어넣는다는 의미
console.log(user1, user2)

// 1. Object Destructuring : id.. name.. 키 이름대로 변수명 지정해서 값 설정
let obj = {
    id: "yang123",
    pw: "1324yasdf",
    name: "yang"
}
let {id, name} = obj // 리액트에서 자주 씀
console.log(id, name)

// 1. Object Destructuring : myId.. myName.. 키 이름 바꿔서 변수명 지정해서 값 설정
let {id: myId, name: myName} = obj
console.log(myId, myName)
