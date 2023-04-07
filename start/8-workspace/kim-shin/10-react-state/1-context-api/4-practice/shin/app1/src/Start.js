import React from "react"
import { useTranslation } from "react-i18next"
// i18n 임포트하기
import i18n from "i18next"

export default function Start() {
  // i18n 사용하기
  const { t } = useTranslation(["page"])

  const onChangeLang = () => {
    i18n.changeLanguage("ko")
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {" "}
      sdafdsf
      <h2>{t("page:startPage")}</h2>
      <button onClick={onChangeLang}>Change Language</button>
    </div>
  )
}
