import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../../modules/todos";
import Todos from "./";

export default function TodosContainer() {
  // state 조회
  const todos = useSelector((state) => state.todos);

  // action 디스패치
  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));
  const onDelete = (id) => dispatch(deleteTodo(id));

  // UI 컴포넌트에 state, action 붙여서 UI 컴포넌트를 렌더링
  return (
    <div>
      <Todos
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}
