// Bubble Sort
// 답1: 자바스크립트로 구현한 버블 정렬
const arr = [9, 4, 2, 7, 13, 11, 13, 11, 13]
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 아래 코드의 arr.length - i - 1에서 - 1을 하는 이유: 각 외부 반복 i가 완료될 때마다 배열 끝 부분의 가장 큰 요소가 정렬되어 위치한다. 따라서 다음 반복에는 이미 정렬된 요소를 다시 비교할 필요가 없기 때문이다.
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 임시 변수를 사용한 교환
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort1(arr)) // [2, 4, 7, 9, 11, 11, 13, 13, 13]
// 답2: 고차함수를 사용한 버블 정렬
function bubbleSort2(arr) {
  arr.forEach((_, i) => {
    arr.slice(0, arr.length - i - 1).forEach((_, j) => {
      if (arr[j] > arr[j + 1]) {
        // 임시 변수를 사용한 교환
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    })
  })
  return arr
}
console.log(bubbleSort2(arr)) // [2, 4, 7, 9, 11, 11, 13, 13, 13]

// Selection Sort
// 답1: 자바스크립트로 구현한 선택 정렬
function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    // 최소값을 맨 앞과 교환
    ;[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
  return arr
}
console.log(selectionSort1(arr)) // [2, 4, 7, 9, 11, 11, 13, 13, 13]
// 답2: 고차함수를 사용한 버블 정렬
function selectionSort2(arr) {
  const newArr = arr.slice() // 원본 배열 변경 방지
  arr.forEach((_, i) => {
    let minIdx = i
    // i 이후의 요소에서 최소값을 찾음
    arr.slice(i + 1).forEach((_, j) => {
      if (arr[i + 1 + j] < arr[minIdx]) {
        minIdx = i + 1 + j
      }
    })
    // 현재 위치(i)와 최소값 위치(minIdx) 교환
    if (minIdx !== i) {
      ;[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }
  })
  return arr
}
console.log(selectionSort2(arr)) // [2, 4, 7, 9, 11, 11, 13, 13, 13]
