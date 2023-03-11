let arr = [1, 2, 3, 4, 5]

// 기본반복문
for (let i = 0; i < arr.length; i++) {
  console.log("arr[i] ===> ", arr[i])
}

// 중급반복문 forEach : 리턴값이 없을 때
arr.forEach((item) => console.log(item * 2))

// 중급반복문 map : 동일한 길이의 배열을 리턴할 때
const result1 = arr.map((item) => item * 2)
console.log(result1)

// 중급반복문 filter : 필터링된 길이의 배열을 리턴할 때
const result2 = arr.filter((item) => item > 2)
console.log(result2)
