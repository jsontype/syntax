import React, { useReducer, useEffect } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Error: unknown action ${action.type}`);
  }
}

export default function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  async function fetchUsers() {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users123"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const loading = state.loading;
  const users = state.data;
  const error = state.error;

  // 미성공
  if (error)
    return (
      <div>
        에러가 발생했습니다.{" "}
        {error.response.status === 404 && (
          <h1>페이지를 찾고 있는데 없어요~~</h1>
        )}
      </div>
    );
  if (loading) return <div>로딩중...</div>;
  if (!users) return null;

  // 성공
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              # {user.id} / {user.name} ({user.username})
            </li>
          );
        })}
      </ul>
    </>
  );
}
