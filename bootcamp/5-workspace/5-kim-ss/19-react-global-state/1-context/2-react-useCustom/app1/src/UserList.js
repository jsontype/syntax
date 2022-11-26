import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <b
        onClick={() => onToggle(user.id)}
        style={{
          color: user.active ? "green" : "black",
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
