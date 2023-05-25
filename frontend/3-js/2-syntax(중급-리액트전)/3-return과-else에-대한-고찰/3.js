// 예외처리를 할 때, else보다는 return을 쓰는게 좋다.
const error = false

function bad() {
  if (error) {
    console.log("error의 처리")
  } else {
    console.log("error가 없으므로 함수가 실행되었다.")
  }
}

function good() {
  if (error) {
    console.log("error의 처리")
    return
  }
  console.log("error가 없으므로 함수가 실행되었다.")
}

bad()
good()

/*
  bad와 good 함수는 동일한 결과이지만, good과 같이 기술하는 것이 더 좋은 이유

  1. 가독성: 
    return은 함수의 결과를 명확하게 나타내고, 함수의 흐름을 단순화한다.
    else문을 사용하면 블록의 중첩 수준이 높아져서 가독성이 떨어질 수 있다.
    특히 복잡한 로직에서는 이런 상황이 더욱 드러난다.

  2. 제어 흐름의 명확성:
    return은 함수에서 더 이상 실행할 코드가 없음을 명확하게 나타낸다.
    이는 디버깅과 유지보수를 쉽게 해주며, 실수를 줄이는 데에도 도움이 된다.

  3. 성능:
    else문을 사용하면 블록 내부의 코드가 실행되지 않고 무시되지만, return은 함수를 종료한다.
    따라서 return을 사용하면 불필요한 코드의 실행을 막아줄 수 있다.

  4. DRY(Don't Repeat Yourself) 원칙 지키기:
    else문을 사용하면 종종 같은 코드를 두 번이상 작성해야 할 때가 있다.
    반면에 return을 사용하면 중복 코드를 피할 수 있다.
*/

/*
  그렇다고 else를 안쓰는 것이 만능은 아니다.

  여러 조건을 연속적으로 확인해야 할 때 else문이 유용하게 사용될 수 있다.
  예를 들어, 다음과 같이 "사용자의 입력에 따라 다른 메시지를 출력"하는 함수를 생각해보자.
*/

function respondToUser(input) {
  if (input === "Hello") {
    return "Hello, User!"
  } else if (input === "How are you?") {
    return "Fine, thanks. And you?"
  } else {
    return "Sorry, I can't understand that."
  }
}

respondToUser("Hello")
respondToUser("How are you?")
respondToUser("Blah blah")

/*
  만약 입력이 "Hello"이면 "Hello, User!"를 반환하고, 
  "How are you?"이면 "Fine, thanks. And you?"를 반환하며,
  그 외의 모든 입력에 대해서는 "Sorry, I can't understand that."를 반환한다.
  이런 경우에는 else 문을 사용하는 것이 적절하고 코드의 목적을 이해하기 쉽게 만든다.
*/
