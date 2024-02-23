import React from "react"
import useUsers from "./useUsers"

const UserList = () => {
    // 커스텀훅 사용하여 API fetch 데이터 취득
    const { data } = useUsers()

    // 취득한 API fetch 결과를 렌더링
    return (
        <section>
            <h1>사용자 목록</h1>
            {data && (
                <ul>
                    {data.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        )
                    })}
                </ul>
            )}
        </section>
    )
}

export default UserList
