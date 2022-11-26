import React from 'react'
import './style.css'

export default function Greeting2 (props) {
    const hi = props.language && props.language === 'ko' ? '안녕' : 'Hi'

    return (
        <div className='hi2'>{props.name} {hi}!</div>
    )
}
