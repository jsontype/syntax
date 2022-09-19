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



// 배열을 위한 반복문 for...of : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
const numbers = [10, 20, 30, 40, 50]
for (let item of numbers) {
    console.log(item)
}

// 객체를 위한 반복문 for...in : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}
for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`)
}

// break 와 continue : 반복문 안에서는 break와 continue를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있다.
for (let i = 0; i < 10; i++) {
    // continue : 다음 루프를 실행
    // i가 2일땐 continue 를 하여 원래 console.log를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어간다.
    if (i === 2) continue
    console.log(i)
    // break : 반복문을 끝내기
    // i가 5일땐 break 를하여 반복문을 종료시킵니다.
    if (i === 5) break
}

// 문제4 : 1에서 15까지 나열된 배열을 만들고 각 숫자의 2승의 총합을 구하는 반복문을 만들어보라.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let sum = 0
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i]
}
console.log(sum)
// 더 쉬운 방법은 내장함수를 이용하는 방법이 있다.
// const result = sumOf(numbers)
// console.log(result) // 결과는 같다.

// 문제5 : numbers1에서 3의 배수인 것만(b[i] % 3 = 0) 출력하라.
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 3 === 0) {
        console.log(numbers1[i])
    }
}

// 문제6 : numbers1에서 7보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환하라.
const numbers2 = []
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 7) {
        numbers2.push(numbers1[i])
    }
}
console.log(numbers2)
