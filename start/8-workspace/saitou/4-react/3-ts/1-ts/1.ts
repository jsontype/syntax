// JSはweakly typed languageです。
let a = 1;
a = 2; // エラーにならない
console.log(a);

// TSはstrongly typed languageです。
let b: string = "string";
b = "sa"; // エラーになる
console.log(b);
// このように、TSは型が異なる場合にエラーを出してくれるので、バグを防ぐことができます。

// TypeScriptのObject型を定義する方法
type userType = {
  name: string;
  age: number;
  email: string;
  address?: string;
  registeredAt?: Date;
};

const user1: userType = {
  name: "saitou",
  age: 20,
  email: "111@1.com",
};

const user2: userType = {
  name: "yang",
  age: 30,
  email: "asdf@1324.com",
};

// TypeScriptのArray型を定義する方法
const users: userType[] = [user1, user2];
const strings: string[] = ["a", "b", "c"];
const nums: number[] = [1, 2, 3];
const booleans: boolean[] = [true, false, true];
const msgs: string[] = ["hello", "world"];
// messages.push("1234");

const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];
const mightBeUndefined: string | undefined = undefined;
const nullableNumber: number | null = null;

// Union Type
let color1: "red" | "orange" | "yellow" = "orange";
type colorType = "red" | "orange" | "yellow";
let color2: colorType = "orange";
// color1 = "blue";
// color2 = "blue";
