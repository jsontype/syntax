function async1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => console.log(json))
}

function sync1() {
  console.log("hey")
}

// 비동기처리
async1()

// 동기처리
sync1()
