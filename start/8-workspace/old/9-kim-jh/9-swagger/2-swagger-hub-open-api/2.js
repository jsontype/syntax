fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const result = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};
