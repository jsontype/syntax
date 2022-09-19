// server.js : express를 호출
const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// Express로 웹페이지를 표현하는 방법(2) : Static 폴더를 사용해서 라우팅
app.use(express.static('public'))

app.get('/dog', (req, res) => {
  res.send(`
    <h1>Hello Doggy!</h1>
    <img src="/dog.png" width="500px">
  `)
})