// express를 통해 프론트엔드 서버 구축
const express = require("express")
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// 라우터 설정
app.set("views", __dirname + "/views/")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

// 라우터 : '/*'를 넣어서 url path별로 처리할 페이지를 컨트롤해줌
app.get("/", (req, res) => {
  res.render("index.html")
})

app.get("/about", (req, res) => {
  res.render("about.html")
})
