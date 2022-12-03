import React from "react";
import Todos from "./Todos";

import { addTodo, completeTodo, deleteTodo } from "../../modules/todos";
import { useSelector, useDispatch } from "react-redux";

export default function TodosContainer() {
  // useSelector : state를 조회하는 react-redux hook
  const todos = useSelector((state) => state.todos);

  // useDispatch : action을 dispatch(실행)하는 react-redux hook
  const dispatch = useDispatch();
  const onCreate = (title) => dispatch(addTodo(title));
  const onCompleted = (id) => dispatch(completeTodo(id));
  const onDelete = (id) => dispatch(deleteTodo(id));

  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onCompleted={onCompleted}
      onDelete={onDelete}
    />
  );
}
