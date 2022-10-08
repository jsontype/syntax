import React, { useState, useEffect } from 'react'

export default function Counter() {
    // JS
    // 리액트에서의 변수
    // const a = 1와 아래 코드와 같다고 생각하면 된다.
    const [a, setA] = useState(0)

    const onIncrease = () => {
      setA(a + 1)
    }
  
    const onDecrease = () => {
      setA(a - 1)
    }

    // useEffect(실행할 함수, Deps배열) : Deps는 의존하고 있는 변수
    // useEffect(() => { console.log('created') }, []) // Deps가 빈배열 : Created 시점
    // useEffect(() => { return () => { console.log('unmounted') }}, []) // Deps가 빈배열이고 함수안에 return을 넣고 그 안에 다시 함수형 업데이트된 함수를 넣음 : Unmounted 시점
    //　console.log('unmounted') : 그냥 함수
    // () => { console.log('unmounted') } : 함수형 업데이트된 함수
    // 위 둘을 합칠 수 있음
    useEffect(() => { 
      console.log('created') 
      return () => { console.log('unmounted') }
    }, []) // Deps가 빈배열 : Created 시점

    useEffect(() => { console.log('updated(a): ', a) }, [a])
  
    // XML
    return (
      <>
          <div className='counter'>{a}</div>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
      </>
    )
}
