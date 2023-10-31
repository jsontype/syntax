import React from "react"
import "./style.css"

// export default function Title(props) {
//   return (
//     <>
//       <div className="title">{props.text}</div>
//     </>
//   )
// }

export default function Title({ text, mark, sayHi }) {
  return (
    <>
      <div className="title" onClick={sayHi}>
        {text} {mark || "."}
      </div>
    </>
  )
}
