import React from 'react'

// 2. 프롭 받는다.
export default function Hello({name, mark}) {
    return (
        // 3. 프롭 쓴다.
        <div>Hello {name} {mark}</div>
    )
}
