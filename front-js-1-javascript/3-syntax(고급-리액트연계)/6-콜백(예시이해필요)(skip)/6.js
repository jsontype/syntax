/*
    [콜백함수]

    1. 쉽게 설명 :
        다른 함수가 실행을 끝낸 뒤 실행되는 callback되는 함수 를 말한다. 
        그리고, 함수를 만들때, parameter를 함수로 받아서 쓸 수 있는데 그 함수는 callback이다. 

    1. 자세히 설명 : 
        js에서 함수는 object라고 한다. 그래서 함수는 다른 함수의 인자로 쓰일 수도 어떤 함수에 의해 리턴될 수도 있다. 
        이런 함수를 고차 함수라고 한다. 결국, 인자로 넘겨지는 함수를 콜백 함수라고 한다. 
        콜백 함수는, 단지 함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때에만 시스템에서 호출하는 함수이다.
        
    * 잘 알아두면 이후 리액트할 때 프롭으로 함수를 넘겨주는 부분을 이해할 때 편해진다.
*/

// a도 b도 함수이다. 이런 경우 a를 고차함수라고 말한다. 고차함수 안에서는 함수인 b도 파라미터나 리턴으로 사용할 수 있다.

// 1. 파라미터로 쓰는 예
let prevNumber = 1
function a(b) {
    console.log(b(prevNumber))
}
a(prevNumber => prevNumber + 1) // 결과 : 2

// 1. 리턴으로 쓰는 예
// function a(b) { // a도 b도 함수이다. 이런 경우 a를 고차함수라고 말한다. 고차함수 안에서는 함수인 b도 파라미터나 리턴으로 사용할 수 있다.
//    return b()
// }
// function print() {
//    console.log("callback이다")
// }
// a(print) // 결과 : callback이다



// 1. 실제 사용 예시
// 아래의 introduce는 3번째 파라미터에 함수가 들어가는 고차함수이다. 
// === introduce 고차함수가 실행됐을 때, 파라미터로 들어간 callback 함수가 함께 실행된다. 
// === introduce 고차함수가 function(name) { console.log(name) } 함수의 제어권을 갖고 있다. (다 같은 말..)
function introduce (lastName, firstName, callback) { 
	var fullName = lastName + firstName
	callback(fullName) // 3번째 파라미터(함수)를 실행한다.
} 
// 아래의 function(name) { console.log(name) }는 콜백함수이다.
// introduce를 호출해야만, function(name) { console.log(name) } 콜백함수도 실행될 수 있다.
// 이렇게 콜백함수는, 단지 함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 조건이 달성되어야만 시스템에서 호출하는 함수이다.    
introduce("홍", "길동", function(name) { console.log(name) }) // 결과 -> 홍길동



/*
    1. 콜백함수가 필요한 이유
        콜백함수를 설명할 때에는 변수의 유효범위(scope)에 대한 이야기를 해야한다.
            콜백함수는 때로는 가독성이나 코드 재사용 면에서 사용된다.
            이 예시는 리액트 훅스에서 useState 등에서 공부하면 보다 명확히 이해할 수 있다.

        콜백함수를 설명할 때에는 동기/비동기(synchronous/Asynchronous)처리에 대한 이야기도 하면 좋을 것 같다.
            동기 : 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름
            비동기 : 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
                동시에 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있음.
                비동기 방식으로 작성된 함수를 동기 처리하기 위해 콜백이 필요하다.
                과거에 콜백 지옥이라고 해서 개발자들이 많은 어려움을 겪고 있어 promise나 async/await를 써서 대체하고 있다고 한다.
*/

// 변수의 유효범위(scope)를 위해 콜백함수가 쓰이는 예시
function findUserAndCallBack(id, cb) {
    const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
    }
    cb(user)
}  

findUserAndCallBack(1, function (user) { console.log("1. user:", user) })

// 위 예제에서 함수 findUserAndcallBack의 인자로 id 와 콜백 함수를 선언 하여 호출 하였다. 그래서 cb의 매개변수는 function 익명 함수를 콜백 함수로 할당 받으며, cb(user) 가 실행될 때 이 콜백 함수는 실행되게 된다. 
// 콜백 함수를 넣음에 따라 함수 내부에서 수행해주기 때문에 결과값을 return 할 필요가 없다.



// 비동기 함수를 위해 콜백함수가 쓰이는 예시
function findUser(id) {
    let user
    setTimeout(function () {
        console.log("waited 0.1 sec.");
        user = {
            id: id,
            name: "User" + id,
            email: id + "@test.com",
        }
    }, 100)
    return user
}

const user = findUser(1)
console.log("2. user:", user)
  
// 결과
// user: undefined
// waited 0.1 sec.

// 위 예제는 setTimeout같은 비동기 함수를 썼을 때의 예제이다.
// setTime()은 비동기 함수의 호출이기 때문에 실행 완료를 기다리지 않고 다음 라인인 11번째 줄로 넘어가 버린다. 즉, user객체는 무시하고 넘어가 버린다.
// findUser(1)은 Undefined가 할당된다. 
// 그러고나서, 0.1초 후에 setTimeout()함수의 첫번째 인자로 넘어간 콜백 함수가 실행되면서 waited 0.1 sec. 가 출력되고 user 로컬 변수에 원하는 객체가 할당되었지만 이미 때는 늦었다.

function findUserAndCallBack(id, cb) {
    setTimeout(function () {
        console.log("waited 0.1 sec.")
        const user = {
            id: id,
            name: "User" + id,
            email: id + "@test.com",
        }
        cb(user)
    }, 100)
}
  
findUserAndCallBack(1, function (user) { console.log("3. user:", user); })
  
// 결과
// waited 0.1 sec.
// user: {id: 1, name: "User1", email: "1@test.com"}

// 위에 예제는 결과값을 바로 리턴받지 않고, 그 결과값을 통해 처리할 로직을 콜백 함수로 넘겨서 제대로 구현을 하였다.