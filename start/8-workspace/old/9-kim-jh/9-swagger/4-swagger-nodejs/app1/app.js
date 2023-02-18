"use strict";

var SwaggerExpress = require("swagger-express-mw");

// ***! 0. 스웨거 프로젝트 설치
// $ npm i -g swagger
// $ swagger project create app1
// $ swagger project start

// ***! 1. Swagger UI 미들웨어를 호출
var SwaggerUI = require("swagger-tools/middleware/swagger-ui");

var app = require("express")();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // ***! 2. 서버쪽 host주소/포트번호 설정
  swaggerExpress.runner.swagger.host = "127.0.0.1:10010";

  // ***! 3. swaggerUI 미들웨어 연동
  app.use(SwaggerUI(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/hello"]) {
    console.log(
      "try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Scott"
    );
  }
});
