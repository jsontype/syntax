// 반복문
let a = [1, 2, 3, 4, 5]

/*
    for (초기값; 실행조건; 실행후처리) {
        실행할 로직
    }
*/
for (let i = 0; i < a.length; i = i + 1) {
    console.log(a[i])
}

for (let i = 0; i < a.length; i++) {
    console.log(i, '번째 인덱스의 값: ', a[i])
}

for (let i = 0; i < a.length; i++) {
    if (a[i] > 3) {
        console.log(a[i])
    }
}

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < b.length; i++){
    if (b[i] % 3 === 0) {
        console.log(b[i])
    }
}

for (let i = 0; i < b.length; i++){
    console.log(b[i] ** 3)
}

for (let i = 2; i < 10; i++) {
    console.log(i, '단 시작>>>');
    for (let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i * j)
    }
}

/*
    2 단 시작>>>
    2 x 1 = 2
    2 x 2 = 4
    2 x 3 = 6
    ...
    2 x 9 = 18
    3 단 시작>>>
    3 x 1 = 3
    3 x 2 = 6
    ...
    3 x 9 = 27
    4 단 시작>>>
    ...
    9 단 시작>>>
    9 x 9 = 81
*/
