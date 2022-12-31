import React from 'react'

// 4. 프롭을 파라미터에 넣어서 사용
export default function Hello({family, name}) {
    return (
        <div>Hello {family} {name}!</div>
    )
}
