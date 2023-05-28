import React from "react"
import style from "./style.module.css"

export default function Button() {
  const onClick = () => {
    alert("Button이 클릭되었습니다.")
  }

  return (
    <div className={style.btn} onClick={onClick}>
      <button className={style.primary}>버튼</button>
    </div>
  )
}
