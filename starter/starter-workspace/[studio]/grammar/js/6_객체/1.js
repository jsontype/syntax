// 객체 (Object) : 키와 밸류가 있는 변수, 순서X
// 배열 (Array) : 인덱스와 밸류가 있는 변수, 순서O
function clicked() {
    let a = { 'id': 'azuma', 'pw': 'asdfg123', 'email': 'email@email.com' }
    // console.log('a객체:', a)
    // console.log('a의 id키의 값', a.id)
    // console.log('a의 id키의 값', a['id'])

    // Object의 추가
    a.gender = 'male'
    // console.log('a객체:', a)
    // console.log('a의 gender키의 값', a.gender)

    // Object의 삭제
    delete a.email
    // console.log('a객체:', a)
    // console.log('a의 email키의 값:', a.email)

    // Object와 Array의 차이

    // JSON 타입의 예
    // 고객정보 [{고객1}, {고객2}, {고객3}, ...]
    let b = []
    b.push({ 'id': 'azuma', 'pw': 'asdfg123', 'email': 'email@email.com' })
    b.push({ 'id': 'user1', 'pw': 'user1123', 'email': 'user1@email.com' })
    b.push({ 'id': 'user2', 'pw': 'user2123', 'email': 'user2@email.com' })
    b.push({ 'id': 'user3', 'pw': 'user3123', 'email': 'user3@email.com' })
    b.push({ 'id': 'user4', 'pw': 'user4123', 'email': 'user4@email.com' })    
    // console.log('고객정보 JSON:', b)
    // console.log('2번째 고객의 email을 알고싶다.:', b[1].email)
    // console.log('2번째 고객의 email을 알고싶다.:', b[1]['email'])

    // Object와 일반변수의 차이 : 일반변수는 값을 참조하지만, Object는 주소를 참조한다.
    let int1 = 1
    let int2 = int1
    int1 = 2
    // console.log('int2:', int2)
    // let obj1 = { 'a': 1, 'b': 2 }
    // let obj2 = obj1
    // obj1.a = 2
    // console.log('obj2.a:', obj2.a)

    // ★객체를 일반변수처럼 값만 복사하고 싶을 때 : JSON.parse(JSON.stringify(obj1))
    // JSON.stringify() : 문자화를 해서 카피를 한다. 단, 이 결과값은 객체가 아니라 문자열이다.
    // JSON.parse() : 파싱(컴퓨터가 이해할 수 있는 형태로 번역)한다. 여기서는 객체로 바꿔준다.
    let obj1 = { 'a': 1, 'b': 2 }
    // let obj2 = JSON.stringify(obj1)
    // console.log(obj2)
    let obj2 = JSON.parse(JSON.stringify(obj1))
    // console.log(obj2) 
    // obj1.a = 2
    // console.log('obj1.a:', obj1.a) 
    // console.log('obj2.a:', obj2.a) 

    // 콘솔로그의 정체
    console.log(console)
    console.error('에러입니다.')
}