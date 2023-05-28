import React from "react"
import Title from "components/atoms/Title"

type HelloProps = {
  userName: string
  mark: string
  onClick: (target: string) => void
}

export default function Hello({ userName, mark, onClick }: HelloProps) {
  const handleClick = () => {
    onClick(userName)
  }

  return (
    <>
      <Title text="헬로우 앱" />

      <div onClick={handleClick}>
        Hello, {userName} {mark}
      </div>
    </>
  )
}
