// Array 비구조화 할당
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [first, , , , , , , , last] = a
console.log("first: ", first)
console.log("last: ", last)

// Object 비구조화 할당
const b = { id: "yang", username: "d.yang", gender: "male" }
const { id, username } = b // 변수명을 키값과 일치해서 할당
const { id: myId, username: myUsername } = b // 변수명 다른 이름으로 할당
console.log("id: ", id)
console.log("username: ", username)
console.log("myId: ", myId)
console.log("myUsername: ", myUsername)
