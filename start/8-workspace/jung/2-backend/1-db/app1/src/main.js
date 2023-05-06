const mysql = require("mysql") // mysql 모듈 로드

const conn = {
  // mysql 접속 설정
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "db2",
}

const connection = mysql.createConnection(conn) // DB 커넥션 생성
connection.connect() // DB 접속
const table = "user" // DB의 table schema의 이름
let sql = "" // SQL문을 담을 변수 선언
let key = 9 // auto increment 적용된 primary key 값 (여기서는 no 컬럼에 넣을 값임)

// 삽입 : INSERT INTO [TABLE] VALUES (?, ?, ?)
// sql = `INSERT INTO ${table} VALUES (${key}, 'test9', 'test1234', '김아무개', 'tester9', '00000101', '남자', '12341234', 'testtest@test.com', 'South Korea, Seoul', current_timestamp())`
// connection.query(sql, function (err, results, fields) {
//   // SQL문을 실행 : DB를 조작
//   err ? console.log(err) : console.log(results) // 에러 또는 결과 처리
//   console.log(fields) // affectedRows, insertId, serverStatus, warningCount 등의 정보를 담고 있음
// })

// 수정 : UPDATE [TABLE] SET 컬럼 = 수정값1[, 컬럼2 = 수정값2 ...] WHERE [조건]
// const updateName = "'헬로우'" // 수정할 값
// sql = `UPDATE ${table} SET username = ${updateName} WHERE no = ${key}`
// connection.query(sql, function (err, results) { // SQL문을 실행 : DB를 조작
//   err ? console.log(err) : console.log(results) // 에러 또는 결과 처리
// })

// 삭제 : DELETE FROM [TABLE] WHERE [조건]
// sql = `DELETE FROM ${table} WHERE no = ${key}`
// connection.query(sql, function (err, results) {
//   // SQL문을 실행 : DB를 조작
//   err ? console.log(err) : console.log(results) // 에러 또는 결과 처리
// })

// 전체 조회 : SELECT * FROM [TABLE]
// sql = `SELECT * FROM ${table}`
// // SQL문을 실행 : DB를 조작
// connection.query(sql, function (err, results) {
//   err ? console.log(err) : console.log(results) // 에러 또는 결과 처리
// })

// 하나 조회 : SELECT * FROM [TABLE] WHERE [조건]
sql = `SELECT * FROM ${table} WHERE no = ${key}`
// SQL문을 실행 : DB를 조작
connection.query(sql, function (err, results, fields) {
  err ? console.log(err) : console.log(results) // 에러 또는 결과 처리
})

// 4. DB 접속 종료
connection.end()
