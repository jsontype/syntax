import React from "react"
import "./style.css"

// export default function Title(props) {
//   return (
//     <>
//       <div className="title">{props.text}</div>
//     </>
//   )
// }

export default function Title({ text, mark, money, special }) {
  const serviceType = special
    ? "VIP용 서비스입니다."
    : money
    ? "유료고객만 이용가능합니다."
    : "무료 서비스입니다."

  return (
    <>
      <div className="title">
        {text} {mark || "."}
      </div>
      <div>{serviceType}</div>
    </>
  )
}
