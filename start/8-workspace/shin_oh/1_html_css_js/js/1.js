// 파라미터 Parameter 가 없는 함수
function alertMessage1 () {
  alert("자동사입니다. 목적어 없어요.");
  console.log("Hello World!");
}

// 파라미터 Parameter 가 있는 함수
// 파라미터 : 목적어
function alertMessage2 (text) {
  alert(text);
}

// DOM : Document Object Model, JS가 HTML을 조작하기 위해서 document라고 하는 변수 안에 HTML 정보를 담아둔 것
function clickButton () {
  const id = document.querySelector('#id').value;
  const email = document.querySelector('#email').value;
  const number = document.querySelector('#number').value;
  const gender = document.querySelector('#gender').value;
  const married = document.querySelector('#married').value;

  alert(id);
  alert(email);
  alert(number);
  alert(gender);
  alert(married);
}
