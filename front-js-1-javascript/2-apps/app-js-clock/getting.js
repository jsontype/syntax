// localStorage : 사용자에 로컬에 데이터를 집어넣어서 저장가능하게 하는 마법같은 기술!

/* 
    예를 들어,
    콘솔로그에 다음과 같이 쳐보자.
    localStorage.setItem("yang", true)
    그러면 local stroage에 키, 밸류로 해서 로컬에 집어넣어준다. 
    이러면 인터넷 창 새로고침 많이 해도 안 바뀌고 그 정보 그대로 갖고 있음!

    이 값을 확인하려면,
    F12 콘솔에서, Application 탭으로 이동한 후,
    사이드바의 Stroage 섹션에서 Local Storage 에서 그 밑의 file://을 클릭하면 된다!    
    그 화면에서 설정도 가능하다!

    이렇게 설정한 값을 꺼낼 때는,
    localStorage.getItem("yang")
    이렇게 콘솔로그에 쳐서, 키 값을 통해서 밸류 값을 얻어올 수 있다는 게 확인 가능하다.
*/




// 상수변수들
const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const userLocalStorage = "currentUser",
    showClassName = "showing"




// 메소드들 : 이 아래에서부터는 맨 아래부터 차례대로 위로 올라감

// 유저명을 로컬 스토리지에 저장한다.
function saveName(text) {
    localStorage.setItem(userLocalStorage, text)
}

// 폼 서밋 제출을 실행한다.
function handleSubmit(event) {
    // event.preventDefault() // *** 다음 이벤트 동작을 막음
    // input.placeholder // *** 위의 input에 해당하는 type, placeholder 등 여러 옵션들을 바꿀 수 있음
    const currentValue = input.value
    printGreeting(currentValue)
    saveName(currentValue)
}

// 유저명을 물어본다.
function askForName() {
    form.classList.add(showClassName)
    form.addEventListener("submit", handleSubmit)
}

// "Hello + 이름"으로 인사말을 출력한다. 
function printGreeting(text) {
    form.classList.remove(showClassName)
    greeting.classList.add(showClassName)
    greeting.innerText = `Hello ${text}`
}

// 처음 이름 로딩
function loadName() {
    const currentUser = localStorage.getItem(userLocalStorage)
    if(currentUser === null) {        
        // user don't exists
        askForName()
    } else {
        // user exists
        printGreeting(currentUser)
    }
}

// 결론
function init() {
    loadName()
}

init()