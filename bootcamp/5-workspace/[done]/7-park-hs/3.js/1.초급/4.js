// 반복문
let a = [1,2,3,4,5]

for (let i = 0; i < a.length; i++) {
    console.log(i, '번째 인덱스의 값: ', a[i])
}

for (let i = 0; i < a.length; i++) {
    if (a[i] > 3) {
        console.log(a[i])
    }
}

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// 문제1 : b에서 3의 배수인 것만(b[i] % 3 = 0) 출력하세요.
for (let i = 0; i < b.length; i++){
    if (b[i] % 3 === 0) {
        console.log(b[i])
    }
}

// 문제2 : b의 모든 값들을 세제곱(b[i] * b[i])한 값을 출력하세요.
for (let i = 0; i < b.length; i++){
    console.log(b[i] ** 3)
}

// 문제3 : 구구단을 완성하세요. (이중 for문)
for (let i = 2; i < 10; i++) {
    console.log(i, '단 시작>>>');
    for (let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i * j)
    }
}