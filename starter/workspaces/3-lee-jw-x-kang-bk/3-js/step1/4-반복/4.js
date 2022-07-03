// 반복문
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push(10)
arr.push(11)
arr.push(12)

// for (초기값; 실행조건; 실행후 하는 일)
for (let i = 0; i < arr.length; i++) {
    console.log('arr의 ', i, '번째 인덱스의 값: ', arr[i])
}

console.log('for문 종료');

// 문제 : 3의 배수를 골라서 추출
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        console.log(arr[i])
    }
}

console.log('구구단>>>');

// 문제 : 구구단
for (let i = 2; i < 10; i++) {
    console.log(i, '단>')
    for (let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i*j)
    }
}

