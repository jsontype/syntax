import React from 'react'

// 파라미터안의 {children} (=props.children)이 없다면, Wrapper는 Hello 컴포넌트들을 가려버릴 것이다.
function Wrapper ({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper