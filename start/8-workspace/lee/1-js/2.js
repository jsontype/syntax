// 리액트는 const로 선언한다. "불변성의 법칙"

// 1. Spreading 문법
const a = [1, 2, 3]
const b = [...a, 4] // push
const c = [0, ...a] // unshift
// a <-> b // a의 메모리주소를 휘발시키면서 그 자리에 b로 대체한다. -> a가 바뀌었다는 것을 인지!

const a2 = { id: 'abc1234', pw: '1234' } // a2 = { id: 'abc1234', pw: '1234' }
const b2 = { ...a2, name: 'Yang' } // b2 = { id: 'abc1234', pw: '1234', name: 'Yang' } // 추가
const c2 = { ...c2, pw: '5678' } // c2 = { id: 'abc1234', pw: '5678' } // 수정
const { pw, ...d2 } = a2 // d2 = { id: 'abc1234' } // 삭제
