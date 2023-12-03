import React, { useState, useRef } from "react";
import "./Todos.css";

type TodosProps = {
  id: number;
  content: string;
  isDone: boolean;
};

export default function Todos() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [inputText, setInputText] = useState("");
  const key = useRef(todos.length + 1);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: key.current++, content: text, isDone: false }]);
  };
  const toggleTodo = (id: number) =>
    setTodos(
      todos.map((item: TodosProps) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : { ...item };
      })
    );
  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter((item: { id: number }) => {
        return item.id !== id;
      })
    );
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  };

  const onChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const render = todos.map((todo: TodosProps) => {
    return (
      <div className="todo" key={todo.id}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={`${todo.isDone}Done`}>{todo.content}</span>
        <span onClick={() => deleteTodo(todo.id)}> 🗑️</span>
      </div>
    );
  });

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={onSubmit}>
        <input
          value={inputText}
          onChange={onChange}
          placeholder="할일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <div>{render}</div>
    </>
  );
}
