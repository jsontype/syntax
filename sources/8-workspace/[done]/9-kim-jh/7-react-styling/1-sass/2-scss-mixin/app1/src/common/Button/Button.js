import React from 'react'
import './Button.scss'

export default function Button ({ type, text }) {
    return (
        <div className="btn">
            <button className={type}>{text}</button>
        </div>
    )
}
