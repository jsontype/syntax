export default function UserList({userList}) {
    const render = userList.map((user) => { return (
        <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    ) })

    return (
        <>
            {render}
        </>
    )
}