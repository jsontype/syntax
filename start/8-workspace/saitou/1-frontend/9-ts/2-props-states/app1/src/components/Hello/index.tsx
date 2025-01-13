interface HelloProps {
  name?: string
  onClick: () => void
  getUserClass?: (name: string, userClass: string) => string
  userClassify?: string
}

const Hello: React.FC<HelloProps> = ({ name, onClick, getUserClass, userClassify }) => {
  const userName: string = name || 'Stanger'
  const userClass: string = userClassify || 'User'

  const onContextMenu = () => {
    if (getUserClass) {
      const userClassText = getUserClass && getUserClass(userName, userClass)
      alert(userClassText)
    } else return
  }

  return (
    <>
      <div onClick={() => onClick()} onContextMenu={() => onContextMenu()}>Hello {userName}!</div>
    </>
  )
}

export default Hello
