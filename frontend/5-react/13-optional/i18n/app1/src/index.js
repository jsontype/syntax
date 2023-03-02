import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import i18n from "./i18n"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App i18n={i18n} />) // 프롭을 줄 필요는 없지만 warning 메시지 때문에 줌
