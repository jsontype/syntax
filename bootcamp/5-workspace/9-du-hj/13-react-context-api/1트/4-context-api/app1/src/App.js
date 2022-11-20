import React, { useState, useReducer, createContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import User from "./components/User";
import UserTest from "./components/UserTest";

// 1. context 만들기
export const UserDispatch = createContext(null);

// API로부터 fetch해서 받아올 초기값 (가상)
const initialState = {
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
      };

    // 사용자 추가하는 액션타입
    case "CREATE_USER":
      // console.log(action);
      return {
        users: [...state.users, action.user], // arr.push 대신, spread 연산자를 사용하는 방법
        // users: state.users.concat(action.user) // arr.push 대신, concat 함수를 사용하는 방법
      };

    // 사용자 수정하는 액션타입 : state 객체의 불변성을 지키기 위해 spread 연산자 사용
    case "TOGGLE_USER":
      return {
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

export default function App() {
  // JS
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  // XML
  return (
    <div>
      {/* 2. context안에는 Provider라고 하는 컴포넌트가 있다.
        이 컴포넌트 안의 value props안에 값을 넣어서 context의 값을 정할 수 있다.
        Provider로 감싸진 컴포넌트 중 어디서든지 Context의 값을 다른 곳에서 조회할 수 있다. */}
      <UserDispatch.Provider value={dispatch}>
        <Counter />
        <User state={state} dispatch={dispatch} />

        <hr />
        <button onClick={onClick}>눌러</button>
        {isOpen && <UserTest />}
      </UserDispatch.Provider>
    </div>
  );
}
