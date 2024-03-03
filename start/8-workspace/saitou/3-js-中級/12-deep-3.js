const arr1 = [1, 2, 3];
const obj1 = { id: "a123", pw: "dfsgkljsdfgl" };

// Shallow Copy
// const arr2 = arr1;
// const obj2 = obj1;
// arr1[0] = 999;
// obj1.id = "a999";
// console.log("Shallow Copy");
// console.log(arr2); // [999, 2, 3]
// console.log(obj2); // { id: "a999", pw: "dfsgkljsdfgl" };

// Deep Copy : Spreading 文法
const arr3 = [...arr1];
const obj3 = { ...obj1 };
arr1[0] = 999;
obj1.id = "a999";
console.log("Deep Copy");
console.log(arr3); // [1, 2, 3]
console.log(obj3); // { id: "a123", pw: "dfsgkljsdfgl" };
