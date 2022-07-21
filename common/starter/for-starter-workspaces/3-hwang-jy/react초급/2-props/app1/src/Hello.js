// 1. 컴포넌트 만든다.
import React from 'react'

// 6. 프롭 받는다.
function Hello({name, mark}) {
    return (
        // 7. 프롭 쓴다.
        <div>Hello {name} {mark}</div>
    )
}

export default Hello
