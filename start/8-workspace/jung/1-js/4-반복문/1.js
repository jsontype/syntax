// Loop

// for (인덱스 초기값 선언; 실행 조건; 실행후 인덱스의 증가 처리) {
//   실행하고 싶은 명령
// }
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i)
// }

const a = [1, 2, 3, 4, 5]

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

// 질문: a의 배열의 값들 중에서, 3 이상인 것만 콘솔로그에 표시하라.
for (let i = 0; i < a.length; i++) {
  if (a[i] >= 3) {
    console.log(a[i])
  }
}
