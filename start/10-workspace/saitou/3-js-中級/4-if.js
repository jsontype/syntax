// if, for

const a = 1;

// 基礎if文
if (a) {
  console.log("aが存在します");
}
if (a && b) {
  console.log("aとbが存在します");
}

// 実務で使うif文
a && console.log("aが存在します");
a && b && console.log("aとbが存在します");

// 基礎if-else文
if (a) {
  console.log("aが存在します");
} else {
  console.log("aは存在しません");
}
if (a) {
  console.log("aが存在します");
} else if (b) {
  console.log("bが存在します");
} else {
  console.log("aもbも存在しません");
}

// 実務で使うif-else文: 三項演算子（= trinominal operator）
a ? console.log("aが存在します") : console.log("aは存在しません");
a
  ? console.log("aが存在します")
  : b
  ? console.log("bが存在します")
  : console.log("aもbも存在しません");
