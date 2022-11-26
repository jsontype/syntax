import { useState } from "react";
import "./App.css";
import UserList from "./UserList";

export default function App() {
  // JS
  const [users, setUsers] = useState([
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
  ]);

  const onRemove = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers((users) =>
      users.map((user) =>
        id === user.id ? { ...user, active: !user.active } : user
      )
    );
  };

  // XML
  return (
    <div className="App">
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}
