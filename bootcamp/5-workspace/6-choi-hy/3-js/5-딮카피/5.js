// 숫자, 문자열, 불린, 널 : 값 참조 변수
let a = 1;
let b = a;
a = 2;
console.log(b);

// 객체, 배열 : 주소 참조 변수
const arr1 = [1, 2, 3];
const arr2 = arr1; // Shallow Copy, 얉은 복사 상태
arr1.push(4);
console.log(arr2); // [1, 2, 3, 4]

const obj1 = { id: "yang", pw: 1234 };
const obj2 = obj1;
obj1.pw = 9999;
console.log(obj2); // pw: 9999

// Deep Copy를 하는 방법
const arr3 = [1, 2, 3];
const arr4 = JSON.parse(JSON.stringify(arr3));
arr3.push(4);
console.log(arr4); // [1, 2, 3]

const obj3 = { id: "yang", pw: 1234 };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.pw = 9999;
console.log(obj4); // pw: 1234
