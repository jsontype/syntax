// 반복문 : 배열과 깊은 연관이 있다.
const arr = [1, 22, 34, 5, 6, 11, 7, 8, 9]
arr.push(22)
arr.push(33)
arr.push(44)

// for (초기값; 실행조건; 실행 후 하는 일) {
//     반복적으로 수행할 일
// }
for (let i = 0; i < arr.length; i++) { // i++ === (i = i+1) 
    console.log((i + 1) + '번째 값은... ' + arr[i])
}

// 연산자중에는 이런 것도 있다.
// a * b = a 곱하기 b
// a / b = a 나누기 b
// a ** b = a의 b승
// a % b = a를 b로 나눈 나머지 값

// 문제 : arr 배열에서 3의 배수를 골라서 추출하라.
for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % 3 === 0) {
        // 3의 배수
        console.log(arr[i])
    }
}

// 문제 : 구구단을 만들어보라.
for (let i = 2; i < 10; i++) {
    console.log("<<<", i ,"단 >>>")
    for (let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i * j)
    }
}
