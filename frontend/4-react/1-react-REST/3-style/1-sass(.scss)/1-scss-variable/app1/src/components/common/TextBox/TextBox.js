import React from 'react'
import './TextBox.scss'

export default function TextBox ({ text }) {
  return (
    <div className='TextBox'>
      {text}
    </div>
  )
}
