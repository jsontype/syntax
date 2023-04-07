// [중급반복문]

const user1 = {
  id: "yang12",
  name: "yang",
  pw: "sdkahgk",
  email: "test@test.com",
}
const user2 = {
  id: "14sadf",
  name: "kim",
  pw: "123",
  email: "123@test.com",
}

let user = [user1, user2]

// for (let i = 0; i < user.length; i++) {
//   console.log(user[i].id)
// }

// 배열고차함수 forEach은, 리턴값이 없을 때 사용한다.
user.forEach((item) => {
  console.log(item.id)
})

// 배열고차함수 map은, 리턴값이 있을 때 사용한다.
const result1 = user.map((item) => {
  return item.id
})
console.log(result1)

// 배열고차함수 filter는, 리턴값이 "걸러진 배열"일 때 사용한다.
const result2 = user.filter((item) => {
  return item.id === "yang12"
})
console.log(result2)
