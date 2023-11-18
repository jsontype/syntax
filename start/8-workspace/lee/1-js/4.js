// 배열
const arr = [1, 2, 3, 4, 5]
// 객체
const obj = { id: 'yang123', pw: '3qeklfew12' }

// 딮카피와 동시에 추가
const newArr = [...arr, 6]
const newObj = { ...obj, email: 'test@test.com' }

// 딮카피와 동시에 수정
const modArr = arr.map((item, index) => { return index === arr.length - 1 ? 999 : item })
const modObj = { ...obj, pw: 'zzzz1234' }

// 딮카피와 동시에 삭제
const delArr = arr.filter((item, index) => { return index !== arr.length - 1 })
const delObj = (({ email, ...delObj }) => delObj)(obj)
