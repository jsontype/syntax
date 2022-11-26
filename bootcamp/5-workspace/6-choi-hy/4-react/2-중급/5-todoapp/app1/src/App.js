import "./App.css";
import { useState, useEffect, useRef } from "react";

// userId 상수
const USER_ID = 1;

export default function App() {
  // JS
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  // key 값의 선언
  let key = useRef(21);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const result = json.filter((item) => {
          return item.userId === USER_ID;
        });
        setTodos(result);
      });
  }, []);

  console.log(todos);

  const onCreate = (e) => {
    e.preventDefault();
    const newTodo = {
      id: key.current,
      title: input,
      completed: false,
      userId: USER_ID,
    };
    setTodos([...todos, newTodo]);
    key.current++;
  };

  const onCompleted = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  };

  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(e);
    setInput("");
  };

  const onDelete = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const render = todos.map((item) => {
    const isCompleted = item.completed && "done";

    return (
      <div key={item.id}>
        <span>#{item.id} / </span>
        <span className={isCompleted} onClick={() => onCompleted(item.id)}>
          {item.title}
        </span>
        <span>{item.completed && "✅"}</span>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    );
  });

  // XML
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          placeholder="할일을 입력하세요"
          name="todo"
          type="text"
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">전송</button>
      </form>
      {render}
    </div>
  );
}
