import Circle from "./Circle.js"

export default function index() {
  return (
    <div>
      <h1>Styled Components</h1>

      <Circle />
      <Circle huge />
      <Circle color="red" />
      <Circle color="blue" huge />
    </div>
  )
}
