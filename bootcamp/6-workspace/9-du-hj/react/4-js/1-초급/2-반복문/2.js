const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for(let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// 문제1 : a에서 3의 배수인 것만(a[i] % 3 = 0) 출력하세요.
// for(let i = 0; i < a.length; i++) {
//     if(a[i] % 3 == 0){
//         console.log(a[i])
//     }
// }

// 문제2 : a의 모든 값들을 세제곱(a[i] * a[i])한 값을 출력하세요.
for(let i = 0; i < a.length; i++) {
    console.log(a[i] * a[i])
}
