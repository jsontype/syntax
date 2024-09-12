let a = 1;
let b = a;
a = 2;
console.log(b); // 1

// Shallow Copy
const c = [1, 2, 3];
const d = c; // cの住所を代入する。
c[0] = 999;
console.log(d); // [999, 2, 3];

// cが変わってもdが変わらないようにコピーしたいならどうすればいいですか。
// Deep Copy
const cc = [1, 2, 3];
// const dd = JSON.parse(JSON.stringify(cc)); // "[1, 2, 3]"の値をもつ新しい住所を代入する。
const dd = Object.assign([], cc);
cc[0] = 999; // ddとは関係ない
console.log(dd); // [1, 2, 3]
