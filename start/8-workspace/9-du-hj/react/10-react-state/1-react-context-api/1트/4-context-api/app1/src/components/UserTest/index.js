import React from "react";
// 1. Context 써서 글로벌 스테이트 조회할려면...
import { useContext, useEffect } from "react";
import { UserDispatch } from "../../App";

export default function UserTest() {
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    dispatch({ type: "TOGGLE_USER", id: 1 });

    return () => {
      dispatch({ type: "TOGGLE_USER", id: 1 });
    };
  }, []);

  return <div>1번 토글했는데 확인좀</div>;
}
