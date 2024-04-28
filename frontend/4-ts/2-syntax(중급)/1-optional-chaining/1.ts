// Optional chaining (?.): ?.는 옵셔널 체이닝 연산자로, 값이 null 또는 undefined인 경우를 허용한다.
interface User {
  name: string
  age: number
  job: string
  // 주소는 선택적(optional)이며, 객체이지만 null을 넣을 수도 있다. address를 지정하고 null을 직접 추가하는 경우가 없다면 "| null"은 필요없다.
  address?: { city?: string } | null
  // 취미는 선택적(optional)이며, 문자열 배열이다.
  hobbies?: string[]
}

const user333: User = {
  name: "Kim",
  age: 23,
  job: "Frontend Developer",
  address: null,
  hobbies: ["Reading", "Coding"],
}

console.log(user333.address?.city) // 만약 address가 없거나 null이면 undefined를 반환
console.log(user333.job?.toUpperCase()) // 만약 job이 없거나 null이면 undefined를 반환, 있으면 대문자로 변환
console.log(user333.hobbies?.[0]) // 만약 hobbies가 없거나 null이면 undefined를 반환, 그렇지 않으면 첫 번째 취미 반환
