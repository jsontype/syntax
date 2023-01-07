const express = require("express")
const app = express()
const port = 3000

// app.get("/", (req, res) => res.send("Hello World!"))
// app.use("/", (req, res) => res.sendFile(__dirname + "/index.html"))

// api doc 연결
const readme = `
  <div>
    <h2>API 리스트</h2>
    <ul>
      <li><a href="#">[GET] https://jsontype.github.io/api</a> : API DOCUMENTATION</li>
      <li><a href="#">[GET] https://jsontype.github.io/api/users</a> : 전체 유저 목록 조회</li>
      <li><a href="#">[GET] https://jsontype.github.io/api/users/:userId</a> : ID에 해당하는 유저 조회</li>
    </ul>
  </div>
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
app.listen(port, () => console.log(`listening on port ${port}!`))
