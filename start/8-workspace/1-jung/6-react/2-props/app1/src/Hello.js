import React from "react"

// export default function Hello(props) {
export default function Hello({ name, mark }) {
  // JS

  // HTML
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* {props.name}님, 안녕하세요{props.mark} */}
          {name}님, 안녕하세요{mark}
        </header>
      </div>
    </>
  )
}
