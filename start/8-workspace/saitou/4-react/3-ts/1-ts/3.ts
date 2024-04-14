// Inferfcae : PascalCaseで指定する。Interfaceは、objectの型を定義する場合に使う。
interface Person {
  name: string;
  age: number;
  email: string;
  address?: string;
  registeredAt?: Date;
}

// Type Alias : PascalCaseで指定する。Type Aliasは、union typeやintersection typeを使う場合に使う。
// type Person = {
//   name: string;
//   age: number;
//   email: string;
//   address?: string;
//   registeredAt?: Date;
// }; X

// Intersection Type
type Developer = Person & {
  skills: string[];
};

// Union Type
type AllowedColors = "red" | "orange" | "yellow";

// variable : camelCase
const person1: Person = {
  name: "saitou",
  age: 20,
  email: "",
};

const person2: Developer = {
  name: "yang",
  age: 30,
  email: "",
  skills: ["JavaScript", "TypeScript", "React"],
};

// const Users: Developer[] = [person1, person2]; // NG
const Users: Person[] = [person1, person2]; // OK
