// server.js : express를 호출
const express = require("express")
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// *** mysql 연동
var mysql = require("mysql")
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "db1",
})

// 라우터들의 설정 : '/*'를 넣어서 url path별로 처리할 페이지를 컨트롤해줌
app.set("views", __dirname + "/views/")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

app.get("/", (req, res) => {
  res.render("index.html")
})

app.get("/about", (req, res) => {
  res.render("about.html")
})

// *** mysql 연동 라우터
app.get("/db", (req, res) => {
  pool.getConnection(function (error, connection) {
    if (error) throw error
    connection.query("SELECT * FROM user", function (error, results, fields) {
      console.log("results: ", results)
      res.send(JSON.stringify(results))
      // 연결 끝났을 때
      connection.release()
      // 에러 났을 때
      if (error) throw error
    })
  })
})
