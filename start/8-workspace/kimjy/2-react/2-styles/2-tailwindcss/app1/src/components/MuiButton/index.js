import Button from "@mui/material/Button"

export default function MuiButton({ variant = "contained", type = "primary", text }) {
  return (
    <Button variant={variant} color={type}>{text}</Button>
  )
}
