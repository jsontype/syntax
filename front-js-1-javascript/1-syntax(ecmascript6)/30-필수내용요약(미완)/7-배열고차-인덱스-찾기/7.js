// 데이터
let arr = [1, 3, 3, 4, 4, 5]
let value = 7

// for문 용도 : 「값, 조건」에 해당하는 「모든 인덱스」 찾기
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        console.log('arr[i] ===>', i)
    }
}

// indexOf문 용도 : 「값」에 해당하는 「최초의 인덱스」 찾기
// console.log('arr.indexOf(value) ===>', arr.indexOf(value))

// findIndex문 용도 : 「조건」에 해당하는 「최초의 인덱스」 찾기, 배열고차함수(* 지금 몰라도 됨)
// console.log('arr.findIndex((element) => { return element > value }) ===>', arr.findIndex((element) => { return element > value }))

// < 정리 >
// 속도 비교 : for > indexOf >>> findIndex
// * 함수형 인덱스 검색문은 없을 때는 -1을 꺼내며 이를 활용한 코딩을 할 수 있다' 
