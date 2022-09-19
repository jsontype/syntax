import React, { useState, useCallback } from 'react'

const Child = React.memo(props => {
    console.log('Child가 재렌더링되었습니다.')
    return <button onClick={props.onClick}>Child</button>
})

function App() {
    console.log('App이 재렌더링되었습니다.')
    const [count1, setCount1] = useState(0)
    
    return (
        <>
            <p>count1: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>count + 1</button>
            <Child onClick={onClick} />
        </>
    );
}

export default App;
