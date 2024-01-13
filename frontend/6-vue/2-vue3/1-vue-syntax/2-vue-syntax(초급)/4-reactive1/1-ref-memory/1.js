// Ref. Value
let a = 1
let b = 'hello'
a = 2
b = 'world'

// Ref. Memory address
const c = [1, 2, 3]
const d = { id: 1, name: 'jack' }
const e = [{ id: 1, name: 'jack' }, { id: 2, name: 'rose' }]
c.push(4) // [ 1, 2, 3, 4 ]
c.unshift(0) // [ 0, 1, 2, 3, 4 ]
c.pop() // [ 0, 1, 2, 3 ]
c.splice(2, 2) // [ 0, 1 ]
const length = c.length // 2
console.log(length)
e.push({
  id: 3,
  name: 'john'
})
console.log(e)

// VueとReactは、値参照の変数は使いません。
// 何故なら、値参照の変数は、値の変更を検知できないからです。
// 例えば、Vueの場合、値参照の変数を使うと、以下のような問題が発生します。
// 1. lifecycle hookが機能しない
// 2. computedが機能しない
// 3. watchが機能しない
// 4. v-modelが機能しない
// 5. v-ifが機能しない
// 6. v-forが機能しない
// 7. v-showが機能しない
// ... 無限の問題が発生します。
// なので、VueとReactは、値参照の変数は使いません。
