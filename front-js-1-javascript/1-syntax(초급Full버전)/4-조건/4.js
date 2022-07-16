/*
    조건문
    조건문은 불린값이 true일 때 실행된다.
*/

// 조건문1
// let a = 2
// let b = 2
// if (a === b) {
//     alert('a와 b가 같습니다！')
// } else {
//     alert('a와 b가 다르네요???')
// }

// 조건문2
// let a = 1
// let b = 2
// let c = 3
// if (a === b && a === c) { // And
//     alert('a=b, a=c 둘 다 맞습니다！')
// } else if (a === b || a === c) { // Or
//     alert('a=b, a=c 둘 중 하나는 맞습니다.')
// } else { // 그 외 모든 경우
//     alert('a, b, c 셋은 서로 다릅니다.')
// }

// 조건문3
// let a = 1
// let b = 2
// let b1 = (a !== b) // 서로 다르다.
// let b2 = (a === 10) // false
// let b3 = (a === "a") // false
// let b4 = (true && false) // false
// let b5 = (true || false) // true
// let b6 = 0 // false
// let b7 = 1 // true
// let b8 = '' // false
// let b9 = 'hello' // true
// let b10 = [] // false
// let b11 = [1] // true

// 예외처리
// if (b1) {
//     console.log('b1은 ', b1, '입니다.')
// }

// 오브젝트는 선언하는 순간, 별도의 공간을 만든다.
// let o1 = {} // true
// let o2 = { key: 'value' } // true
// if (o1) { // ***
//     alert('true입니다.') // ***
// } else { // ***
//     alert('false입니다.') // ***
// } // ***

// 다중조건문 : 필터링
// if (false) { // ***
//     alert('false') // ***
// } // ***
// else if (false) { // ***
//     alert('false') // ***
// } // ***
// else if (false) {
//     alert('false') // ***
// } // ***
// else { // ***
//     alert('통과!') // ***
// } // ***



// 다중조건문 : &&(And)와 Or(||)의 사용
// let n5 = 1
// let n6 = 1
// let n7 = 2
// if (n5 === n6 && n5 === n7) { // ***
//     alert('n5와 n6은 같고, n5와 n7도 같다. 둘다에만. (And 성립)') // ***
// } // ***
// if (n5 === n6 || n5 === n7) { // ***
//     alert('n5와 n6이 같거나, 또는 n5와 n7가 같거나. 둘중 하나거나 혹은 둘다 거나. (Or 성립)') // ***
// } // ***



// 삼항연산자 (= Ternary Operator, Ternary If, Mini If)
// 문법 : 조건 ? true : false경우
// let n8 = 10
// n8 < 10 ? console.log('a는 10보다 작다') : console.log('a는 10보다 크거나 같다') // ***



// // 옵셔널체이닝(?)과 널리쉬코울레싱(??)의 사용법
// let user1 = {
//     name: 'yang',
//     // age: { value: 20 } // age가 주석처리 되었을 때,
// }
// // console.log(user1.age.value) // * 이것은 reference error가 난다.
// console.log(user1.age?.value) // 옵셔널체이닝 (Optional Chaining) : age가 없으면 undefined를 내고 error를 내지 않는다. 단, 에러를 감춰버리기 때문에, 남용하면 안된다.
// console.log(user1.age ?? '로딩중') // 널리쉬코울레싱 (nullish ) : age가 undefined, null이면 오른쪽을 보여줌.



// Switch문 : 조건이 많을 때 사용
// let data = 1;
// switch (data) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   default: // else 처리
//     console.log('Not in [1, 2, 3]');
// }



// 연습문제1.
// banana가 5, apple이 4, people이 3 있다.
// banana와 apple이 people보다 많으면 "모두 많다"
// banana만 많으면 "banana만 많다"
// apple만 많으면 "apple만 많다"
// 둘다 people보다 적으면 "모두 적다"를 출력.    
