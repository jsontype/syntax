import React, { useState } from 'react'
import Counter from './Counter'

export default function App () {
    const [isCounter, setIsCounter] = useState(false)

    const onClick = () => {
        console.log('isCounter: ', isCounter, ' → ', !isCounter)
        setIsCounter(isCounter => !isCounter) // 함수형 업데이트 전 : setIsCounter(!isCounter)
    }
    
    return (
        <>
            <button onClick={onClick}>{ isCounter ? 'On' : 'Off' }</button>
            { isCounter && <Counter /> }            
        </>
    )
}
