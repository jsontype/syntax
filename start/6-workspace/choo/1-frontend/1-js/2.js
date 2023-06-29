// 얉은 복사, 깊은 복사

// 값 참조
// let a = 1
// let b = a
// a = 3
// console.log(b)

// 주소 참조 : 주소를 참조하기 때문에, 얉은 복사와 깊은 복사를 구분해야 된다.
const a = [1, 2, 3] // 동대문구 1-1번지(주소)에 가족 셋(값)이 산다.
const b = a // (얉은 복사 : 주소만 복사)
a.pop() // [1, 2] // 동대문구 1-1번지에 가족이 둘이 되어있어요.
console.log(b) // [1, 2] // 동대문구 1-1번지에는 가족이 몇명이 있을까요?
console.log(a)
const c = JSON.parse(JSON.stringify(a)) // (깊은 복사 : 주소가 가리키는 값까지 복사)
a.pop() // [1, 2] // 동대문구 1-1번지에 가족이 하나가 되어있어요.
console.log(a)
console.log(c)

const obj1 = {
  no: 123,
  id: "abcd",
  pw: "abcd1234",
  name: "yang",
  premium: true,
}
const obj2 = obj1 // 얉은 복사
obj1.pw = "abcd12345"
console.log(obj2) // "abcd12345"
const obj3 = JSON.parse(JSON.stringify(obj1)) // 깊은 복사
obj1.pw = "abcd1234567899999"
console.log(obj3)
