import React, { useContext } from "react";
import { UserDispatch } from "../../../App";

const UserListItem = ({ user, onRemove, onToggle }) => {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </div>
  );
};

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <UserListItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
