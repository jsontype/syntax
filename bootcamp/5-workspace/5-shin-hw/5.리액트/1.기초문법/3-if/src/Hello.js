import React from 'react'

export default function Hello({name, isMoney, isSpecial}) {
    return (
        <div>Hello {name}! {isMoney ? "유료" : "무료"} {isSpecial && "무료"} 고객님</div>
    )
}