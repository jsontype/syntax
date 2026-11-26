const express = require("express")
const app = express()
const port = 8080

// app.get("/", (req, res) => res.send("Hello World!"))
// app.use("/", (req, res) => res.sendFile(__dirname + "/index.html"))

// api doc 연결
const readme = `
  <h2>API</h2>
  <ul>
    <li>[GET] /users : ユーザーリスト照会</li>
    <li>[GET] /users/:userId : IDに該当するユーザー照会</li>
    <li>[POST] /users/create : ユーザー登録</li>
    <li>[PUT] /users/update/:userId : ユーザー更新</li>
    <li>[DELETE] /users/delete/:userId : ユーザー削除</li>
  </ul>
`
app.get("/", (req, res) => {
  return res.send(readme)
})

// api 연결
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const userRouter = require("./routes/users")
app.use("/users", userRouter)

// port listner 연결
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
