import React from 'react'

// 2. 프롭 받는다. props를 받아서 쓰는 법과 비구조화 할당으로 받는 법 두 가지 방법이 있다.

// 3. props를 받아서 쓰는 법 (토글)
// export default function Hello(props) {
//     console.log('children: ', props.children) // 단수면 문자열, 복수면 배열
//     return (
//         <div>Hello {props.children}</div>
//     )
// }

// 4. 비구조화 할당으로 받는 법 (토글)
export default function Hello({children}) {
    console.log('children: ', children) // 단수면 문자열, 복수면 배열
    return (
        <div>Hello {children}</div>
    )
}
