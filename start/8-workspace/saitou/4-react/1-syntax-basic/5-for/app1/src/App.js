import "./App.css";

export default function App() {
  const userList = [
    { id: 1, name: "Saito", email: "saito@googl.com" },
    { id: 2, name: "Yamamoto", email: "yamamoto@googl.com" },
    { id: 3, name: "Yang", email: "yang@googl.com" },
  ];

  const render = userList.map((user) => {
    return (
      <div key={user.id}>
        <div>名前：{user.name}</div>
        <div>メアド：{user.email}</div>
        <hr />
      </div>
    );
  });

  return <div className="App">{render}</div>;
}
