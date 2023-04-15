import React, { useEffect } from 'react'

const User = ({ user, onRemove, onToggle }) => {
    useEffect(() => {
        console.log(user);
    })
    return (
        // 배열의 수정 : for if 문 대신 map과 3항연산자 또는 && || 를 사용한다
        // 여기서는 active 값에 따라 폰트의 색상을 바꿔준다. 
        // cursor 필드에 마우스를 올렸을때 커서를 손가락 모양으로 바꾼다.
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

export default function UserList({ users, onRemove, onToggle }) {
    // 배열을 컴포넌트화 해서 재사용할 때의 포인트
    // 포인트1. 컴포넌트를 map으로 돌려서 동적 배열크기에 대응
    // 포인트2. 컴포넌트에 map을 쓸 때 key를 설정하지 않으면 "중간의 값이 바뀌었을때 그 하위 값들이 전부 변해버린다." key값을 사용한다면 key를 이용해 "중간의 값만 추가하게 된다." 훨씬 효율적인 처리가 가능하므로 필수. 
    // 현재의 문제점 : 지금은 동일 username을 허용하므로 중복의 문제점이 있음(콘솔로그에 뜨는 에러 참조). 나중에, 보이지 않는 id라는 키를 사용해서 해결해야함.
    return (
        <div>
            {users.map(user => (
                <User
                user={user}
                key={user.id}
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
        </div>
    )
}
