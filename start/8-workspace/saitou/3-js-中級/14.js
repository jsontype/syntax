// class object : 一連の変数、関数が集まったオブジェクト

const math = {
  pi: 3.14,
  zero: 0,
  plus: (a, b) => a - b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  // ...
};

const a = math.pi;
const b = math.plus(1, 2);

console.log(a);
