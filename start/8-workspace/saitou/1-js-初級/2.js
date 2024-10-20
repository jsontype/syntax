// 変数のタイプ

// primitive type : 値参照タイプ（数字、文字列、Boolean）
let a = 1; // 数字
let b = "Hello"; //　文字列
let c = true; // true or false

// referencial type : 住所参照タイプ（配列、オブゼクト、関数）
const d = [1, 2, 3, 4, 5, 6];
const e = { id: "neko", pw: "dandyneko" };
const f = () => {
  console.log("Hello!");
};

// d = [1, 2, 3, 4] // Error
// prototype 関数：push, popなどみたいに、配列やオブゼクトを定義するときに自動で入る関数
d.push(4); // 後ろに４を追加して
d.pop(); // 後ろに一つ削除して
console.log("d: ", d); // [1, 2, 3]
console.log("e: ", e);
