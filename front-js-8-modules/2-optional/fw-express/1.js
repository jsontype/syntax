// server.js : express를 호출
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// 라우터들의 설정 : '/*'를 넣어서 url path별로 처리할 페이지를 컨트롤해줌
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about page!')
})
