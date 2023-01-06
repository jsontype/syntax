import React from 'react'

const Hello = () => {
    // JS 로직 부분 : JS 문법 사용
    const name = 'Kim'

    // CSSOM 넣기
    const style = {
        color: 'red',
    }

    // HTML 렌더링해서 리턴하는 부분 : JSX 문법 사용
    return (
        <div style={style}>
            {console.log(name)}
            Hello! {name}
        </div>
    )
}

export default Hello