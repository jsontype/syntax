import React from "react"

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
      <div onClick={handleClick}>
        Hello, {userName} {mark}
      </div>
    </>
  )
}
