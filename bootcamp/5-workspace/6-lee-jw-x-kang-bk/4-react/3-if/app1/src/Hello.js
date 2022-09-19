import React from 'react'

const Hello = ({isSpecial, isPremium, position, id}) => {
    // JS 로직 부분 : JS 문법 사용
    const name = 'Kim'

    // CSSOM 넣기
    const style = {
        color: 'red',
    }

    // HTML 렌더링해서 리턴하는 부분 : JSX 문법 사용
    return (
        <div style={style}>
            Hello!&nbsp;
            { id ? id+'번.' : '?번.'}
            { position && (position === 'frontend' && '프론트엔드') }&nbsp;
            { position && (position === 'backend' && '백엔드') }&nbsp;
            { isPremium ? '유료' : '무료' }&nbsp;
            { isSpecial && '우수' }&nbsp;
            고객님 : {name}
        </div>
    )
}

export default Hello