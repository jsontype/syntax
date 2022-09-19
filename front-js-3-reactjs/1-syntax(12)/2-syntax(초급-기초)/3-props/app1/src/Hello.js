import React from 'react'

// 2. 프롭 받는다. props를 받아서 쓰는 법과 비구조화 할당으로 받는 법 두 가지 방법이 있다.

// 3. props를 받아서 쓰는 법 (토글)
// export default function Hello(props) {
//     return (
//         <div>Hello {props.name} {props.mark}</div>
//     )
// }

// 4. 비구조화 할당으로 받는 법 (토글) : props를 여러번 쓰지 않아도 되어 더 편리하므로 더 자주 쓴다.
export default function Hello({name, mark}) {
    return (
        <div>Hello {name} {mark}</div>
    )
}
