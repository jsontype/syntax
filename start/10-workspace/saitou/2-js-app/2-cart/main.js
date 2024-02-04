console.log("Hello, world!");

function plus() {
  console.log("plus");
  const number = document.getElementById("count");
  number.innerHTML = Number(number.innerHTML) + 1;
}

function minus() {
  console.log("minus");
  const number = document.getElementById("count");
  if (number.innerHTML > 0) {
    number.innerHTML = Number(number.innerHTML) - 1;
  }
}

// DOM : Document Object Model
console.log(document);
