import "./style.scss"

export default function index() {
  return (
    <div>
      <h1 className="basic">Sass</h1>
      <h1 className="global-basic">Sass</h1>

      <button className="primary-button">Primary</button>
      <button className="secondary-button">Secondary</button>
      <button className="warning-button">Warning</button>
      <button className="danger-button">Danger</button>
    </div>
  )
}
