const express = require("express")
const app = express()
const port = 3000

// Mock DB 객체
const User = require("./models/User")

// app.get('/', (req, res) => res.send('Hello World!'))
// app.use("/", (req, res) => res.sendFile(__dirname + "/index.html"))
app.get("/", (req, res) => res.send(User))

app.listen(port, () => console.log(`listening on port ${port}!`))
