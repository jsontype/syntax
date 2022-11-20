import React, { useRef, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

// API로부터 fetch해서 받아올 초기값 (가상)
const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "admin",
      email: "admin@test.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "test@test.com",
      active: false,
    },
    {
      id: 3,
      username: "yang",
      email: "yang@test.com",
      active: false,
    },
  ],
};

// 리듀서를 쓰기 위한 첫번째 준비 - 액션 타입별 액션 설정 : useReducer를 사용하는 부분
function reducer(state, action) {
  switch (action.type) {
    // 인풋값 입력대로 수정하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };

    // 사용자 추가하는 액션타입
    case "CREATE_USER":
      console.log(action);
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user], // arr.push 대신, spread 연산자를 사용하는 방법
        // users: state.users.concat(action.user) // arr.push 대신, concat 함수를 사용하는 방법
      };

    // 사용자 수정하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };

    // 사용자 삭제하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    // 사용자 조회하는 액션타입
    default:
      return state;
  }
}

export default function User() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
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
