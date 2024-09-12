// parametaがない関数
function a () {
  console.log('a!!!')
}

// argumentを入れないで関数を呼び出す
a()

// parameterがある関数
function b (item1, item2) {
  console.log('item1: ', item1)
  console.log('item2: ', item2)
}

// argumentを入れて関数を呼び出す
b('Hello!', 'Javascript!')

// 矢印関数
// function c () {
//   console.log('Hello!')
// }
const c = () => {
  console.log('c!')
}

c()

// 矢印関数 + parameter
const d = (text) => {
  console.log(text)
}

d('Hi!!!')
