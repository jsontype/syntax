import { useState } from "react"

export default function useDateUtil() {
  const [currentDate] = useState(new Date())

  const formatDate = (date, format = "YYYY-MM-DD") => {
    // data オブゼクトから年を取得して YYYY 変数に保存
    const YYYY = date.getFullYear() // 예: 2024
    // date オブジェクトから月を取得して MM 変数に保存 (1月は0なので +1 している), padStart(2, "0") は2桁に合わせるために1桁の数字の前に0を追加
    const MM = String(date.getMonth() + 1).padStart(2, "0") // 예: 05
    // date オブジェクトから日を取得して DD 変数に保存, padStart(2, "0") は2桁に合わせるために1桁の数字の前に0を追加
    const DD = String(date.getDate()).padStart(2, "0") // 예: 26
    const HH = String(date.getHours()).padStart(2, "0") // 예: 12
    const mm = String(date.getMinutes()).padStart(2, "0") // 예: 34
    // ... 他のフォーマットも必要ならここに追加可能

    if (format === "YYYY-MM-DD HH:mm") {
      return `${YYYY}-${MM}-${DD} ${HH}:${mm}`
    }
    if (format === "YYYY-MM-DD") {
      return `${YYYY}-${MM}-${DD}`
    }
    if (format === "YYYY/MM/DD") {
      return `${YYYY}/${MM}/${DD}`
    }
    // ... 他のフォーマットも必要ならここに追加可能
    return `${YYYY}-${MM}-${DD}`
  }

  return {
    currentDate,
    formatDate,
  }
}
