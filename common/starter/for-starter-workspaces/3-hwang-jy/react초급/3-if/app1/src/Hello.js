import React from 'react'

function Hello({name, mark, isMoney, isSpecial}) {
    const money = isMoney ? '유료'  : '무료'
    const special = isSpecial && '스페셜 고객님'

    return (
        <div>Hello {name} {money} {special} {mark} </div>
    )
}

export default Hello
