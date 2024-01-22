import React from "react"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <div>About: {t("about:about")}</div>
      <div>Introduce: {t("about:description")}</div>
    </>
  )
}
