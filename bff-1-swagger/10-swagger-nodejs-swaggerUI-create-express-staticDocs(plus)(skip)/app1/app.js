const express = require('express');
const app = express();

// express의 static 함수를 이용해서 public이라는 폴더를 누구나 접속해서 문서를 읽을 수 있게 하기
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 더하기 API
app.get('/plus', function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const result = Number(a) + Number(b);
  res.send(String(result))
});

app.listen(3000, function () {
  console.log('Server Listening on port 3000!');
});
