// server.js : express를 호출
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// *** mysql 연동
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'mysql'
});

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

// *** MySQL 라우터
app.get('/db', (req, res) => {
    pool.getConnection(function (error, connection) {
        // 연결되지 않았을 때
        if (error) throw error

        // 연결된 것을 사용하기
        connection.query('select * from test', function (error, results, fields) {
            console.log('The solution is: ', results);
            res.send(JSON.stringify(results))

            // 연결이 끝나면 릴리즈
            connection.release()

            // 연결되지 않았을 때
            if (error) throw error
        })
    })
})