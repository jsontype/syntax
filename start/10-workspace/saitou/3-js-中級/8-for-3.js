// for
// const a = [1, 2, 3, 4, 5]; // 3以上だけの配列を作る [3, 4, 5];
// const b = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] >= 3) {
//     b.push(a[i]);
//   }
// }
// console.log(b); // [3, 4, 5]

// filter : 配列に条件をかけて、フィルタされた違う長さの新しい配列を作る
const a = [1, 2, 3, 4, 5]; // 3以上だけの配列を作る [3, 4, 5];
const b = a.filter((item) => item >= 3); // const b = a.filter((item) => { return item >= 3 });
// console.log(b); // [3, 4, 5]
