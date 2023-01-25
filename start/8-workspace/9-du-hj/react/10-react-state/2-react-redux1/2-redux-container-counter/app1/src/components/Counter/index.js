// UI : 프리젠테이셔널 컴포넌트

import React from 'react'
import './style.css'

/* 프리젠테이셔널 컴포넌트 만들기 */
// 프리젠테이셔널 컴포넌트란, Redux store에 직접 접근하지 않고 필요한 값/함수를 props로 받는 컴포넌트이다.
// 주로 UI를 선언하는 것에 집중하는 형태로 구현된다.

// 1. Redux에서 받아올 state(값)과 action(함수)들을 props로 받을 수 있게 준비해둔다.
export default function Counter ({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환
        onSetDiff(Number(e.target.value, 10))
    }
    
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input className="inputFocus" type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}
