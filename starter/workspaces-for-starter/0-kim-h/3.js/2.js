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
