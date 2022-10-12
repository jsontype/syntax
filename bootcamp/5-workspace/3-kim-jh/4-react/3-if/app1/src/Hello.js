import React from 'react'

export default function Hello({name, isSpecial, isPremium}) {
    const userName = name || 'stranger'
    const special = isSpecial && '스페셜'
    const premium = isPremium ? '유료' : '무료'

    return (
        <div>Hello {userName} {special} {premium} 고객님!</div>
    )
}
