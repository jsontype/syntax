import React from 'react'

// 방법1
// function Hello(props) {
//     return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
// }

// 방법2
function Hello ({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
}

// defaultProps : props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello