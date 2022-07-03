// css 파일 내의 class 정의를 사용해서 스타일을 바꾼다.
function init() {
    let title = document.querySelector("#title")
    title.addEventListener("click", handleClick)
    title.addEventListener("contextmenu", handleContextmenu)
}

init()

function handleClick() {
    // console.log('title.className:', title.className)
    // if(title.className !== "topic") {
    //     title.className = "topic"
    // } else {
    //     title.className = "" // 문제발생 : large가 없어져버린다.
    // }

    // if(!title.classList.contains("topic")) {
    //     // topic을 포함하지 않을 경우
    //     title.classList.add("topic")
    // } else {
    //     // topic을 포함할 경우
    //     title.classList.remove("topic")
    // } 
    
    title.classList.toggle("topic")
    console.log(title)
}

function handleContextmenu() {
    // if(!title.classList.contains("large")) {
    //     // large을 포함하지 않을 경우
    //     title.classList.add("large")
    // } else {
    //     // large을 포함할 경우
    //     title.classList.remove("large")
    // } 

    title.classList.toggle("large")
    console.log(title)
}