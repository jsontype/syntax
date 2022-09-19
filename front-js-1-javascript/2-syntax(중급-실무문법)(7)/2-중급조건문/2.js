/*
    [중급조건문]

    1. 삼항연산자 방식
    1. ampersand 방식
    1. verticalbar 방식

    * 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

let a = 1
let b = 2

if (a === 1) {
    console.log(1)
} else if (a === 2) {
    console.log(2)
} else if (a === 3) {
    console.log(3)
} else if (a === 4) {
    console.log(4)
} else {
    console.log('몰라')
}

const result1 = a > b ? 'a가 크다' : 'b가 크다'
const result1_1 = a < b ? 'b가 크다' : a === b ? 'a = b' : 'a가 크다'
const result1_2 = a === 1 ? 1 : a === 2 ? 2 : b === 3 ? 3 : b === 4 ? 4 : '몰라'

/*
    * Ampersand (and)
        true && true = true
        true && false = false
        false && false = false

    * 암묵적 캐스팅 : String > Number > Boolean

    * 명제
        0 false
        -1 true
        '' false
        '1' true
        [] false
        {} false

    * Vertical Bar (or)
        false || true = true        
*/

// 앞 조건이 참이면 뒤를 표시 = if 
const result2 = a > b && 'a가 크다' // true && true = true // false && true = false

// 앞이 존재하지 않으면 대타로 뒤를 표시
const result3 = a || 'a 대타'



// 조건문 더 스마트하게 쓰기
// 특정 값이 여러 값중 하나인지 확인해야 할 때
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  )
}
console.log(isAnimal('개')) // 함수안에 있으므로 true
console.log(isAnimal('노트북')) // 함수안에 없으므로 false

// 스위치문을 더 깔끔하게 쓰고 싶을 때
function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  }
  return sounds[animal] || '...?'
}
console.log(getSound('개')) // 멍멍!
console.log(getSound('비둘기')) // 구구 구 구

// 위 코드에서, 값에 따라 실행해야 하는 코드 구문이 다를 때는 아래처럼 객체에 함수를 넣으면 된다.
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍')
    },
    고양이() {
      console.log('고양이')
    },
    비둘기() {
      console.log('구구 구 구')
    }
  };
  if (!tasks[animal]) {
    console.log('...?')
    return
  }
  tasks[animal]()
}
getSound('개')
getSound('비둘기')
