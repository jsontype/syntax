// 비구조화 할당 : Destructuring

// 1. Array Destructuring : [0].. [3].. 인덱스대로 변수명 지정해서 값 설정
const a = ["yang", "kang", "shin", "kim"]
const [user1,,,user4] = a
// const user1 = a[0]
// const user4 = a[3]
console.log(user1, user4) // "yang kim"

// 2. Object Destructuring
const b = {
    id: "yang",
    pw: "sflkjadwf",
    user: "yangdh"
}
const { id, user } = b
// const id = b.id
// const user = b.user
console.log(id, user) // "yang yangdh"
