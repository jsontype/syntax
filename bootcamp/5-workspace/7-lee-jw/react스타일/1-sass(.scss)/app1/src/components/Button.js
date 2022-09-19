import React from 'react'
import './Button.scss'

function Button({ children, color }) {
    return <button className={`Button ${color}`}>{children}</button>
}

export default Button
