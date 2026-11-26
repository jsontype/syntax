import React from "react"
import Label from "../../components/Atoms/Label"
import useDateUtil from "../../utils/useDateUtil"

export default function Home() {
  const dateUtil = useDateUtil()
  const formattedDate = dateUtil.formatDate(
    dateUtil.currentDate,
    "YYYY-MM-DD HH:mm"
  )

  return (
    <div>
      <Label text="Home" />
      <h2>現在の時刻：{formattedDate}</h2>
    </div>
  )
}
