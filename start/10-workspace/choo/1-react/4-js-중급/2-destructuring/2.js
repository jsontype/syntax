// 비구조화할당 (destructuring)

const a = [2, 4, 8, 32]
const [first, , , last] = a
console.log(first, last) // 2 32

const b = { id: "asdf", pw: 1234, email: "test@test.com" }
// const id = b.id
// const pw = b.pw
// const email = b.email
const { id, pw, email } = b
// const myId = b.id
// const myPw = b.pw
// const myEmail = b.email
const { id: myId, pw: myPw, email: myEmail } = b

// const [a, setA] = useState([1, 2, 3]) : 이것도 비구조화할당이다.
