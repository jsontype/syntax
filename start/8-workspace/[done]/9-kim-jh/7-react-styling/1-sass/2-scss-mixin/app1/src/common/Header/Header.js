import React from 'react'
import './Header.scss'

export default function Header({ text }) {
  return (
      <div>
          <h1 className="title">{text}</h1>
      </div>
  )
}
