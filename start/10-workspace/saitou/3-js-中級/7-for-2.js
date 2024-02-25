// for
// const a = [1, 2, 3, 4]; // [3, 4, 5, 6];
// const b = [];
// for (let i = 0; i < a.length; i++) {
//   b.push(a[i] + 2);
// }
// console.log(b); // [3, 4, 5, 6]

// map : 配列に同じ処理をして、同じ長さの新しい配列を作る
const a = [1, 2, 3, 4]; // [3, 4, 5, 6];
const b = a.map((item) => item + 2); // const b = a.map((item) => { return item + 2 });
