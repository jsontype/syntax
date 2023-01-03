import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (!users) return null;

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
