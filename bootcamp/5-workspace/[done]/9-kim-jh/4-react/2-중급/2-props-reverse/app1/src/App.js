import { useState } from 'react'
import Child from './Child'

// [자식컴포넌트에게 부모가 props을 받는 방법]
export default function App() {
  // 4. (선물 받으면 놓을 공간(주차장)을 준비해둔다.)
  const [item, setItem] = useState('')

  // 5. 부모컴포넌트에서 콜백함수를 정의한다. (선물 받아서 어떻게 할 건지를 즐겁게 계획해둔다.) 
  const onGift = (gift) => { setItem(gift) }

  return (
      <>
      {/* 6. 자식에게 콜백함수를 넘겨준다. (선물 보내라 요청한다.) */}
      <Child onGift={onGift} />
      {/* 7. (주차장에 넣어놓은 차를 꺼내서 즐겁게 탄다.) */}
      {item}
      </>
  )
}
