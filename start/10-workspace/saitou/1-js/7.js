let a = 1;
let b = 2;

if (a > b) {
  console.log("a > b");
} else {
  console.log("a <= b");
}

const c = [11, 22, 33, 44, 55];

for (let i = 0; i < c.length; i++) {
  if (c[i] > 30) {
    console.log(c[i]);
  }
}

for (let i = 0; i < c.length; i++) {
  if (c[i] % 2 === 0) {
    console.log(c[i]);
  }
}

// Dice 1-6 二つを投げました。投げて出る値を全部表示してください。[ 1 , 1 ] ~ [ 6 , 6 ]
const dice1 = [1, 2, 3, 4, 5, 6]; // 6
const dice2 = [1, 2, 3, 4, 5, 6]; // 6

for (let i = 0; i < dice1.length; i++) {
  for (let j = 0; j < dice2.length; j++) {
    console.log("[", dice1[i], ",", dice2[j], "]");
  }
}

// i = 2
// j = 0
// [ 1 , 1 ]
// [ 1 , 2 ]
// [ 1 , 3 ]
// [ 1 , 4 ]
// [ 1 , 5 ]
// [ 1 , 6 ]
// [ 2 , 1 ]
// [ 2 , 2 ]
// [ 2 , 3 ]
// [ 2 , 4 ]
// [ 2 , 5 ]
// [ 2 , 6 ]
// [ 3 , 1 ]
// [ 3 , 2 ]
// [ 3 , 3 ]
// [ 3 , 4 ]
// [ 3 , 5 ]
// [ 3 , 6 ]
// [ 4 , 1 ]
// ...
// [ 6 , 6 ]

// 九九の表を作ってください。
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// ...
// 2 x 9 = 18
// 9 x 9 = 81

const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9];
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 九九
for (let i = 0; i < kuku1.length; i++) {
  for (let j = 0; j < kuku2.length; j++) {
    console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
  }
}

// 九九/偶数
for (let i = 0; i < kuku1.length; i++) {
  if (kuku1[i] % 2 === 0) {
    for (let j = 0; j < kuku2.length; j++) {
      console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
    }
  }
}

// 九九/奇数
for (let i = 0; i < kuku1.length; i++) {
  if (kuku1[i] % 2 === 1) {
    for (let j = 0; j < kuku2.length; j++) {
      console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
    }
  }
}
