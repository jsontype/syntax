import React, { useState } from "react"
import Button from "../../components/Button"
import Alert from "../../components/Alert"

const AlertList = () => {
  const [alertType, setAlertType] = useState(null)

  const showAlert = (type) => {
    setAlertType(type)
    setTimeout(() => {
      setAlertType(null)
    }, 3000)
  }

  return (
    <div>
      <Button
        text="success"
        style={{
          backgroundColor: "#dff0d8",
          color: "#3c763d",
          fontSize: "16px",
          padding: "10px",
        }}
        disabled={false}
        onClick={() => showAlert("success")}
      />
      <Button
        text="info"
        style={{
          backgroundColor: "#d9edf7",
          color: "#31708f",
          fontSize: "16px",
          padding: "10px",
        }}
        disabled={false}
        onClick={() => showAlert("info")}
      />
      <Button
        text="warning"
        style={{
          backgroundColor: "#fcf8e3",
          color: "#8a6d3b",
          fontSize: "16px",
          padding: "10px",
        }}
        disabled={false}
        onClick={() => showAlert("warning")}
      />
      <Button
        text="danger"
        style={{
          backgroundColor: "#f2dede",
          color: "#a94442",
          fontSize: "16px",
          padding: "10px",
        }}
        disabled={false}
        onClick={() => showAlert("danger")}
      />
      {alertType && (
        <Alert
          message={`This is a ${alertType} alert.`}
          type={alertType}
          onClose={() => setAlertType(null)}
        />
      )}
    </div>
  )
}

export default AlertList
