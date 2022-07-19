const user1 = { id: "yang", pw: "1234" }
// const user1New = user1
// const user1New = JSON.parse(JSON.stringify(user1))
user1.pw = "5555"

// 객체 변경
const user1New = { ...user1, pw: "2345"}
// 객체 추가
const user1Add = { ...user1, name: "Shin" }
// 객체 삭제
const { pw, ...user1Delete } = user1

console.log(user1Delete)

const todos = [
    {
      id: 1,
      text: '할 일 #1',
      done: true
    },
    {
      id: 2,
      text: '할 일 #2',
      done: false
    }
]

// 배열 추가
const todosAdd = [ ...todos, { id: 3, text: '할일', done: false } ]
const todosAdd2 = todos.concat({ id: 3, text: '할일', done: false })
// 배열 삭제 : id = 2인 것을 삭제
const todosDelete = todos.filter((item) => { return item.id !== 2 })
// 배열 변경 : id = 2번의 done을 토글링
const todosChange = todos.map((item) => { return (item.id === 2) ? { ...item, done: true } : item })
