/*
    [객체 모델링]

    객체 모델링을 통해 객체를 생성할 때의 장점:
        겟셋을 포함한 객체를 간단히 생성할 수 있고,
        다양한 객체내 요소들을 보다 쉽게 관리할 수 있다.
*/

// 1. 함수로 생성
function getObj() {
    const id = "azumaapp"
    const name = "Yang"
    const getId = function () {
        return id;
    }
    const setId = function (newId) {
        id = newId
    }
    const getName = function () {
        return name;
    }
    const setName = function (newName) {
        name = newName
    }
    return {getName, setName, getId, setId, name}
}

const user1 = getObj()
console.log('<1. 함수로 생성>')
console.log('user1:', user1)
console.log('user1.getName():', user1.getName())



// 2. 객체로 생성 : 함수 부분을 "일반 표현식"으로 넣기
const user2 = {
    id: "azumaapp",
    name: "Yang",
    getName() {
        return this.name;        
    },
    setName(newName) {
        this.name = newName
    }
}

console.log()
console.log('<2. 객체로 생성 : 함수 부분을 "일반 표현식"으로 넣기>')
console.log('user2:', user2)
console.log('user2.getName():', user2.getName())



// 3. 객체로 생성 : 함수 부분을 "즉각 표현식"으로 넣기 (* 여기서 "화살표 표현식"은 안 된다.)
const user3 = {
    id: "azumaapp",
    name: "Yang",
    getName: function () {
        return this.name;        
    },
    setName: function(newName) {
        this.name = newName
    }
}

console.log()
console.log('<3. 객체로 생성 : 함수 부분을 "즉각 표현식"으로 넣기> (* 여기서 "화살표 표현식"은 안 된다.)')
console.log('user3:', user3)
console.log('user3.getName():', user3.getName())



// 4. Object.assign 으로 생성
const user4 = Object.assign(Object.create(user3), {
    id: "azumaapp",
    name: "Kang"
})

console.log()
console.log('<4. Object.assign 으로 생성>')
console.log('user4:', user4)
console.log('user4.getName():', user4.getName())



// 5. 클래스로 생성 : 
// 자바스크립트는 인터프리터 언어이므로 컴파일을 안하며, 클래스가 없다.
// 그래서 아래 코드는 모습만 클래스이고, 실제로는 함수처리가 되는 것이다. (타입이 함수이다.)
// 그러나, 모듈화가 되기 때문에 가독성과 코딩의 편의성을 위해 아래처럼 클래스 모양으로 선언하기도 한다.
// 그래서 클래스를 통해서 작업을 하는 것이 사실은 엄청 좋다.
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    getName() {
        return this.id
    }
}
const user5 = new User("yang1234", "yang")

console.log()
console.log('<5. 클래스로 생성>')
console.log('user5:', user5)
console.log('user5.getName():', user5.getName())
