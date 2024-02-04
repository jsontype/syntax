// runtime : 구동 환경. 브라우져(js), 터미널(node.js)

// 조건문
let a = 3
let b = 3

if (a < b) {
  console.log("b가 더 큼")
} else if (a === b) {
  console.log("b가 a와 동일함")
} else {
  console.log("b가 더 크지 않음")
}

// 두개 이상의 조건 : and (&&), or (||)
if (a > 0 && b < 2 && b > 0) {
  console.log("나올까요?")
}

// 문제
// apple = 5
// people = 4
// orange = 3
// 오렌지가 사람보다 많은 경우, '오렌지로 충분하다'
// 오렌지가 충분하지 않은 경우, 사과가 사람보다 많으면 '사과로 충분하다'
// 사과도 충분하지 않은 경우, '둘다 불충분하다'
let orange = 4
let people = 4
let apple = 4

if (orange >= people) {
  console.log("오렌지로 충분하다")
} else if (apple >= people) {
  console.log("사과로 충분하다")
} else {
  console.log("둘다 불충분하다")
}

// 삼항연산자 Ternery Operator 문법 (조건 ? true일때의 변수 : false일때의 변수)
let num1 = 5
const result = num1 < 1 ? `0${num1}` : num1
console.log(result)

// 삼항연산자는 다음처럼 백틱과 함께 써도 된다.
console.log(`${num1 < 10 ? `0${num1}` : num1}`)

// 스위치문
const device = "iphone"
switch (device) {
  case "iphone":
    console.log("아이폰!")
    break
  case "ipad":
    console.log("아이패드!")
    break
  case "galaxy note":
    console.log("갤럭시 노트!")
    break
  default:
    console.log("모르겠네요..")
}

// 토글 (Toggle)
const switch1 = false // 초기값을 off 상태라고 한다면
let toggle = !switch1 // 이러면 실행할 때마다 on, off를 반복하는 토글이 된다. 이를 버튼에 넣어서 쓰게 되면 그게 토글링이다.
console.log("토글 1회 실행 값: ", toggle)
toggle = !switch1
console.log("토글 2회 실행 값: ", toggle)

// Truthy와 Falsy 개념
/*
  Truthy (참으로 간주되는 값)
    숫자: 0을 제외한 모든 숫자
    문자열: 빈 문자열('')을 제외한 모든 문자열
    불리언: true
    객체: 빈 객체({}) 또는 속성을 가진 객체
    배열: 빈 배열([]) 또는 요소가 있는 배열
    함수: 비어있지 않은 함수
    그 외: null, undefined, NaN을 제외한 모든 값
*/

if (true) {
  // 이 부분은 실행된다. true는 truthy이다.
  console.log("truthy");
}

if ("Hello") {
  // 이 부분은 실행된다. 'Hello'는 truthy한 문자열이다.
  console.log("truthy");
}

if ({}) {
  // 이 부분은 실행된다. 빈 객체는 truthy이다.
  console.log("truthy");
}

/*
  Falsy (거짓으로 간주되는 값)
    숫자: 0
    문자열: 빈 문자열('')
    불리언: false
    객체: null 또는 undefined
    배열: 빈 배열([])
    함수: 비어있는 함수
    그 외: NaN을 포함한 다른 모든 값
*/

if (false) {
  // 이 부분은 실행되지 않는다. false는 falsy이다.
  console.log("falsy");
}

if ("") {
  // 이 부분은 실행되지 않는다. 빈 문자열은 falsy이다.
  console.log("falsy");
}

if (null) {
  // 이 부분은 실행되지 않는다. null은 falsy이다.
  console.log("falsy");
}

/*
  if else 문만 사용할 경우의 문제점 : 
    이런 코드가 있다고 생각해보자. if가 세번 이상 중첩되면 가독성이 떨어질 것이다.
    콘솔로그가 한줄이 아니라 10~1000줄중 랜덤이라고 생각해보자. 실무처럼.
    그럼 저 if랑 else 찾기가 쉬울까?
    심지어 else if도 있다면 더더욱 찾기가 힘들어진다.
    즉 코드가 길고 복잡해질수록, 가독성이 문제점이 된다.
*/
function checkValues1(sth1, sth2, sth3) {
  if (sth1 >= 1) {
    console.log("sth1은 1 이상이다");
    if (sth2 >= 2) {
      // 이 줄이 길다고 가정해보자.
      console.log("sth2는 2 이상이다");
      if (sth3 >= 3) {
        // 이 줄이 길다고 가정해보자.
        console.log("sth3는 3 이상이다");
      } else {
        // 이 줄이 길다고 가정해보자.
        console.log("sth3는 3 미만이다");        
      }
      // ... 이런 코딩이 반복될수록 코드의 가독성은 최악이 될 것이다.
    } else {
      console.log("sth2는 2 미만이다");
    }
  } else {
    console.log("sth1은 1 미만이다");
  }
}
// 함수 사용 예: sth1, sth2, sth3에 해당하는 값을 대입
checkValues1(3, 4, 5);

/*
  if return 문을 사용할 때의 장점 : 
    이런 경우, 함수 내에서 조건에 따라 바로 return을 사용하면,
    코드의 명확성과 가독성을 높일 수 있으며,
    중첩을 줄이고 오류 가능성을 감소시키는 데 도움이 된다.
*/
function checkValues2(sth1, sth2, sth3) {
  if (sth1 < 1) {
    return "sth1은 1 미만이다";
  }
  // 이 줄이 길다고 가정해보자.
  console.log("sth1은 1 이상이다");
  if (sth2 < 2) {
    return "sth2는 2 미만이다";
  }
  // 이 줄이 길다고 가정해보자.
  console.log("sth2는 2 이상이다");
  if (sth3 < 3) {
    return "sth3는 3 미만이다";
  }
  // 이 줄이 길다고 가정해보자.
  console.log("sth3는 3 이상이다");
  // ... 이런 코딩은 반복되어도 코드의 가독성이 낮아지지 않는다.
  return "모든 조건을 만족";
}
// 함수 사용 예: sth1, sth2, sth3을 적절한 값으로 대체
console.log(checkValues2(3, 4, 5)); 
