import React from "react"

// export default function Hello(props) {
export default function Hello({ name, mark, isSpecial, isMoney }) {
  // JS

  // HTML
  return (
    <>
      <div>
        {/* {props.name}님, 안녕하세요{props.mark} */}
        {isMoney ? "유료 " : "체험 "}
        {isSpecial && "VIP 고객 "}
        {name}님, 안녕하세요{mark || "."}
      </div>
    </>
  )
}
