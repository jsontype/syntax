import React from "react"
import "./style.css"

// export default function Title(props) {
//   return (
//     <>
//       <div className="title">{props.text}</div>
//     </>
//   )
// }

export default function Title({ text, mark }) {
  return (
    <>
      <div className="title">
        {text} {mark || "."}
      </div>
    </>
  )
}
