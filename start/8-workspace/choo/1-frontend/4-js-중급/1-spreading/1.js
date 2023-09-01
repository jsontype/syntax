// 얉은 복사 : 주소만 복사
// let a = [1, 2, 3, 4, 5]
// let b = a
// a[0] = 999
// console.log(b[0]) // 999

// Spreading 문법으로 깊은 복사하기 : 배열
// let a = [1, 2, 3, 4, 5]
// let b = [...a]
// a[0] = 999
// console.log(b[0]) // 1

// Spreading 문법으로 깊은 복사하기 : 객체
// let a = { id: "asdf", pw: 1234 }
// let b = { ...a }
// a.pw = 9999
// console.log(b.pw) // 1234

// 리액트는 불변성의 법칙을 지켜야 한다.
// 불변성의 법칙 : 변수를 직접 수정하지 않는 것
// 불변성의 법칙 지키는 방법 : useState 등을 사용한다.
// let a = 1
// a = 3
// const b = [1, 2, 3]
// const c = [1, 2, 3, 4] // b = [1, 2, 3, 4] // 이렇게 직접 수정하면 안된다.

const [a, setA] = useState({ id: "asdf", pw: 1234 })
setA({ ...a, email: "test@test.com" }) // 추가
setA({ ...a, pw: 9999 }) // 수정
const { pw, ...result } = a // 삭제1 : const { 삭제할 키, ...result } = 기존 객체 이름
setA(result) // 삭제2 : result를 setA에 넣어준다.

const [b, setB] = useState([1, 2, 3])
setB([...b, 4]) // 추가 : b.push(4) X
setB(
  b.map((item, index) => {
    return index === b.length - 1 ? 9999 : item
  })
) // 수정 : 마지막 인덱스의 값을 9999로 변경
setB(
  b.filter((item, index) => {
    return index !== b.length - 1
  })
) // 삭제 : 마지막 인덱스 삭제
