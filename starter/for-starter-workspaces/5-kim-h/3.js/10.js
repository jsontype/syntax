// [배열 객체 중급복사 - Spreading 불변성의 법칙을 지키는 복사방법]

// 배열의 복사
const a = [1, 2, 3, 4, 5]
const b = [...a] // 복사
// const b = [...a, 6] // 추가
// const b = a.map((item, index) => { return index === 0 ? 99 : item }) // 변경
// const b = a.filter((item, index) => { return index > 0 }) // 삭제
console.log(b)

// 객체의 복사
const c = { aa: 1, bb: 2 }
const d = { ...c } // 복사
// const d = { ...c, cc: 3 } // d = { aa: 1, bb: 2, cc: 3 } // 추가
// const d = { ...c, bb: 3 } // d = { aa: 1, bb: 3 } // 변경
// const { bb, ...d } = c // d = { aa: 1 } // 삭제 : c에서 bb를 삭제한 값을 d 변수에 넣는다.

console.log(d)
