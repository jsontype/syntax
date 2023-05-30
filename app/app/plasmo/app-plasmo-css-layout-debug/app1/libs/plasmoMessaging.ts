import { sendToContentScript } from "@plasmohq/messaging"

/**
 * Content Script経由でブラウザ側のDOMレイアウトの状態を更新する
 * @param state DOMレイアウトの状態
 * @returns
 */
const sendCSSDebugStateToContentScript = async (state: boolean) =>
  await sendToContentScript({
    name: "css-layout-debug",
    body: { debug: state }
  })

export { sendCSSDebugStateToContentScript }
