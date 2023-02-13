// server.js : express를 호출
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Start Server : http://localhost:${port}`)
})

// Express로 웹페이지를 표현하는 방법(1) : GET 방식 라우팅

// 1. GET QUERY STRING : query string으로 입력한 리퀘스트 값을 그대로 리스폰스에 넣어서 리퀘스트 값을 확인해보자.
app.get('/query', function(req, res){
    res.send('id: ' + req.query.id + '<br>name: ' + req.query.name);
});
// 앱 실행후 http://localhost:3000/query?id=developer&name=yang (query string의 예시이다)에서 확인해보자. 

// 마지막 파라미터는 화살표 함수로도 이용할 수 있다.
app.get('/login', (req, res) => {
    res.send('<h1>로그인해주세요.</h1>')
})
  
// 2. GET SEMANTIC URL : query string은 예쁘지 않으니, 검색엔진에서도 더 잘 잡아주는 최근 트렌드인 semantic url을 이용해서 해보자.
app.get('/page/:pageId/:chapterId', function(req, res) {
    res.send(req.params)
})
// 앱 실행후 localhost:3000/page/HTML/Snippet (semantic url의 예시이다)에서 확인해보자.