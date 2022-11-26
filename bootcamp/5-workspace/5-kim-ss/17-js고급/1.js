// 숫자, 문자열, 불린은 값참조
let a = 2;
let b = a;
a = 1;
console.log(b);

// object 객체는 주소 참조
let obj1 = { id: "yang", pw: 1234 };
let obj2 = obj1;
obj1.pw = 9999;
console.log(obj2.pw);

// array 배열은 주소 참조
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2);
