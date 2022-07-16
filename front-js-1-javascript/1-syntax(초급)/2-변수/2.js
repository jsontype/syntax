/*
    [변수]
*/

function act() {
    // 변수 선언
    // let a = 1 // 변수.
    // const b = 1 // 상수(값이 안 바뀜). 

    // 데이터 타입
    // let으로 선언, 일반 데이터타입 (값 참조형) : Number, String, Boolean
    // const로 선언, 객체 데이터타입 (주소 참조형) : Array, Object
    let a = 1 // 연산 가능
    a = a + 5
    a = a - 2
    a = a * a
    a = a / 2
    a = a ** 2 // n승
    a = a % 3 // n으로 나눈 나머지
    let b = '12' // 연산 불가능
    let c = true

    // String 관련 데이터타입들 명칭
    console.log('Yang') // Char
    console.log("Yang") // String
    console.log(`Yang`) // Backtick : 기호 `를 백틱이라 한다. 백틱을 사용하면 줄바꿈도 인식해주고, ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
    let name = 'Yang'
    let job = 'Dev'
    let age = 30
    console.log(`
        저는 ${name}입니다. 
        직업은 ${job}입니다. 
        올해로 ${age}살이 됩니다.
    `)    

    // 배열(array)타입 : 인덱스와 밸류로 이루어짐
    const arr = [1, 2, 5] 
    console.log('arr: ', arr)
    console.log('arr[0]: ', arr[0]) // 인덱스는 0부터 시작
    console.log('arr.length: ', arr.length) // 배열의 길이
    console.log('arr의 마지막값: ', arr[arr.length - 1]) // 배열의 마지막 값을 꺼내는 노하우
    // 배열의 마지막에 추가
    arr.push(6)
    arr.push(7)
    // 배열의 처음에 추가
    arr.unshift(-1)
    arr.unshift(-2)
    // 배열의 마지막을 삭제
    arr.pop()
    // 배열의 처음을 삭제
    arr.shift()
    // 배열의 중간을 삭제
    arr.splice(2, 1) // 인덱스, 삭제할 수
    console.log(arr)

    // 객체(object)타입 : 하나의 변수에 여러개의 값을 넣음, 키를 통해서 구분
    const movie1 = { title: 'Titanic', image: 'a.jpg' }
    const user1 = { id: 'user1', name: 'Yang', pw: 'sdafkjdsafl', no: 115 }
    console.log('movie1.title: ', movie1.title)
    console.log('user1.name: ', user1.name)
    // console의 정체는 객체이다. 그리고 자바스크립트 자체도 거대한 하나의 객체이다.
    console.log('a')
    console.error('a')
    // 객체는 '연관성이 있는 일련의' 변수, 함수로 이루어져 있다.
    console.log(Math.PI) // Math라고 하는 JS 내장 객체의 변수중 하나.
    console.log(Math.floor(3.14)) // Math라고 하는 내장 객체의 함수중 하나.

    // JSON 타입 : JS Object Notation
    const user2 = { id: 'user2', name: 'Hong', pw: 'sdafkjdsafl', no: 116 }
    const user3 = { id: 'user3', name: 'Park', pw: 'sdafsdafkjdsafl', no: 117 }
    const user4 = { id: 'user4', name: 'Kim', pw: 'sdafkjdsasdaffl', no: 118 }
    const user5 = { id: 'user5', name: 'Hwang', pw: 'asdfsdafkjdsafl', no: 119 }
    const userList = [user1, user2, user3, user4, user5]
    for (let i = 0; i < userList.length; i++) {
        console.log(userList[i].id)
    }

    // 암묵적 캐스팅 : String > Number > Boolean 순
    const cast = 'Str' + 1 + true
    console.log(cast) // 'Str1true'라는 String이 됨
}
