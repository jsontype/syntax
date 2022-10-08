// 함수 선언해 놓으면, 이벤트(사용자행동)이 발생했을 때 연결해서 쓸 수 있다.
function leftClick() {
    let name = prompt('이름이 뭐에요?')
    alert('Welcome!' + name)
}

// 나이가 어떻게 되냐고 묻고, 나이가 18세 이하이면 미성년자는 출입금지! 라고 출력
function rightClick() {
   let age = prompt("your age?")
   if (age <= 18) {
       alert('미성년자는 출입금지')
   }
}

// 파라미터
function hello(text) {
    alert(text)
}

// 리턴
function returnHi() {
    return 'hi'
}
let result = returnHi()
console.log(result)

// 함수에 주석다는 정식 방법
/**
 * 인삿말을 넣고 그 인삿말을 리턴한다.
 * @param {String} text 인삿말
 * @returns 인삿말
 */
function example(text) {
    return text
}

// 화살표 함수 표현식 : example과 example2는 같다.
const example2 = (text) => { return text }
