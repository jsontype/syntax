import { sendCSSDebugStateToContentScript } from "~libs/plasmoMessaging"

const IndexPopup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "max-content"
      }}>
      <h2>CSS Layout Debug</h2>
      <span
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%"
        }}>
        <button onClick={() => sendCSSDebugStateToContentScript(true)}>
          開始
        </button>
        <button onClick={() => sendCSSDebugStateToContentScript(false)}>
          終了
        </button>
      </span>
    </div>
  )
}

export default IndexPopup
