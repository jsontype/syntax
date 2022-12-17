"use strict";

var util = require("util");

module.exports = {
  hello: hello,
  // ***! 5. 새로운 API 모듈을 작성
  plus: plus,
};

function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || "stranger";
  var hello = util.format("Hello, %s!", name);
  // this sends back a JSON response which is a single string
  res.json(hello);
}

// ***! 4. 새로운 API 함수 작성
function plus(req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let result = Number(a) + Number(b);
  res.json(String(result));
}
