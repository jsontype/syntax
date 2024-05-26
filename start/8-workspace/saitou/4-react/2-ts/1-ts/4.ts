// Generics
function wrap1(param: any): any {
  return { param };
}
const wrapped1 = wrap1(10);
console.log(wrapped1);

function wrap2<T>(param: T): { param: T } {
  return { param };
}
const wrapped2 = wrap2(20);
console.log(wrapped2);
const wrapped2_2 = wrap2("hello");
console.log(wrapped2_2);

// Generics?
// Genericsは、型をパラメータとして受け取る関数やクラスを作成するための機能です。
