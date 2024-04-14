// JS는 weakly typed language다.
let a = 1;
a = 2; // 에러가 발생하지 않는다.
console.log(a);
// 기존의 JS의 경우는, 복잡한 코드에서 버그가 발생했을 때, 버그를 쉽게 찾을 수가 없었다.

// TS는 strongly typed language다.
let b: string = "string";
// b = 2; // 에러가 발생한다.
console.log(b);
// 이렇게, TS는 변수의 타입을 지정해주어야 하고, 그 타입이 다른 경우 에러를 발생시킨다. 이로써 버그를 줄이고 코드의 안정성을 높일 수 있다.

// TypeScript의 Object 타입을 정의하는 방법
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

// TypeScript의 Array 타입을 정의하는 방법
const users: userType[] = [user1, user2];
const strings: string[] = ["a", "b", "c"];
const nums: number[] = [1, 2, 3];
const booleans: boolean[] = [true, false, true];
const msgs: string[] = ["hello", "world"];
// msgs.push(1234); // 에러가 발생한다.

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
