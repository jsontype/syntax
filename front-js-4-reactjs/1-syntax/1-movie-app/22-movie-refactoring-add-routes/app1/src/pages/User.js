import React, { useState, useEffect }  from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const User = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const { id } = useParams()
    console.log('id: ', id)
    console.log('user: ', user)    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then((response) => response.json())
            .then((json) => {
                setUser(json)
                setLoading(false)
            })
    }, [id])

    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <>
            <h1>User 정보</h1>
            {userDetail}
        </>
    )
}

export default User
