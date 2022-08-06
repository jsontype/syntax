import React, { useState } from 'react'

// 1. 컴포넌트화 한다.
// 2. 컴포넌트를 React.memo로 감싼다.
const Child = React.memo(props => {
    console.log('Child가 재렌더링되었습니다.')
    return <p>count2: {props.count2}</p>
})

function App() {
    console.log('App이 재렌더링되었습니다.')
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <>
            <button onClick={() => setCount1(count1 + 1)}>Count1 +</button>
            <button onClick={() => setCount2(count2 + 1)}>Count2 +</button>
            <p>count1: {count1}</p>
            {/* 1. 컴포넌트화 한다. */}
            <Child count2={count2}/>
        </>
    );
}

export default App;
