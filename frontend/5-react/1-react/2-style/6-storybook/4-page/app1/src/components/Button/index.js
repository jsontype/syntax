import React from "react"

const ButtonComponent = ({ text, onClick, style, disabled }) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {text}
    </button>
  )
}

export default ButtonComponent
