import React from 'react'

function Hello({name, isSpecial, isPremium}) {
    return (        
        <div>
            { isSpecial && '스페셜' } { isPremium ? '유료고객님': '무료고객님'} {name}님, 안녕하세요
        </div>
    )
}

export default Hello