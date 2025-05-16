export default function StudyFor() {
  // JS
  const userList = [
    { id: 1, name: 'John', email: 'John@example.com' },
    { id: 2, name: 'Smith', email: 'Smith@example.com' },
    { id: 3, name: 'Jane', email: 'Jane@example.com' },
    { id: 4, name: 'Yang', email: 'Yang@example.com' },
    { id: 5, name: 'Shin', email: 'Shin@example.com' },
  ]

  const render = userList.map((user) => {
    return (
      <div key={user.id}>
        <span>#{user.id} / </span>
        <span>{user.name} / </span>
        <span>{user.email}</span>
      </div>
    );
  });

  // XML
  return (
    <div>
      <h2>Users</h2>
      { render }
    </div>
  );
}
