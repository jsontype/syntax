function hello1() {
  console.log("hello world")
}
hello1()

// parameter : text
function hello2(text) {
  console.log("hello", text)
}
// argument : "kim"
hello2("kim")

// return
function hello3() {
  return "hello world!!!"
}
const a = hello3()
console.log(a)

// arrow function
// function hello4() {
//   return "hello world!!"
// }
const hello4 = () => {
  return "hello world!!"
}
const hello5 = () => "hello world!!"
const hello6 = (text) => "hello" + text

// template literal : backtick
const b = (text, name) => text + "hello!" + name // X String
console.log(b("hey", "kim"))
const c = (text, name) => `${text} hello ${name}`
console.log(c("hey", "yang"))
