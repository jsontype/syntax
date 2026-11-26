import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <button onClick={handleClick}>
      돌아가기
    </button>
  )
}
