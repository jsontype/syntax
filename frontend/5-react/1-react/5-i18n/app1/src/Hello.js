import React from "react"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

export default function Hello(props) {
  const { t } = useTranslation(["page"])

  const onChangeLng = (lng) => {
    lng === "ja"
      ? i18n.changeLanguage("ja")
      : lng === "en"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko")
  }

  return (
    <div>
      <h2>{t("page:startPage")}</h2>
      <p>{t("hello:hello")}</p>

      <button onClick={() => onChangeLng("ko")}>ko</button>
      <button onClick={() => onChangeLng("en")}>en</button>
      <button onClick={() => onChangeLng("ja")}>ja</button>
    </div>
  )
}
