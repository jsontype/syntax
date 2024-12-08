const express = require("express")
const app = express()
const port = 8080
const cors = require("cors")

// Backend API Documentation
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

app.get("/", (_req, res) => {
  return res.send(readme)
})

// Backend API Routes
// 一部のoriginを許可する
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'FETCH'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }))

// 全てのoriginを許可する
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", require("./routes/users"))

// Listener
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
