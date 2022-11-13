import React, { useState, useRef } from "react";

export default function Todos() {
  // JS
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  let nextId = useRef(1);

  const onChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const onCreate = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nextId.current,
      title: inputText,
      completed: false,
      userId: 1,
    };
    nextId.current++;
    setTodos([...todos, newTodo]); // push
  };

  const onDelete = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    ); // splice
  };

  const onCompleted = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item };
      })
    );
  };

  // 간접적으로 render 되어지는 컴포넌트안의 하위 컴포넌트일 경우 + 상위 컴포넌트의 이벤트를 관리할 경우 => 함수형 업데이트 필요
  const render = todos.map((item) => {
    return (
      <div key={item.id}>
        <span>#{item.id} / </span>
        <span
          className={item.completed ? "done" : ""}
          onClick={() => onCompleted(item.id)}
        >
          {item.title} {item.completed === true && "👍"}
        </span>
        <span onClick={() => onDelete(item.id)}>❌</span>
      </div>
    );
  });

  // XML
  return (
    <div>
      <h1>투두 앱</h1>
      <form onSubmit={onCreate}>
        <input
          name="todo"
          type="text"
          value={inputText}
          onChange={onChange}
        ></input>
        <button type="submit">send</button>
      </form>
      <div>{render}</div>
    </div>
  );
}
