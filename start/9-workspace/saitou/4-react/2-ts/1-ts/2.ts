// 関数のタイプを定義する方法 : returnがある場合
function add(a: number, b: number): number {
  return a + b;
}
// function add(a, b) {
//   return a + b;
// }

const result = add(1, 2);
console.log(result);

// 関数のタイプを定義する方法 : returnがない場合
function sayHello(text: string): void {
  console.log(text);
}

// Union Type
function printId(id: number | string) {
  console.log(id);
}
printId(1);
printId("1");
