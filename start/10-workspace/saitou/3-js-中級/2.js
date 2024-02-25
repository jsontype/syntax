// const a = "1234";
// const b = 0;

// casting
// const castedA = Number(a);
// console.log(castedA); // 1234

// const castedB = String(b);
// console.log(castedB); // "0"

// primitive type　: 値参照タイプ（数字、文字列、Boolean）
const a = "";
const b = 0;
const c = null; // 空 : トイレにトイレペーパーがあるが、ガラだけあって、ガミがない。
const d = undefined; // 未定義 : トイレにトイレペーパー自体がなかった。

// referencial type : 住所参照タイプ（配列、オブゼクト、関数）
const e = {};
const f = [];

// boolean : truthy, falsy
// const booleanA = Boolean(a);
// console.log(booleanA); // true

// const booleanB = Boolean(b);
// console.log(booleanB); // false

if (a) {
  console.log("a is true");
}

if (e) {
  console.log("e is true");
}

if (f) {
  console.log("f is true");
}
