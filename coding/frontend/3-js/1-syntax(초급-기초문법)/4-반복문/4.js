// 반복문
let a = [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
  console.log(i, "번째 인덱스의 값: ", a[i])
}

for (let i = 0; i < a.length; i++) {
  if (a[i] > 3) {
    console.log(a[i])
  }
}

// break 와 continue : 반복문 안에서는 break와 continue를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있다.
for (let i = 0; i < 10; i++) {
  // continue : 다음 루프를 실행
  // i가 2일땐 continue 를 하여 원래 console.log를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어간다.
  if (i === 2) continue
  console.log(i)
  // break : 반복문을 끝내기
  // i가 5일땐 break 를하여 반복문을 종료시킵니다.
  if (i === 5) break
}

// // 배열을 위한 반복문 for...of : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
// const arr = [10, 20, 30, 40, 50]
// for (let item of arr) {
//     console.log(item)
// }

// // 객체를 위한 반복문 for...in : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
// const doggy = {
//     name: '멍멍이',
//     sound: '멍멍',
//     age: 2
// }
// for (let key in doggy) {
//     console.log(`${key}: ${doggy[key]}`)
// }
