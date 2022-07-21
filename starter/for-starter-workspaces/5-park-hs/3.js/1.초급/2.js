function act() {
    // 변수 선언
    // let a = 1 // 변수.
    // const b = 1 // 상수(값이 안 바뀜). 

    // 데이터 타입
    // let으로 선언, 일반 데이터타입 (값 참조형) : Number, String, Boolean
    // const로 선언, 객체 데이터타입 (주소 참조형) : Array, Object
    let a = 12 // 연산 가능
    // 연산자 종류
    let test = 0
    test = test + 5
    test = test - 2
    test = test * test
    test = test / 2 // 4.5
    test = test ** 2 // 4.5 x 4.5
    test = test % 3 // 3으로 나눈 나머지
    let b = '12' // 연산 불가능
    let c = true

    // 배열(Array) : 인덱스와 밸류로 이루어짐
    const arr = [1, 2, 3, 4, 5] // 인덱스 0번째는 a[0]이고 값은 1
    // 배열의 추가
    arr.push(6)
    arr.push(7)
    // 배열의 삭제
    arr.pop() // 마지막꺼 하나 삭제
    arr.splice(2, 2) // [1, 2, 5, 6]
    // 배열의 값 출력
    console.log(arr)
    console.log(arr[3])
    console.log(arr[arr.length - 1]) // 마지막 값

    // 객체(Object) : 키와 밸류로 이루어짐
    const obj = { id: 'azumaapp', pw: 'sdfjewflk', name: 'yang dh', no: 154 }
    console.log(obj['id']) // 이렇게도 꺼낼 수 있다.
    console.log(obj.pw)
    console.log(obj.name)
    console.log(obj.no)

    // JSON 데이터타입
    const userInfo = [
        { id: 'azumaapp', pw: 'sdfjewflk', name: 'yang', no: 154 },
        { id: 'kimikimi', pw: 'df134wflk', name: 'kim', no: 155 },
        { id: 'parkupaku', pw: 'sdjew1234flk', name: 'park', no: 156 },
        { id: 'hhhwang', pw: '1aafjewflk', name: 'hwang', no: 157 }
    ]

    for (let i = 0; i < userInfo.length; i++) {
        console.log(userInfo[i].no, '번째 고객 이름: ', userInfo[i].name)
    }
}
