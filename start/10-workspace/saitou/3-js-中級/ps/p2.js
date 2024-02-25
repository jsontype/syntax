// forEach, map, filterのいずれかを使って、以下の問題を解いてください。

// 問題:1~20までの配列の中から奇数のみ出力せよ。
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// forEach
// arr.forEach(item => {
//   if (item % 2 === 1) {
//     console.log(item);
//   }
// })

// filter
const b = arr.filter(item => item % 2 === 1)
console.log(b)
// = console.log(arr.filter(item => item % 2 === 1))



// 問題:1~20までの配列の中から偶数のみ出力せよ。


// 問題(難易度 1/3):0から10未満の足すコードを作れ。
const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// c.forEach(item => {
//   sum = sum + item
// })
// console.log(sum)



// 問題(難易度 1/3):1から10までかけるコードを作れ。



// 問題(難易度2/3):arr2のすべての値を立方(**3)した値をそれぞれ出力する。
const arr2 = [1, 2, 3, 4, 5];

// forEach
arr2.forEach(item => { console.log(item ** 3) }) // 1 8 27 64 125

// map
const result2 = arr2.map(item => item ** 3)
console.log(result2) // [1, 8, 27, 64, 125]



// 問題(難易度2/3):arr3のすべての値がそれぞれ立方(**2)になった配列を出力する。



// 問題(難易度2/3):arr4のすべての値がそれぞれ(+10)になった配列を出力する。



// LAST 問題(難易度3/3)(2重for文):ククの表を作成してください。
// 2 x 1 = 2
// 2 x 2 = 4
// ...
const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9]; // [['2 x 1 = 2', '2 x 2 = 4', ...] ['3 x 1 = 3', '3 x 2 = 6', ...] ...]
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ['2 x 1 = 2', '2 x 2 = 4', ...]

// for文
// for (let i = 0; i < kuku1.length; i++) {
//   for (let j = 0; j < kuku2.length; j++) {
//     console.log(kuku1[i] + ' x ' + kuku2[j] + ' = ' + kuku1[i] * kuku2[j])
//   }
// }

// forEach文 : '2 x 1 = 2', '2 x 2 = 4', ..., '3 x 1 = 3', '3 x 2 = 6', ..., '9 x 1 = 9', '9 x 2 = 18', ...
kuku1.forEach((item) =>
  kuku2.forEach((item2) =>
    console.log(item + " x " + item2 + " = " + item * item2)
  )
);

// map文 : [['2 x 1 = 2', '2 x 2 = 4', ...] ['3 x 1 = 3', '3 x 2 = 6', ...] ...]
const result = kuku1.map((item) =>
  kuku2.map((item2) => item + " x " + item2 + " = " + item * item2)
);
console.log(result);

// LAST 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の合計が6になるすべての場合の数を出力してください。
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]
const dice1 = [1, 2, 3, 4, 5, 6];
const dice2 = [1, 2, 3, 4, 5, 6];

// for文
// for (let i = 0; i < dice1.length; i++) {
//   for (let j = 0; j < dice2.length; j++) {
//     if (dice1[i] + dice2[j] === 6) {
//       console.log([dice1[i], dice2[j]])
//     }
//   }
// }

// forEach文
dice1.forEach((item) =>
  dice2.forEach((item2) => {
    if (item + item2 === 6) {
      console.log([item, item2]);
    }
  })
);

// map文
const result3 = dice1.map((item) =>
  dice2.map((item2) => {
    if (item + item2 === 6) {
      return [item, item2];
    }
  })
);
console.log(result3);
