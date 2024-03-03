// 一般関数 (void関数)
// function add(a, b) {
//   console.log(a + b);
// }
// add(1, 2);

// 矢印関数
// const add = (a, b) => { console.log(a + b) }

// 一般関数 (return関数)
// function add(a, b) {
//   return a + b;
// }
// const b = add(1, 2);
// console.log(b); // 3が「戻り値」(=return value、リターン値)として出力される

// 矢印関数
// const add = (a, b) => {
//   const result = a + b;
//   return result
// };
// const add = (a, b) => { return a + b }
const add = (a, b) => a + b;
const b = add(1, 2);
console.log(b); // 3
