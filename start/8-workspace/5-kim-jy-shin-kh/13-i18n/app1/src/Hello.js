import React from "react"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

export default function Hello() {
  const { t } = useTranslation()

  const onChangeToKO = () => {
    i18n.changeLanguage("ko")
  }

  const onChangeToEN = () => {
    i18n.changeLanguage("en")
  }

  const onChangeToJA = () => {
    i18n.changeLanguage("ja")
  }

  return (
    <div>
      <h2>{t("page:helloPage")}</h2>
      <p>{t("hello:hello")}</p>

      <button onClick={onChangeToKO}>ko</button>
      <button onClick={onChangeToEN}>en</button>
      <button onClick={onChangeToJA}>ja</button>
    </div>
  )
}
