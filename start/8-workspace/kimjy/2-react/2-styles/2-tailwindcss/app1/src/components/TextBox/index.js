export default function TextBox({ size, text }) {
  const fontSize = {
    sm: "text-[12px]",
    md: "text-[16px]",
    lg: "text-[20px]",
    xl: "text-[24px]",
  }

  return (
    <p className={`p-[10px] m-[10px] flex ${fontSize[size]}`}>
      {text}
    </p>  
  )
}
