// 1. $ npm i mysql



// 2. 먼저 DB 연동을 한다.
const mysql = require('mysql') // mysql 모듈 로드
const conn = { // mysql 접속 설정
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'php'
}



// 3. 연동한 뒤, DB에 접속해서 DB를 조작한다.
let connection = mysql.createConnection(conn) // DB 커넥션 생성
connection.connect() // DB 접속
let sql = "" // SQL문을 담을 변수 선언

// 삽입
sql = "INSERT INTO `user` VALUES (9, 'test9@test.com', 'test9', 'sadlkewfj', 'sdflkwejaf', null, null)" // 삽입 SQL문 : INSERT INTO [TABLE] VALUES (?, ?, ?)
connection.query(sql, function (err, results, fields) { // SQL문을 실행 : DB를 조작
    if (err) { console.log(err) }
    console.log(results)
})

// 삭제
sql = "DELETE FROM user WHERE no = 9" // 삭제 SQL문 : DELETE FROM [TABLE] WHERE [조건]
connection.query(sql, function (err, results, fields) { // SQL문을 실행 : DB를 조작
    if (err) { console.log(err) }
    console.log(results)
})

// 수정
let name = '헬로우' // 수정할 내용을 변수에 담는다.
sql = `UPDATE user SET name = '${name}' WHERE no = 8` // 수정 SQL문 : UPDATE [TABLE] SET 컬럼 = 수정값1[, 컬럼2 = 수정값2 ...] WHERE [조건]
connection.query(sql, function (err, results, fields) { // SQL문을 실행 : DB를 조작
    if (err) { console.log(err) }
    console.log(results)
})

// 조회
sql = "SELECT * FROM user" // 조회 SQL문 : SELECT * FROM [TABLE]
connection.query(sql, function (err, results, fields) { // SQL문을 실행 : DB를 조작
    if (err) { console.log(err) }
    console.log(results)
})



// 4. DB 접속 종료
connection.end()
