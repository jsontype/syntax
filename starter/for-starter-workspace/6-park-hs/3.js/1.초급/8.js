// [중급 반복문: 배열 고차 함수] 함수를 인자값으로 하는 함수





// [인덱스 찾기]
let arr = [1, 2, 3, 4, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        console.log(i)
    }
}

// indexOf : 값에 해당하는 첫번째 것 만 나옴
arr.indexOf(3)

// findIndex : 조건에 해당하는 첫번째 것 만 나옴
arr.findIndex((item) => {return item > 3})









// [밸류 찾기]
for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item > 3) {
        console.log(item)
    }
}

// // ForEach문(value, index, arr자체) : 리턴없는 For문 
// arr.forEach((item) => { if (item > 3) { console.log(item) } })

// // map문(value, index, arr자체) : 일정한 조건으로 배열값을 수정해서, 동일한 길이의 새 배열 만들 때
// let result = arr.map((item) => { return item  + 1 })
// console.log(result)

// // filter문 : 배열을 추려서 새 배열 만들 때
// let result2 = arr.filter((item) => { return item > 3 })
// console.log(result2)



// 문제1
// 숫자가 1부터 9까지 있는 배열이 있다.
// 그 중에서 고차함수를 사용하여, 2의 배수인 것만 인덱스를 출력하라.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result3 = arr2.filter((item)  => {return item % 3 === 0;});
console.log(result3)

arr2.forEach((item, index) => { 
    if (item % 2 === 0) {
        console.log(item, ': ' ,index) 
    }
})

// 문제2
// 5이상인 것만 값과 인덱스 출력
console.log('문제2')
arr2.forEach((item, index) => {
    if (item > 5){
        console.log(item, ': ' ,index)
    }
})
