// Nullish coalescing (??) : ??는 널리 사용되는 연산자로, null 또는 undefined인 경우에만 오른쪽 피연산자를 반환한다.
const nullishName = null ?? "Kim" // null이므로 "Kim" 반환
const nullishAge = undefined ?? 23 // undefined이므로 23 반환
const nullishJob = "Frontend Developer" ?? "Backend Developer" // "Frontend Developer" 반환
const nullishAddress = null ?? { city: "Seoul" } // null이므로 { city: "Seoul" } 반환
const nullishHobbies = undefined ?? ["Reading", "Coding"] // undefined이므로 ["Reading", "Coding"] 반환
const nullishText = "" ?? "default string" // ''는 falsy한 값이므로 'default string' 반환
const nullishNumber = 0 ?? 23 // 0은 falsy한 값이므로 23 반환
const nullishBoolean = false ?? true // false는 falsy한 값이므로 true 반환

console.log(nullishName) // Kim
