import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

import { controlCSSLayoutColor } from "~libs/cssLayoutControl"

export const config: PlasmoCSConfig = {
  all_frames: true
}

type CSSLayoutDebugData = { debug: boolean }

const CSSLayoutDebug = () => {
  // popupからDOMレイアウトのデッバックの状態を受け取る
  const { data = { debug: false } } = useMessage<
    CSSLayoutDebugData,
    CSSLayoutDebugData
  >(async (req, res) => {
    res.send(req.body)
  })

  controlCSSLayoutColor(data.debug)

  return <></>
}

export default CSSLayoutDebug
