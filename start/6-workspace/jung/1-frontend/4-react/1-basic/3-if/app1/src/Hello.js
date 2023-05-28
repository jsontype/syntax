import React from "react"

// 하위 컴포넌트에 props를 줘서 렌더링하기 : props 전체를 주는 방법
// export default function Hello(props) {
//   return (
//     <div>
//       <div>
//         Hello! {props.userName}
//         {props.mark}
//       </div>
//     </div>
//   )
// }

// 하위 컴포넌트에 props를 줘서 렌더링하기 : props 중 일부만 명시해서 주는 방법
export default function Hello({ userName, mark, isMoney, isSpecial }) {
  const period = mark || "."

  return (
    <div>
      <div>
        안녕하세요{period} {userName || "게스트"}님{period} 환영합니다
        {period}{" "}
        {isMoney
          ? "유료서비스를 이용하실 수 있습니다."
          : "무료서비스를 이용합니다."}
        {isSpecial && "특별고객이시네요. 특별 서비스를 제공합니다."}
      </div>
    </div>
  )
}
