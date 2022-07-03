import React, { useState, useEffect } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)

    // ★useEffect 하나로 모든 라이프사이클 메소드(시점별 메소드)를 구현할 수 있다. : "Created"(Init Mounted) -> "Before Mount - Before Updated - Updated - Mounted"(Circle) -> "Distroyed"(Unmounted)
    // ★★useEffect 사용문법 : useEffect(() => {function, deps})이다. 설명하면, 첫번째 파라미터에는 함수, 두번째 파라미터에는 watch를 하는 변수인 deps를 넣는다.

    // useEffect 1. useEffect의 deps를 빈 배열로 할 경우 컴포넌트의 Created, Distroyed 시점을 구현할 수 있다.
    useEffect(() => {
        // Created 시점 구현 : deps가 []이면, 컴포넌트가 나타날 때 "useEffect안의 함수" 실행된다.
        console.log('Mounted (Deps []): 컴포넌트가 화면에 나타남')
        // Distroyed 시점 구현 : deps가 []이면, 컴포넌트가 사라질 때 "useEffect안의 return으로 반환된 함수"가 실행된다. (정리하는 기능이 있다는 의미로, 이것을 Cleanup 함수라고도 한다.)
        return () => {
            console.log('Unmounted (Deps []): 컴포넌트가 화면에서 사라짐')
        }
    }, [])

    // useEffect 2. useEffect의 deps를 state로 할 경우 컴포넌트 내의 state의 Before Mount, Mounted 시점을 구현할 수 있다.
    useEffect(() => {
        // * Updated 시점 구현은 실제 number가 바뀌는 setNumber 전후에서 구현한다.
        // Before Mount 시점 구현 : deps가 [number]이면, number state가 바뀌기 전 실행된다.
        console.log(`Before Mount (Deps [number]): number가 다음과 같이 바뀌기 전임 → ${number}`)
        // Mounted 시점 구현 : deps가 [number]이면, number state가 바뀐 후 실행된다.
        return () => {
            console.log(`Mounted (Deps [number]): number가 ${number}로 Updated된 것을 Mounted함`)
        }
    }, [number])

    const onIncrease = () => {
        // Before Update 시점
        setNumber(prevNumber => prevNumber + 1) // 함수형 업데이트 전 : setNumber(number + 1)
        // Updated 시점
    }

    const onDecrease = () => {
        // Before Update 시점
        setNumber(prevNumber => prevNumber - 1) // 함수형 업데이트 전 : setNumber(number - 1)
        // Updated 시점
    }

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter