import React, { useState } from "react";
import "./style.css";

export default function Todos({ todos, onCreate, onDelete, onCompleted }) {
  // JS
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(inputText);
    setInputText("");
  };

  // 간접적으로 render 되어지는 컴포넌트안의 하위 컴포넌트일 경우 + 상위 컴포넌트의 이벤트를 관리할 경우 => 함수형 업데이트 필요
  const render = todos.map((item) => {
    return (
      <div
        key={item.id}
        className={item.completed ? "done" : ""}
        onClick={() => onCompleted(item.id)}
      >
        <span>#{item.id} / </span>
        <span>
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
      <form onSubmit={onSubmit}>
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
