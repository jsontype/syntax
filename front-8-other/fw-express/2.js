// server.js : express를 호출
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// views 폴더안에 있는 *.html을 가져오겠다 선언
app.set('views', __dirname + '/views')
// 해당 app은 ejs 템플릿을 사용한다 선언
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// 라우터들의 설정 : '/*'를 넣어서 url path별로 처리할 페이지를 컨트롤해줌
// 렌더링하기
app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/about', (req, res) => {
  res.send('about page!')
})
