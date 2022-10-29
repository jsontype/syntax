import React from 'react'
import './style.css'

export default function Greeting ({ name, language }) {
    const hi = language && language === 'ko' ? '안녕' : 'Hi'

    return (
        <div className='hi'>{name} {hi}!</div>
    )
}
