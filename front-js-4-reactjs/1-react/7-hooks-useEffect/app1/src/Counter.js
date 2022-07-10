import React, { useEffect, useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1) // 함수형 업데이트 전 : setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1) // 함수형 업데이트 전 : setNumber(number - 1)
    }

    // create -> update -> mount -> unmount

    // 컴포넌트의 탄생과 죽음 : Create, unmount
    useEffect(() => { 
        // create
        console.log('Created') 
        // unmount
        return () => { 
            console.log('Unmounted')
        }        
    }, []) // deps가 빈 배열

    // 컴포넌트의 변경 : update
    useEffect(() => { console.log('Updated: ', number) }, [number]) // deps가 업데이트 watch(감시) 대상

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter
