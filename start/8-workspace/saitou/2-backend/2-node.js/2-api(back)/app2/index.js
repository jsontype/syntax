const express = require("express")
const app = express()
const port = 8080

// Backend API Documentation
const readme = `
  <h2>API</h2>
  <ul>
    <li>[GET] /users : ユーザーリスト照会</li>
    <li>[GET] /users/:userId : IDに該当するユーザー照会</li>
  </ul>
`

app.get("/", (_req, res) => {
  return res.send(readme)
})

// Backend API Routes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", require("./routes/users"))

// Listener
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
