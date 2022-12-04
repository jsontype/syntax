import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} / {user.username}
            </li>
          );
        })}
      </ul>
      <button onClick={fetchUsers}>새로고침</button>
    </div>
  );
}
