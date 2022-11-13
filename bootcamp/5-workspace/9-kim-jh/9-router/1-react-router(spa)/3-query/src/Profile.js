import React from 'react'
import { useParams } from 'react-router-dom'

export const profileData = {
    jsontype: {
        name: 'D.Yang',
        description: 'Fullstack Engineer'
    },
    kim: {
        name: 'Kim00',
        description: 'Backend Engineer'
    },
    Song: {
        name: 'Song01',
        description: 'Frontend Engineer'
    }
}

export default function Profile() {
    const params = useParams()
    const { username } = params
    const profile = profileData[username]
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}
