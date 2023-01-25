const a = [1, 2, 3]
const b = JSON.parse(JSON.stringify(a)) // 옛날 값 복사
const c = [...a] // 최신 값 복사 : spreading 문법
