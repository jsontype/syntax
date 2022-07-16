import React from 'react'

function Hello({isSpecial, isPremium, isOut}) {
    return (
        <div>{isOut || '>'} Hello! { isSpecial && '스페셜고객님' } { isPremium ? '유료' : '무료' }</div>
    )
}

export default Hello
