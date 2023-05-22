import React from "react"
import Button from "./components/Button"

const App = () => {
  const handleClick = () => {
    console.log("버튼이 클릭되었습니다!")
  }

  return (
    <div>
      <Button
        text="전송"
        onClick={handleClick}
        style={{
          backgroundColor: "gray",
          color: "white",
          fontSize: "16px",
          padding: "10px",
        }}
        disabled={false}
      />
    </div>
  )
}

export default App
