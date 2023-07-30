import React from "react"
import i18n from "i18next"

export default function ChangeLng() {
  const onClick = (lng) => {
    console.log(lng)
    lng === "ja"
      ? i18n.changeLanguage("ja")
      : lng === "en"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko")
  }

  return (
    <>
      <button onClick={() => onClick("en")}>en</button>
      <button onClick={() => onClick("ko")}>ko</button>
      <button onClick={() => onClick("ja")}>ja</button>
    </>
  )
}
