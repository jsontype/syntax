// CJS Module : CommonJS
const express = require("express")
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// Router Setting
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

// Router
app.get("/", (_req, res) => {
  res.render("index.html") // ユーザーのリストを表示
})

app.get("/user/:userId", (_req, res) => {
  res.render("user.html") // ユーザーの詳細を表示
})

app.get("/create", (_req, res) => {
  res.render("create.html") // ユーザーの新規作成
})

app.get("/update", (_req, res) => {
  res.render("update.html") // ユーザーの更新
})

app.get("/delete", (_req, res) => {
  res.render("delete.html") // ユーザーの削除
})

app.get("/login", (_req, res) => {
  res.render("login.html") // ログイン
})
