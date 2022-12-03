import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const key = useRef(1);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };

  const onCreate = (input) => {
    const addArr = {
      id: key.current,
      title: input,
      completed: false,
      userId: 1,
    };
    key.current++;
    setTodos([...todos, addArr]); // push
  };

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInput(value);
  };

  const onDelete = (id) => {
    const delArr = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(delArr);
  };

  const onToggle = (id) => {
    const modArr = todos.map((item) => {
      return item.id === id
        ? { ...item, completed: !item.completed }
        : { ...item };
    });
    setTodos(modArr);
  };

  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span># {item.id} / </span>
        {/* ★★ 간접적으로 render 되어지는 하위 컴포넌트는 () => onDelete처럼 "함수형 업데이트" 필요 */}
        <span
          className={item.completed ? "done" : ""}
          onClick={() => onToggle(item.id)}
        >
          {item.title}
        </span>
        <span onClick={() => onDelete(item.id)}>❌</span>
      </div>
    );
  });

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할일을 적어주세요"
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      {render}
    </div>
  );
}

export default App;
