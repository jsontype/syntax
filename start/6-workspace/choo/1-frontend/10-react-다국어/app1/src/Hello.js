import React from "react"
import { useTranslation } from "react-i18next"

export default function Hello() {
  const { t } = useTranslation()

  return (
    <>
      <div>Name: {t("hello:name")}</div>
      <div>Hello: {t("hello:hello")}</div>
    </>
  )
}
