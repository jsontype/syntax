let a = 3
a = 1

let b = a === 3 // a = 3の場合
let c = a !== 3 // a = 3以外のことの場合

if (a === 1) {
  console.log('aが1だ')
} else if (a === 2) {
  console.log('aが2だ')
} else if (a === 3) {
  console.log('aが3だ')
} else if (a === 4) {
  console.log('aが4だ')
} else {
  console.log('aは1-4の間の数字ではない!')
}
