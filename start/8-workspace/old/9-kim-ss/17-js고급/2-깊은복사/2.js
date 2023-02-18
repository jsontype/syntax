// object 객체는 주소 참조
let obj1 = { id: "yang", pw: 1234 };
let obj2 = JSON.parse(JSON.stringify(obj1)); // 깊은 복사 : deep copy
obj1.pw = 9999;
console.log(obj2.pw);

// array 배열은 주소 참조
let arr1 = [1, 2, 3];
let arr2 = JSON.parse(JSON.stringify(arr1)); // 깊은 복사 : deep copy
arr1.push(4);
console.log(arr2);
