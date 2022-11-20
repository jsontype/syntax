import React, { useRef, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "../../hooks/useInput";

export default function User({ state, dispatch }) {
  const nextId = useRef(4);

  const { users } = state;

  // ★★★ 비구조화 할당을 통해서 커스톰훅을 이용한다.
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  };

  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  };

  const onRemove = (id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  };

  const count = countActiveUsers(users);

  return (
    <>
      {/* 유저추가 폼 표시 */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* 유저리스트 표시 */}
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      {/* 활성 사용자수 표시 */}
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}
