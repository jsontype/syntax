// 1. $ npm i mysql로 먼저 mysql을 앱 내에 설치해야한다.

// 2. 먼저 DB 연동을 한다.
const mysql = require("mysql") // mysql 모듈 로드
const conn = {
  // mysql 접속 설정
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "db1",
}

// 3. 연동한 뒤, DB에 접속해서 DB를 조작한다.
let connection = mysql.createConnection(conn) // DB 커넥션 생성
connection.connect() // DB 접속
let table = "user" // DB의 table schema의 이름
let sql = "" // SQL문을 담을 변수 선언
let key = 9 // auto increment 적용된 primary key 값 (여기서는 no 컬럼에 넣을 값임)

// 삽입 : INSERT INTO [TABLE] VALUES (?, ?, ?)
sql = `INSERT INTO ${table} VALUES (${key}, 'test9', 'test1234', '김아무개', 'tester9', '00000101', '남자', '12341234', 'testtest@test.com', 'South Korea, Seoul', '2019-09-23')`
connection.query(sql, function (err, results, fields) {
  // SQL문을 실행 : DB를 조작
  if (err) {
    console.log(err)
  }
  console.log(results)
})

// 수정 : UPDATE [TABLE] SET 컬럼 = 수정값1[, 컬럼2 = 수정값2 ...] WHERE [조건]
// let name = "헬로우"
// sql = `UPDATE ${table} SET username = ${name} WHERE no = ${key}`
// connection.query(sql, function (err, results, fields) {
//   // SQL문을 실행 : DB를 조작
//   if (err) {
//     console.log(err)
//   }
//   console.log(results)
// })

// 삭제 : DELETE FROM [TABLE] WHERE [조건]
// sql = `DELETE FROM ${table} WHERE no = ${key}`
// connection.query(sql, function (err, results, fields) {
//   // SQL문을 실행 : DB를 조작
//   if (err) {
//     console.log(err)
//   }
//   console.log(results)
// })

// 조회 : SELECT * FROM [TABLE]
sql = `SELECT * FROM ${table}`
connection.query(sql, function (err, results, fields) {
  // SQL문을 실행 : DB를 조작
  if (err) {
    console.log(err)
  }
  console.log(results)
})

// 일부 조회 : SELECT * FROM [TABLE] WHERE [조건]
sql = `SELECT * FROM ${table} WHERE no = ${key}`
connection.query(sql, function (err, results, fields) {
  // SQL문을 실행 : DB를 조작
  if (err) {
    console.log(err)
  }
  console.log(results)
})

// 4. DB 접속 종료
connection.end()
