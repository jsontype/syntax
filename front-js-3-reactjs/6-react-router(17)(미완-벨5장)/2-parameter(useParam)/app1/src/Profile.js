import React from 'react'
// 파라미터값을 받기 위해 useParams 임포트
import { useParams } from 'react-router-dom'

// 프로필에서 사용 할 데이터
const profileData = {
    jsontype: {
        name: 'D.Yang',
        description:
            'Frontend Engineer'
    },
    kimkim12: {
        name: 'K.Kim',
        description: 'Backend Engineer'
    }
}

/**
 * URL내의 파라미터를 통해 username과 profile 정보를 추출하여 표시한다.
 * @param {object} match 현재 URL주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있다.
 * @returns 렌더링 엘리먼트
 */
const Profile = () => {
    // 파라미터를 받아올 땐 useParams() 값을 참조한다.
    const params = useParams()
    const { username } = params
    console.log(params)
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

export default Profile
