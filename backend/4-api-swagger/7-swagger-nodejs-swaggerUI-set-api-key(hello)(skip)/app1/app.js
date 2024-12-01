// Plus 기능의API 만들기 시작 : 주석 부분이 추가된 부분

'use strict';

var SwaggerExpress = require('swagger-express-mw');
// 1. SwaggerUI 미들웨어를 불러온다.
var SwaggerUI = require('swagger-tools/middleware/swagger-ui');

var app = require('express')();
module.exports = app;

var config = {
  appRoot: __dirname,
  // 4. API Key를 설정(1) : 요청 헤더값이 api_key이고, 값이 'my_key'일 경우에만 실행을 허용한다.
  swaggerSecurityHandlers: {
    api_key: function (req, authOrSecDef, scopesOrApiKey, cb) {
        if ('my_key' === scopesOrApiKey) {
            cb();
        } else {
            cb(new Error('Access Denined!'));
        }
    }
  }  
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // 2. 서버쪽에 host주소/포트번호를 설정한다.
  swaggerExpress.runner.swagger.host = '127.0.0.1:10010';
  // 3. swaggerUI 미들웨어를 연동한다.
  app.use(SwaggerUI(swaggerExpress.runner.swagger));
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
