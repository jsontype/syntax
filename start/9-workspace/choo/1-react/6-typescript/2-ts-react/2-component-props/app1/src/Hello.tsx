import React from "react"

type HelloProps = {
  name: string
  lang: "en" | "ko"
  mark?: string // ? : null 허용
  onClick: (name: string) => void // 아무것도 리턴하지 않는다는 의미, 리턴이 필요하면 여기에 리턴 타입을 적어준다.
}

export default function Hello({ name, lang, mark, onClick }: HelloProps) {
  return (
    <div onClick={() => onClick(name)}>
      {lang === "en" ? "Hello" : "안녕하세요"} {name} {mark}
    </div>
  )
}

// defaultProps : null일 때의 기본값 지정
Hello.defaultProps = {
  lang: "en",
}
