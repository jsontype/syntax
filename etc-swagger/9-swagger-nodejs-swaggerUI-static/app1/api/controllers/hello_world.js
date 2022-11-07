'use strict';

var util = require('util');

module.exports = {
  hello: hello,
  // 6. 새로운 API의 모듈 작성
  plus: plus,
};

function hello(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}

// 7. 새로운 API의 함수 작성
function plus(req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let result = Number(a) + Number(b);
  res.json(String(result));
}
