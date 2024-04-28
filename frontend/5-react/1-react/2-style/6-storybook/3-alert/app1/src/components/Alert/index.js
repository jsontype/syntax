import React from "react"
import "./style.css"

const Alert = ({ message, type, onClose }) => {
  const alertClasses = `alert alert-${type}`

  return (
    <div className={alertClasses} role="alert">
      <span>{message}</span>
      <button type="button" className="close" onClick={onClose}>
        &times;
      </button>
    </div>
  )
}

export default Alert
