// destructuring : 비구조화 할당

// 객체
const obj = {
    id: 'yang',
    pw: 1234,
    username: 'yang',    
}
// const id = obj.id
// const pw = obj.pw
// ...
// const {id, pw, username} = obj // 간편!
// const {id: myId, pw: myPw, username: potato} = obj // 변수명 바꾸고 싶을때

// 배열
const arr = ['yang', 'kang', 'kim', 'cho']
// const [user1, user2, user3, user4] = arr
const [user1,,,user4] = arr
console.log(user1, user4)
