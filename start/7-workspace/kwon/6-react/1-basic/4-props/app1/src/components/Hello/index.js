import React from "react"
import "./style.css"

export default function Hello(props) {
  const hello = () => {
    console.log("hello")
  }

  return (
    <div className="hello">
      <div>{props.name || "guest"}님! 환영합니다.</div>
      <button onClick={hello}>클릭</button>
    </div>
  )
}

// 프롭 쓰는 두번째 방식!
// export default function Hello({ name }) {
//   const hello = () => {
//     console.log("hello")
//   }

//   return (
//     <div className="hello">
//       <div>{name || "guest"}님! 환영합니다.</div>
//       <button onClick={hello}>클릭</button>
//     </div>
//   )
// }
