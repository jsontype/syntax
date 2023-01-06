// let a = 1
import App from './../../../8-react-ts/6-movieapp/app1/src/App';
// a = a.toString()
// console.log(typeof a)
// let b = [1, 2, 3, 4, 5]
// console.log(b)
// a. b. 눌러서 나오는 거 다 "프로토타입 함수" 배열, 객체 프로토타입 함수들은 다 알아두면 좋다.

// 값 참조
let a = 1
let b = a
a = 2
console.log(b) // b = 1

// 주소참조 : 배열, 객체, 함수
const arr1 = [1, 2, 3, 4, 5] // arr1는 오쿠보 2-19
const arr2 = arr1 // arr2는 오쿠보 2-19
// 질문 : 값 참조처럼 값만 복사한 새로운 주소로 만드는 방법은??
const arr3 = JSON.parse(JSON.stringify(arr1)) // arr3은 오쿠보 2-19랑 똑같은 레벨들이 복제되서 살고있는 오쿠보 3-24

arr1[0] = 9999 // 오쿠보 2-19에 5자리 의자중 첫번째 자리에 레벨 9999짜리가 들어왔다.
console.log(arr2[0]) // arr2[0] = 9999 //  오쿠보 2-19에 5자리 의자중 첫번째 자리에 누가 있게? 9999
console.log(arr3[0]) // arr3[0] = 1 // 오쿠보 3-24에 5자리 의자중 첫번째 자리에 누가 있게? 1

arr3.push(6)



// 객체도 같은 느낌
const obj1 = { id: 'yang', pw: 'sdaflkj' }
const obj2 = obj1
const obj3 = JSON.parse(JSON.stringify(obj1))
obj1.pw = 'aaaaaa1234'
console.log(obj2.pw) // aaaaaa1234
console.log(obj3.pw) // sdaflkj
