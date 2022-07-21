// 상수변수들
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const toDosLocalStorage = 'toDos'
let toDos = []

// 메소드들

function deleteToDo() {
    // console.dir(event.target.parentNode) // *** 부모노드인 parentNode 확인 -> <li id="1">...</li>
    const li = event.target.parentNode
    toDoList.removeChild(li) // *** 삭제버튼의 부모노드였던 li를 삭제
    /* 
        ★ filter(function(array var name){ logic })에 대해서...

        아래와 같은 문법은,
        Array에 있는 투두들을 돌아가며 모두 filter를 하고, 그 return값이 true인 항목끼리의 array를 새로 만들어준다.

        원래는 Array.filter(somthing) 해놓고 다른 곳에 function somthing(array var name) { return value } 을 따로 지정한다.
        그 문법을 더 간단하게 만든 것이 아래의 경우이다!!!
    */
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== Number(li.id)
    })
    // console.log(cleanTodos) // *** 삭제 대상의 투두만 어레이에 담겨 나온다.
    toDos = cleanToDos
    saveToDos()
}

function saveToDos() {
    /* 
            연동 - 1

        로컬스토리지에는 string형태의 키:밸류만 들어갈 수 있으므로, 
        오브젝트인 toDos를 stringify해줘야한다.
    */
    localStorage.setItem(toDosLocalStorage, JSON.stringify(toDos))
}

// 투두를 프린트한다.
function printToDo(text) {
    // console.log(text) // *** 입력한 값
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const newId = toDos.length + 1
    delBtn.innerHTML = "❌" // 윈도우 + "."
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text    
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = newId
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj)
    saveToDos()
    // console.log('toDos: ', toDos) // ***
}

// 폼 제출시의 처리를 한다.
function handleSubmit(event) {
    event.preventDefault()
    const currentValue = toDoInput.value
    printToDo(currentValue)
    toDoInput.value = ""
}

// 기존 투두를 불러온다.
function loadTodos() {
    const loadedToDos = localStorage.getItem(toDosLocalStorage)
    if (loadedToDos !== null) {
        // console.log(loadedToDos) // *** 로컬스토리지에 입력되어있는 투두들 호출하지만 stringify된 형태로만 나올 것이다.
        /* 
                연동 - 2

            아래와 같이 parsing을 해야, loadedTodos 변수를 [{...}, {...}, {...}] 형태로 제대로 인식을 해준다.
            그렇지 않으면, "[{}, {}, {}]"의 형태로 stringify 된 toDos만 나오게 될 것이다.
            입력할 때 그렇게 했기 때문이다.
        */
       const parsedTodos = JSON.parse(loadedToDos)

       /*
            ★ forEach(function(array var name){ logic })에 대해서...

            아래와 같은 문법은, 
            Array에 있는 투두들을 돌아가며 모두 foreach 이후의 함수를 실행해준다.

            원래는 Array.forEach(somthing) 해놓고 다른 곳에 function somthing(array var name) { logic } 을 따로 지정한다.
            그 문법을 더 간단하게 만든 것이 아래의 경우이다!!!
       */
       parsedTodos.forEach(function(toDo){ 
            // console.log(toDo.text) // *** toDo에서 text만 꺼내온 값
            // 스토리지에서 가져온 투두들의 text 키의 밸류들을 싣는다.
            printToDo(toDo.text)
        })
    }
}

// 결론
function init() {
    loadTodos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()


