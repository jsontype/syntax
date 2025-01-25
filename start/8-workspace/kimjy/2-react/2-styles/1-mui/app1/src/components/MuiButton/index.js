import Button from "@mui/material/Button"

export default function MuiButton({ variant = "contained", type = "primary", text }) {
  // ...

  return (
    <div className="App">
      <Button variant={variant} color={type}>{text}</Button>
    </div>
  )
}
