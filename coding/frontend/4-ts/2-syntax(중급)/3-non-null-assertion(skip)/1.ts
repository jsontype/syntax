// Non-null assertion (!.): !.는 null 또는 undefined일 경우를 무시하고, 해당 값이 항상 있다고 단언한다.
// 이를테면, value!.submit은 value가 null 또는 undefined인지 여부를 확인하지 않고 submit을 호출한다.
// 그러나, 코드 실행 중에 값이 실제로 null이 될 경우, 런타임 상에는 오류가 발생할 수 있으므로 일반적으로는 사용하지 않는다!

const nonNullishName = null! // null이지만, !.를 통해 컴파일러에게 null이 아니라고 알려줌
const nonNullishAge = undefined! // undefined이지만, !.를 통해 컴파일러에게 undefined가 아니라고 알려줌
const nonNullishJob = "Frontend Developer"! // "Frontend Developer"는 null 또는 undefined가 아니므로 그대로 반환
const nonNullishAddress = null! // null이지만, !.를 통해 컴파일러에게 null이 아니라고 알려줌
const nonNullishHobbies = undefined! // undefined이지만, !.를 통해 컴파일러에게 undefined가 아니라고 알려줌
const nonNullishText = ""! // ''는 null 또는 undefined가 아니므로 그대로 반환
const nonNullishNumber = 0! // 0은 null 또는 undefined가 아니므로 그대로 반환
const nonNullishBoolean = false! // false는 null 또는 undefined가 아니므로 그대로 반환

console.log(nonNullishName) // null

const obj1 = { city: "Seoul", country: "Korea", region: "Asia" }
const obj2 = { city: "Tokyo", country: "Japan", region: "Asia" }
const nonNullishCity = obj1!.city // obj1는 null 또는 undefined가 아니므로 그대로 반환
const nonNullishCountry = obj2!.country // obj2는 null 또는 undefined가 아니므로 그대로 반환
// const nonNullishRegion = obj3!.city // obj3은 null 또는 undefined 이므로 런타임 오류 발생

console.log(nonNullishCity) // Seoul
