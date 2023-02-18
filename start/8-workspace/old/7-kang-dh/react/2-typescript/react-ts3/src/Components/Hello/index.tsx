import './style.css'

type HelloProps = {
  name: string,
  language: string,
}

export default function Hello({ name, language }: HelloProps) {
  const hi = language === 'ko' ? '안녕하세요' : 'Hello!'

  return (
    <div>{name}, {hi}!</div>
  )
}
