import React, { useState, useEffect }  from 'react'
import UserList from '../components/UserList'
import Spinner from '../components/Spinner'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setUsers(json)
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <h1>Users</h1>
            {loading? <Spinner /> : <UserList users={users} />}
        </>
    );
};

export default Users
