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
export default function Hello({ userName, mark }) {
  return (
    <div>
      <div>
        Hello! {userName}
        {mark}
      </div>
    </div>
  )
}
