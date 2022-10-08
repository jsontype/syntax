// else가 없는 if문
if (a) {
    if (b) {
        console.log('a도 b도 있다')
    }
}
if (a && b) {
    console.log('a도 b도 있다')
}
// 실무 else가 없는 if문
a && console.log('a가 있다')
(a && b) && console.log('a도 b도 있다')
const alter = a || b // a가 없으면 b를 넣어라

// if문
let a = 2
let b = 2
if (a > b) {
    console.log('a가 크다')
} else if (a === b) {
    console.log('둘이 같다')
} else {
    console.log('b가 크다')
}
// 실무 if문
const result = a > b ? 'a가 크다' : a === b ? '둘이 같다' : 'b가 크다'

// 스위치문
const device = 'iphone'
switch (device) {
  case 'iphone':
    console.log('아이폰!')
    break
  case 'ipad':
    console.log('아이패드!')
    break
  case 'galaxy note':
    console.log('갤럭시 노트!')
    break
  default:
    console.log('모르겠네요..')
}

// toggle
let switch1 = true
a && !switch1
